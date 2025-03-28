package com.korit.silverbutton.config;

import com.korit.silverbutton.filter.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    @Lazy
    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public WebSecurityCustomizer configure() {
        return (web) -> web.ignoring()
                .requestMatchers(new AntPathRequestMatcher("/api/v1/static/**"),
                        new AntPathRequestMatcher("/api/v1/auth"),
                        new AntPathRequestMatcher("/api/v1/auth/**")
                );
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOriginPattern("*");  // 운영 환경에서는 특정 도메인만 허용
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(withDefaults())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                new AntPathRequestMatcher("/api/v1/auth/**"),
                                new AntPathRequestMatcher("/api/v1/mail/**"),
                                new AntPathRequestMatcher("/api/v1/board/all"),
                                new AntPathRequestMatcher("/api/v1/board/view/**"),
                                new AntPathRequestMatcher("/api/v1/comment/all"),
                                new AntPathRequestMatcher("/api/v1/manage/**"),
                                new AntPathRequestMatcher("/api/v1/health-magazine/**"),
                                new AntPathRequestMatcher("/api/v1/medicine/**"),
                                new AntPathRequestMatcher("/api/v1/message/**"),
                                new AntPathRequestMatcher("/api/v1/matching/**"),
                                new AntPathRequestMatcher("/api/v1/health-record/**"),
                                new AntPathRequestMatcher("/api/v1/meal-record/**"),
                                new AntPathRequestMatcher("/api/v1/emergency-contact/**"),
                                new AntPathRequestMatcher("/api/v1/diary/**"),
                                new AntPathRequestMatcher("/manage/register-second-password"),
                                new AntPathRequestMatcher("/api/v1/test-question/**"),
                                new AntPathRequestMatcher("/api/v1/exercise/**"),
                                new AntPathRequestMatcher("/api/v1/expense/**"),
                                new AntPathRequestMatcher("/api/v1/destination/**"),
                                new AntPathRequestMatcher("/api/v1/user-saved-destination/**"),
                                new AntPathRequestMatcher("/api/v1/review/**"),
                                new AntPathRequestMatcher("/api/v1/review-like/**")
                        )
                        .permitAll()  // 위의 엔드포인트는 모두 허용
                        .requestMatchers(
                                new AntPathRequestMatcher("/api/v1/medicine-schedule/**")
                        ).authenticated()
                        .anyRequest().authenticated())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)  // JWT 필터가 인증 필터 전에 실행되도록 추가
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(BCryptPasswordEncoder bCryptpasswordEncoder) throws Exception {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setPasswordEncoder(bCryptpasswordEncoder);
        return new ProviderManager(List.of(authProvider));
    }

    @Bean
    public BCryptPasswordEncoder bCryptpasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
