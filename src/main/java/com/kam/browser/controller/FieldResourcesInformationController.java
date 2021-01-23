package com.kam.browser.controller;

import com.kam.browser.model.FieldResourcesInformation;
import com.kam.browser.service.FieldResourcesInformationService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Objects;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/kam-api/fieldResourcesInformation")
public class FieldResourcesInformationController {

  private final FieldResourcesInformationService fieldResourcesInformationService;

  public FieldResourcesInformationController(FieldResourcesInformationService fieldResourcesInformationService) {
    this.fieldResourcesInformationService = fieldResourcesInformationService;
  }

  @GetMapping
  public ResponseEntity<?> getFieldResourcesInformation(@RequestParam String map, @RequestParam Integer fieldNumber){
    Long userId = 1L;
    FieldResourcesInformation fieldResourcesInformation = fieldResourcesInformationService.getFieldResourcesInformation(map, fieldNumber, userId);
    return Objects.isNull(fieldResourcesInformation) ? ResponseEntity.badRequest().build() : ResponseEntity.ok(fieldResourcesInformation);
  }
  @GetMapping("/time/end")
  public ResponseEntity<?> getTimeSecondsToEndUpgrade(@RequestParam String map, @RequestParam Integer fieldNumber){
    Long id = 1L;
    Long time = fieldResourcesInformationService.getTimeSecondsToEndUpgradeField(map,fieldNumber,id);
    return Objects.isNull(time) ? ResponseEntity.badRequest().build() : ResponseEntity.ok(time);
  }
}
