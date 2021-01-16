package com.kam.browser.service;

import com.kam.browser.model.Resources;
import com.kam.browser.repository.ResourcesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourcesServiceImpl implements ResourcesService {

  private final ResourcesRepository resourcesRepository;
  private final UserService userService;

  public ResourcesServiceImpl(ResourcesRepository resourcesRepository, UserService userService) {
    this.resourcesRepository = resourcesRepository;
    this.userService = userService;
  }


  @Override
  public Resources initializeResourcesForUserId(Long userId) {
    Resources resources = initializeResources();
    resources.setUser(userService.getUserById(userId));
    return resourcesRepository.save(resources);
  }

  @Override
  public Resources getResourcesForUserId(Long userId) {
    return resourcesRepository.findByUser_Id(userId);
  }

  @Override
  public List<Resources> getListOfResourcesForUsers() {
    return resourcesRepository.findAll();
  }

  @Override
  public Boolean removeResourcesListForUserId(Long userId) {
    return resourcesRepository.deleteByUser_Id(userId);
  }

  @Override
  public Boolean updateResourcesForUserId(Long userId, Resources resources) {
    if(resourcesRepository.existsByUser_Id(userId)) {
      resources.setUser(userService.getUserById(userId));
      resourcesRepository.save(resources);
      return true;
    }
    return false;
  }



  private Resources initializeResources() {
    return Resources.builder()
      .axe(0)
      .bow(0)
      .bread(0)
      .builder(2)
      .coal(0)
      .crossbow(0)
      .fish(0)
      .flour(0)
      .gold(20)
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
      .plank(25)
      .sausage(0)
      .skin(0)
      .stone(20)
      .sword(0)
      .wheat(0)
      .wine(30)
      .wood(0)
      .woodenShield(0)
      .worker(10)
      .build();
  }

}
