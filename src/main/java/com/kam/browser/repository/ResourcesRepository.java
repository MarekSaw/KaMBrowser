package com.kam.browser.repository;

import com.kam.browser.model.Resources;
import com.kam.browser.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourcesRepository extends JpaRepository<Resources, Long> {

  Resources findByUser_Id(Long userId);
  Boolean deleteByUser_Id(Long userId);
  Boolean existsByUser_Id(Long userId);


}
