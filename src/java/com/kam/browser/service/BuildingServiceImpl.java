package com.kam.browser.service;

import com.kam.browser.enums.Building;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BuildingServiceImpl implements BuildingService{

  @Override
  public Building getBuildingByMapAndFieldNumber(String map, Integer fieldNumber) {
    return Arrays.stream(Building.values())
      .filter(building -> building.getMapBelonging().equals(map) && building.getFieldNumberBelonging().equals(fieldNumber))
      .findAny().orElse(null);
  }
}
