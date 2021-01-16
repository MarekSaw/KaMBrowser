package com.kam.browser.service;

import com.kam.browser.model.AddResources;
import com.kam.browser.repository.AddResourcesRepository;
import org.springframework.stereotype.Service;

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
    AddResources addResources = initializeAddResources();
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

  private AddResources initializeAddResources() {
    return AddResources.builder()
      .axe(0)
      .bow(0)
      .bread(0)
      .builder(0)
      .coal(0)
      .crossbow(0)
      .fish(0)
      .flour(0)
      .gold(0)
      .goldOre(0)
      .horse(0)
      .iron(0)
      .ironArmor(0)
      .ironOre(0)
      .ironShield(0)
      .lance(0)
      .leather(0)
      .leatherArmor(0)
      .pig(0)
      .pike(0)
      .plank(0)
      .sausage(0)
      .skin(0)
      .stone(20)
      .sword(0)
      .wheat(0)
      .wine(0)
      .wood(0)
      .woodenShield(0)
      .worker(0)
      .build();
  }
}
