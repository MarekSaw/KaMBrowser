package com.kam.browser.service;

import com.kam.browser.model.AddResources;


public interface AddResourcesService {
  AddResources initializeAddResourcesForUserId(Long userId);

  AddResources getAddResourcesForUserId(Long userId);

  Boolean removeAddResourcesListForUserId(Long userId);

  Boolean updateAddResourcesForUserId(Long userId, AddResources addResources);

  Long getAddResourcesMultiplierForUserId(Long userId);

  Boolean updateResourcesAddingHourForUserId(Long userId);
}
