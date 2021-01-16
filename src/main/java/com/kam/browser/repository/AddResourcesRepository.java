package com.kam.browser.repository;

import com.kam.browser.model.AddResources;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddResourcesRepository extends JpaRepository<AddResources, Long> {

  AddResources findByUser_Id(Long userId);
  Boolean deleteByUser_Id(Long userId);
  Boolean existsByUser_Id(Long userId);
}
