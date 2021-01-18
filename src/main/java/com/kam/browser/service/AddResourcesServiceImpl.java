package com.kam.browser.service;

import com.kam.browser.model.AddResources;
import com.kam.browser.repository.AddResourcesRepository;
import org.springframework.stereotype.Service;

import java.time.*;

@Service
public class AddResourcesServiceImpl implements AddResourcesService {

  private final AddResourcesRepository addResourcesRepository;
  private final UserService userService;

  public AddResourcesServiceImpl(AddResourcesRepository addResourcesRepository, UserService userService) {
    this.addResourcesRepository = addResourcesRepository;
    this.userService = userService;
  }

  @Override
  public AddResources initializeAddResourcesForUserId(Long userId) {
    AddResources addResources = AddResources.initializeAddResources();
    addResources.setUser(userService.getUserById(userId));
    return addResourcesRepository.save(addResources);
  }

  @Override
  public AddResources getAddResourcesForUserId(Long userId) {
    return addResourcesRepository.findByUser_Id(userId);
  }

  @Override
  public Boolean removeAddResourcesListForUserId(Long userId) {
    return addResourcesRepository.deleteByUser_Id(userId);
  }

  @Override
  public Boolean updateAddResourcesForUserId(Long userId, AddResources addResources) {
    if(addResourcesRepository.existsByUser_Id(userId)) {
      addResources.setUser(userService.getUserById(userId));
      addResourcesRepository.save(addResources);
      return true;
    }
    return false;
  }

  @Override
  public Long getAddResourcesMultiplierForUserId(Long userId) {
    LocalDateTime actualDate = LocalDateTime.now().atOffset(ZoneOffset.UTC).toLocalDateTime();
    System.out.println(actualDate);
    LocalDateTime dateToCheck = getAddResourcesForUserId(userId).getDate();
    System.out.println(dateToCheck);
    if (actualDate.isAfter(dateToCheck)) {
      return Duration.between(dateToCheck, actualDate).toHours() / 2;
    }
    return 0L;
  }

  @Override
  public Boolean updateResourcesAddingHourForUserId(Long userId) {
    AddResources addResources = getAddResourcesForUserId(userId);
    addResources.setDate(LocalDateTime.now());
    return updateAddResourcesForUserId(userId, addResources);
  }


}
