package com.kam.browser.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
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
@CrossOrigin(origins = "http://localhost:4200")
public class BuildingController {

  public final BuildingService buildingService;

  public BuildingController(BuildingService buildingService) {
    this.buildingService = buildingService;
  }


  @GetMapping
  public ResponseEntity<?> getMapBuildings(@RequestParam String map, @RequestParam Integer fieldNumber){
    Building building = buildingService.getBuildingByMapAndFieldNumber(map, fieldNumber);

    return Objects.isNull(building) ? ResponseEntity.badRequest().build() : ResponseEntity.status(HttpStatus.CREATED).body(building);
  }


}
