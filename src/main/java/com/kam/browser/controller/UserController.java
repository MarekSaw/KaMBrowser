package com.kam.browser.controller;

import com.kam.browser.model.User;
import com.kam.browser.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Objects;

@RestController
@Slf4j
@RequestMapping("/kam-api/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public ResponseEntity<?> createUser(@Valid @RequestBody User user) {
    User createdUser = userService.createUser(user);
    return Objects.isNull(createdUser) ? ResponseEntity.badRequest().build() : ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getUserById(@PathVariable Long id) {
    return ResponseEntity.ok(userService.getUserById(id));
  }

  @GetMapping
  public ResponseEntity<?> getAllUsers() {
    return ResponseEntity.ok(userService.getAllUsers());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> removeUserById(@PathVariable Long id) {
    return userService.removeUserById(id) ? ResponseEntity.accepted().build() : ResponseEntity.badRequest().build();
  }

}
