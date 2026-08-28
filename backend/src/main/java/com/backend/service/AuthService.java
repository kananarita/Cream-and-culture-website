package com.backend.service;

import com.backend.dto.request.InviteAdminRequest;
import com.backend.dto.request.LoginRequest;
import com.backend.dto.request.RegisterRequest;
import com.backend.dto.response.AuthResponse;
import com.backend.dto.response.UserResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
    UserResponse inviteAdmin(InviteAdminRequest request);
}
