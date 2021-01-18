package com.kam.browser.controller;

import com.kam.browser.model.AddResources;
import com.kam.browser.service.AddResourcesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@Controller
@RequestMapping("/kam-api/add-resources")
@CrossOrigin(origins = "http://localhost:4200")
public class AddResourcesController {
  private final AddResourcesService addResourcesService;

  public AddResourcesController(AddResourcesService addResourcesService) {
    this.addResourcesService = addResourcesService;
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getAddResourcesByUserId(@PathVariable Long id) {
    return ResponseEntity.ok(addResourcesService.getAddResourcesForUserId(id));
  }

  @GetMapping("/check/{id}")
  public ResponseEntity<Long> getAddResourcesMultiplier(@PathVariable Long id) {
    return ResponseEntity.ok(addResourcesService.getAddResourcesMultiplierForUserId(id));
  }

  @PostMapping("/{id}")
  public ResponseEntity<?> initializeAddResourcesForUser(@PathVariable Long id) {
    AddResources createdAddResources = addResourcesService.initializeAddResourcesForUserId(id);
    return Objects.isNull(createdAddResources) ? ResponseEntity.badRequest().build() : ResponseEntity.status(HttpStatus.CREATED).body(createdAddResources);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateAddResourcesForUserById(@PathVariable Long id, @RequestBody AddResources addResources) {
    return addResourcesService.updateAddResourcesForUserId(id, addResources) ? ResponseEntity.accepted().build() : ResponseEntity.badRequest().build();
  }

  @PutMapping("/check/{id}")
  public ResponseEntity<?> updateResourcesAddingDate(@PathVariable Long id) {
    return addResourcesService.updateResourcesAddingHourForUserId(id) ? ResponseEntity.accepted().build() : ResponseEntity.badRequest().build();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> removeAddResourcesForUserById(@PathVariable Long id) {
    return addResourcesService.removeAddResourcesListForUserId(id) ? ResponseEntity.accepted().build() : ResponseEntity.badRequest().build();
  }
}
