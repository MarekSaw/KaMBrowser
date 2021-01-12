package com.kam.browser.controller;

import com.kam.browser.enums.Building;
import com.kam.browser.model.User;
import com.kam.browser.service.BuildingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/kam-api/buildings")
public class BuildingController {

  public final BuildingService buildingService;

  public BuildingController(BuildingService buildingService) {
    this.buildingService = buildingService;
  }

//  @GetMapping()
  @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> getMapBuildings(@RequestParam String map){
    List<Building> buildings = buildingService.getBuildingsByMap(map);
//    List<String> buildingsStringList = new ArrayList<>();
//    for (int i = 0; i < buildings.size(); i++) {
//      buildingsStringList.add(buildings.get(i).toString());
//    }

    return Objects.isNull(buildings) ? ResponseEntity.badRequest().build() : ResponseEntity.status(HttpStatus.CREATED).body(buildings);
  }


}
