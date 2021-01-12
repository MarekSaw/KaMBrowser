package com.kam.browser.service;

import com.kam.browser.enums.Building;

import java.util.List;

public interface BuildingService {

  List<Building> getBuildingsByMapAndFieldNumber(String map, Integer fieldNumber);

}
