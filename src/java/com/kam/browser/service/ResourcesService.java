package com.kam.browser.service;

import com.kam.browser.model.Resources;
import com.kam.browser.model.User;

import java.util.List;

public interface ResourcesService {

  Resources initializeResourcesForUserId(Long userId);
  Resources getResourcesForUserId(Long userId);
  List<Resources> getListOfResourcesForUsers();
  Boolean removeResourcesListForUserId(Long userId);
  Boolean updateResourcesForUserId(Long userId, Resources resources);
  Boolean addAndUpdateResourcesForUserId(Long userId, Resources resourcesToAdd);


}
