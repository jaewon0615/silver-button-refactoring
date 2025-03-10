package com.korit.silverbutton.provider;

import com.korit.silverbutton.service.TokenBlacklistService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtProvider {

    private Key key;
    private final TokenBlacklistService tokenBlacklistService;

    @Value("${jwt.expiration}")
    private int jwtExpirationMs;
    public int getExpiration(){
        return jwtExpirationMs;
    }

    public JwtProvider(@Value("${jwt.secret}") String secret, TokenBlacklistService tokenBlacklistService, @Value("${jwt.expiration}") int jwtExpirationMs) {
        this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
        this.tokenBlacklistService = tokenBlacklistService;
        this.jwtExpirationMs = jwtExpirationMs;
    }

    public String generateJwtToken(String userId, boolean isDependentLogin, String role) {
        return Jwts.builder()
                .claim("userId", userId)
                .claim("isDependentLogin", isDependentLogin)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
    public String generateEmailValidToken(String userId) {
        return Jwts.builder()
                .claim("userId", userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + (1000L * 60 * 5)))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
    public String removeBearer(String bearerToken) {
        if (bearerToken == null || !bearerToken.startsWith("Bearer ")) {
            throw new RuntimeException("Invalid JWT token format");
        }
        return bearerToken.substring("Bearer ".length());
    }
    public String getUserIdFromJwt(String token) {
        Claims claims = getClaims(token);
        return claims.get("userId", String.class);
    }

    public String getUsernameFromEmailJwt(String token) {
        System.out.println("실행 token" + token);
        Claims claims = getClaims(token);
        System.out.println("실행 claims" + claims);

        String username = claims.get("userId", String.class);
        System.out.println(username);
        return claims.get("userId", String.class);
    }

    public boolean isValidToken(String token) {
        try {
            if (tokenBlacklistService.isTokenBlacklisted(token)) {
                return false;
            }
            getClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public Claims getClaims(String token) {
        JwtParser jwtParser = Jwts.parserBuilder()
                .setSigningKey(key)
                .build();
        return jwtParser.parseClaimsJws(token).getBody();
    }

    public Boolean getIsDependentIdFromJwt(String token) {
        Claims claims = getClaims(token);
        return claims.get("isDependentLogin", Boolean.class);
    }
}