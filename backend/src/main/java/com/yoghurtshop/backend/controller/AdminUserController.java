package com.yoghurtshop.backend.controller;

import com.yoghurtshop.backend.dto.request.InviteAdminRequest;
import com.yoghurtshop.backend.dto.response.UserResponse;
import com.yoghurtshop.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/users")
@RequiredArgsConstructor
public class AdminUserController {

    private final AuthService authService;

    @PostMapping("/invite-admin")
    public ResponseEntity<UserResponse> inviteAdmin(@Valid @RequestBody InviteAdminRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.inviteAdmin(request));
    }
}