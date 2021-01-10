package com.kam.browser.service;

import com.kam.browser.model.User;
import com.kam.browser.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class UserServiceImpl implements UserService{

  private final UserRepository userRepository;

  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }


  @Override
  public User createUser(User user) {
    return userRepository.save(user);
  }

  @Override
  public User getUserById(Long id) {
    return userRepository.findById(id).orElse(null);
  }

  @Override
  public Boolean removeUserById(Long id) {
    if(userRepository.existsById(id)){
      userRepository.deleteById(id);
      return true;
    }
    return false;
  }

  @Override
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }
}
