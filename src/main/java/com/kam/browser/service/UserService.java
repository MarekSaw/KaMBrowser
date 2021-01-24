package com.kam.browser.service;


import com.kam.browser.model.User;

import java.util.List;

public interface UserService {

  User createUser(User user);
  User getUserById(Long id);
  Boolean removeUserById(Long id);
  List<User> getAllUsers();

}
