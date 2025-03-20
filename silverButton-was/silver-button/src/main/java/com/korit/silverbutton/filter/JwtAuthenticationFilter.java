package com.korit.silverbutton.filter;

import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.provider.JwtProvider;
import com.korit.silverbutton.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        try {
            String requestURI = request.getRequestURI();
            System.out.println("Request URI: " + requestURI);  // 요청된 URI 출력

            // 인증 제외 경로 (2차 비밀번호 등록은 인증 없이 가능)
            if (requestURI.startsWith("/manage/register-second-password")) {
                System.out.println("Bypassing authentication for: " + requestURI);
                filterChain.doFilter(request, response);
                return;
            }

            String authorizationHeader = request.getHeader("Authorization");
            String token = (authorizationHeader != null && authorizationHeader.startsWith("Bearer "))
                    ? jwtProvider.removeBearer(authorizationHeader) : null;

            // 마이페이지 접근 시 2차 비밀번호 토큰 검증
            if (requestURI.startsWith("/mypage")) {
                if (token == null || !jwtProvider.isValidToken(token)) {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid myPageToken");
                    return;
                }
                String userId = jwtProvider.getUserIdFromJwt(token);
                Optional<User> userOptional = userRepository.findByUserId(userId);
                if (userOptional.isEmpty()) {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "User not found");
                    return;
                }
                setAuthenticationContext(request, userOptional.get());
                filterChain.doFilter(request, response);
                return;
            }

            // 일반 JWT 인증 처리
            if (token == null || !jwtProvider.isValidToken(token)) {
                filterChain.doFilter(request, response);
                return;
            }

            String userId = jwtProvider.getUserIdFromJwt(token);
            User user = userRepository.findByUserId(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));

            // 가족 계정(부양자) 권한 제한
            Boolean isDependentId = jwtProvider.getIsDependentIdFromJwt(token);
            System.out.println("Extracted isDependentId: " + isDependentId);
            if (Boolean.TRUE.equals(isDependentId) && requestURI.startsWith("/api/v1/schedule/")) {
                response.sendError(HttpServletResponse.SC_FORBIDDEN, "You cannot access this API.");
                return;
            }

            setAuthenticationContext(request, user);
        } catch (Exception e) {
            e.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }

    private void setAuthenticationContext(HttpServletRequest request, User user) {
        AbstractAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(
                PrincipalUser.builder()
                        .id(user.getId())
                        .userId(user.getUserId())
                        .role(user.getRole())
                        .name(user.getName())
                        .phone(user.getPhone())
                        .build(),
                null,
                AuthorityUtils.NO_AUTHORITIES
        );
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
        securityContext.setAuthentication(authenticationToken);

        SecurityContextHolder.setContext(securityContext);
    }
}
