package com.kam.browser.service;

import com.kam.browser.enums.Building;
import com.kam.browser.model.Field;
import com.kam.browser.model.FieldResourcesInformation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
@Slf4j
public class FieldResourcesInformationServiceServiceImpl implements FieldResourcesInformationService {

  private final FieldService fieldService;
  private final BuildingService buildingService;

  private final Double WORKERS_BASIS_OF_POWER = 1.24;

  public FieldResourcesInformationServiceServiceImpl(FieldService fieldService, BuildingService buildingService) {
    this.fieldService = fieldService;
    this.buildingService = buildingService;
  }

  @Override
  public FieldResourcesInformation getFieldResourcesInformation(String map, Integer fieldNumber, Long id) {
    Field field = fieldService.getFieldByMapAndFieldNumberAndUserId(map, fieldNumber, id);
    Integer buildingLevel = field.getBuildingLevel();

    Building building = buildingService.getBuildingByMapAndFieldNumber(map, fieldNumber);

    long resourcesNeeded = getPlanksAndStonesNeeded(buildingLevel);
    long buildingTimeSeconds = getBuildingTimeSeconds(buildingLevel);
    long workersNeeded = getWorkersNeeded(buildingLevel);

    return FieldResourcesInformation.builder()
      .planksNeeded(Math.round(resourcesNeeded*building.getPlanksMultiplier()))
      .stonesNeeded(Math.round(resourcesNeeded*building.getStoneMultiplier()))
      .workersNeeded(Math.round(workersNeeded*building.getWorkersMultiplier()))
      .timeSecondsToUpgrade(Math.round(buildingTimeSeconds*building.getTimeMultiplier()))
      .timeSecondsToEndUpgrade(getTimeSecondsToEndUpgradeField(field))
      .build();
  }


  private Long getTimeSecondsToEndUpgradeField(Field field) {
    return  (field.getEndOfBuildingTime().toEpochSecond(ZoneOffset.UTC)) - LocalDateTime.now().toEpochSecond(ZoneOffset.UTC);
  }

  private long getBuildingTimeSeconds(int buildingLevel) {
    double buildingTimeSeconds;
    if (buildingLevel <= 0){
      buildingTimeSeconds = 5.0;
    }else {
      buildingTimeSeconds = 7.185 * Math.pow(buildingLevel, 3) - 24.35 * Math.pow(buildingLevel, 2) + 36.18 * buildingLevel - 6;
    }
    return Math.round(buildingTimeSeconds);
  }

  private long getPlanksAndStonesNeeded(int buildingLevel) {
    double buildingResourcesNeeded;
    if (buildingLevel <= 0){
      buildingResourcesNeeded = 4.0;
    } else if (buildingLevel<=20){
      buildingResourcesNeeded = 0.017 * Math.pow(buildingLevel, 4) - 0.314 * Math.pow(buildingLevel, 3) + 4.052 * Math.pow(buildingLevel, 3) - 0.404 * buildingLevel + 4.128;
    } else {
      //todo change for 20+ lvl
      buildingResourcesNeeded = 7.2185 * Math.pow(buildingLevel, 3) - 24.35 * Math.pow(buildingLevel, 2) + 36.18 * buildingLevel - 6;
    }
    return Math.round(buildingResourcesNeeded);
  }

  private long getWorkersNeeded(int buildingLevel) {
    double buildingWorkersNeeded;
    if (buildingLevel <= 0){
      buildingWorkersNeeded = 1.0;
    } else {
      buildingWorkersNeeded = Math.pow(WORKERS_BASIS_OF_POWER, buildingLevel) +1;
    }
    return Math.round(buildingWorkersNeeded);
  }
}
