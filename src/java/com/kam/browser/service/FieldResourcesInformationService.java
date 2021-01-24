package com.kam.browser.service;

import com.kam.browser.model.FieldResourcesInformation;

public interface FieldResourcesInformationService {
  FieldResourcesInformation getFieldResourcesInformation(String map, Integer fieldNumber, Long id);

  Long getTimeSecondsToEndUpgradeField(String map, Integer fieldNumber, Long id);
}
