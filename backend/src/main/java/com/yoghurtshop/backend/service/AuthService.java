package com.yoghurtshop.backend.service;

import com.yoghurtshop.backend.dto.request.InviteAdminRequest;
import com.yoghurtshop.backend.dto.request.LoginRequest;
import com.yoghurtshop.backend.dto.request.RegisterRequest;
import com.yoghurtshop.backend.dto.response.AuthResponse;
import com.yoghurtshop.backend.dto.response.UserResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
    UserResponse inviteAdmin(InviteAdminRequest request);
}
