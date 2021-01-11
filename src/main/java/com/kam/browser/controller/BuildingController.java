package com.kam.browser.controller;

import com.kam.browser.enums.Building;
import com.kam.browser.model.User;
import com.kam.browser.service.BuildingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/kam-api/buildings")
public class BuildingController {

  public final BuildingService buildingService;

  public BuildingController(BuildingService buildingService) {
    this.buildingService = buildingService;
  }

  @GetMapping
  public ResponseEntity<?> getMapBuildings(@RequestParam String map){
    List<Building> buildings = buildingService.getBuildingsByMap(map);
    return Objects.isNull(buildings) ? ResponseEntity.badRequest().build() : ResponseEntity.status(HttpStatus.CREATED).body(buildings);
  }


}
