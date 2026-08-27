package com.yoghurtshop.backend.service.impl;

import com.yoghurtshop.backend.dto.request.InviteAdminRequest;
import com.yoghurtshop.backend.dto.request.LoginRequest;
import com.yoghurtshop.backend.dto.request.RegisterRequest;
import com.yoghurtshop.backend.dto.response.AuthResponse;
import com.yoghurtshop.backend.dto.response.UserResponse;
import com.yoghurtshop.backend.entity.User;
import com.yoghurtshop.backend.enums.Role;
import com.yoghurtshop.backend.exception.DuplicateResourceException;
import com.yoghurtshop.backend.repository.UserRepository;
import com.yoghurtshop.backend.security.JwtService;
import com.yoghurtshop.backend.security.UserPrincipal;
import com.yoghurtshop.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("An account with this email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail().toLowerCase())
                .password(passwordEncoder.encode(request.getPassword()))
                .phoneNumber(request.getPhoneNumber())
                .role(Role.CUSTOMER)
                .enabled(true)
                .build();

        userRepository.save(user);

        UserPrincipal principal = new UserPrincipal(user);
        String token = jwtService.generateToken(principal);

        return AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail().toLowerCase(), request.getPassword())
        );

        User user = userRepository.findByEmail(request.getEmail().toLowerCase())
                .orElseThrow(() -> new IllegalStateException("User authenticated but not found"));

        UserPrincipal principal = new UserPrincipal(user);
        String token = jwtService.generateToken(principal);

        return AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }

    @Override
    public UserResponse inviteAdmin(InviteAdminRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("An account with this email already exists");
        }

        User admin = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail().toLowerCase())
                .password(passwordEncoder.encode(request.getPassword()))
                .phoneNumber(request.getPhoneNumber())
                .role(Role.ADMIN)
                .enabled(true)
                .build();

        userRepository.save(admin);

        return UserResponse.builder()
                .id(admin.getId())
                .fullName(admin.getFullName())
                .email(admin.getEmail())
                .phoneNumber(admin.getPhoneNumber())
                .role(admin.getRole())
                .enabled(admin.isEnabled())
                .createdAt(admin.getCreatedAt())
                .build();
    }
}
