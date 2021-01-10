package com.kam.browser.service;

import com.kam.browser.enums.Building;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BuildingServiceImpl implements BuildingService{



  @Override
  public List<Building> getBuildingsByMap(String map) {
    return Arrays.stream(Building.values()).filter(building -> building.getMapBelonging().equals(map)).collect(Collectors.toList());
  }

}
