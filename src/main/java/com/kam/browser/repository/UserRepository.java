package com.kam.browser.repository;

import com.kam.browser.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  User findByUsername(String username);

  User findByEmail(String username);

  @Query(value = "SELECT u FROM users u where u.username = :usernameOrEmail or u.email = :usernameOrEmail")
  User findByUsernameAndEmail(@Param("usernameOrEmail") String usernameOrEmail);


}
