package com.kam.browser.controller;

import com.kam.browser.model.Resources;
import com.kam.browser.service.ResourcesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/kam-api/resources")
@CrossOrigin(origins = "http://localhost:4200")
public class ResourceController {

  private final ResourcesService resourcesService;

  public ResourceController(ResourcesService resourcesService) {
    this.resourcesService = resourcesService;
  }

  @GetMapping
  public ResponseEntity<?> getListOfResourcesForAllUsers() {
    return ResponseEntity.ok(resourcesService.getListOfResourcesForUsers());
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getResourcesByUserId(@PathVariable Long id) {
    return ResponseEntity.ok(resourcesService.getResourcesForUserId(id));
  }

  @PostMapping("/{id}")
  public ResponseEntity<?> initializeResourcesForUser(@PathVariable Long id) {
    Resources createdResources = resourcesService.initializeResourcesForUserId(id);
    return Objects.isNull(createdResources) ? ResponseEntity.badRequest().build() : ResponseEntity.status(HttpStatus.CREATED).body(createdResources);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateResourcesForUserById(@PathVariable Long id, @RequestBody Resources resources) {
    return resourcesService.updateResourcesForUserId(id, resources) ? ResponseEntity.accepted().build() : ResponseEntity.badRequest().build();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> removeResourcesForUserById(@PathVariable Long id) {
    return resourcesService.removeResourcesListForUserId(id) ? ResponseEntity.accepted().build() : ResponseEntity.badRequest().build();
  }


}
