package com.kam.browser.service;

import com.kam.browser.model.Field;

import java.time.LocalDateTime;
import java.util.List;

public interface FieldService {

  List<Field> getFieldsFromMapByUserId(String map, Long id);

  List<Field> initializeFieldsForUserId(Long id);

  Field updateFieldByUserId(Field field, Long id);

  Field getFieldByMapAndFieldNumberAndUserId(String map, Integer fieldNumber, Long id);

}
