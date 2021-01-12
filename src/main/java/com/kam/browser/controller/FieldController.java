package com.kam.browser.controller;

import com.kam.browser.model.Field;
import com.kam.browser.service.FieldService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/kam-api/fields")
@CrossOrigin(origins = "http://localhost:4200")
public class FieldController {

  private final FieldService fieldService;

  public FieldController(FieldService fieldService) {
    this.fieldService = fieldService;
  }

  @GetMapping("/map/{id}")
  public ResponseEntity<?> getUserMapFields(@PathVariable Long id, @RequestParam String map){
    List<Field> fields = fieldService.getFieldsFromMapByUserId(map, id);
    return Objects.isNull(fields) ? ResponseEntity.badRequest().build() : ResponseEntity.ok(fields);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getUserFields(@PathVariable Long id, @RequestParam String map, @RequestParam Integer fieldNumber){
    Field field = fieldService.getFieldByMapAndFieldNumberAndUserId(map, fieldNumber, id);
    return Objects.isNull(field) ? ResponseEntity.badRequest().build() : ResponseEntity.ok(field);
  }

  @PostMapping("/{id}")
  public ResponseEntity<?> initializeUserFields(@PathVariable Long id){
    List<Field> fields = fieldService.initializeFieldsForUserId(id);
    return Objects.isNull(fields) ? ResponseEntity.badRequest().build() : ResponseEntity.status(HttpStatus.CREATED).body(fields);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateUserFields(@PathVariable Long id, @Valid @RequestBody Field field){
    Field updatedField = fieldService.updateFieldByUserId(field, id);
    return Objects.isNull(updatedField) ? ResponseEntity.badRequest().build() : ResponseEntity.ok(updatedField);
  }


}
