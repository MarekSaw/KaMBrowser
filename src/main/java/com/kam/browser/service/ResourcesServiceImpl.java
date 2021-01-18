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
    Resources resources = Resources.initializeResources();
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

  @Override
  public Boolean addAndUpdateResourcesForUserId(Long userId, Resources resourcesToAdd) {
    return updateResourcesForUserId(userId, getResourcesForUserId(userId).addResources(resourcesToAdd));
  }


}
