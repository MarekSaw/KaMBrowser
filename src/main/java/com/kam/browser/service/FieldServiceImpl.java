package com.kam.browser.service;

import com.kam.browser.model.Field;
import com.kam.browser.model.User;
import com.kam.browser.repository.FieldRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
public class FieldServiceImpl implements FieldService {

  private final FieldRepository fieldRepository;
  private final UserService userService;

  public FieldServiceImpl(FieldRepository fieldRepository, UserService userService) {
    this.fieldRepository = fieldRepository;
    this.userService = userService;
  }

  @Override
  public List<Field> getFieldsFromMapByUserId(String map, Long id) {
    if (Objects.nonNull(userService.getUserById(id))) {
      return fieldRepository.findFieldByUser_IdAndMap(id, map);
    }
    return null;
  }

  @Override
  public List<Field> initializeFieldsForUserId(Long id) {
    if (Objects.nonNull(userService.getUserById(id))) {
      User user = userService.getUserById(id);
      Field[] fields = getFields();
      Arrays.stream(fields).forEach(field -> {
        user.addField(field);
        field.setUser(user);
        fieldRepository.save(field);
      });
      return Arrays.asList(fields);
    }
    return null;
  }

  @Override
  public Field updateFieldByUserId(Field field, Long id) {
    if (Objects.nonNull(userService.getUserById(id))) {
      Field fieldToUpdate = fieldRepository.findFieldByMapAndFieldNumberAndUser_Id(field.getMap(), field.getFieldNumber(), id);
      field.setId(fieldToUpdate.getId());
      field.setUser(userService.getUserById(id));
      return fieldRepository.save(field);
    }
    return null;
  }

  @Override
  public Field getFieldByMapAndFieldNumberAndUserId(String map, Integer fieldNumber, Long id) {
    if (Objects.nonNull(userService.getUserById(id))) {
      return fieldRepository.findFieldByMapAndFieldNumberAndUser_Id(map, fieldNumber, id);
    }
    return null;
  }

  private Field[] getFields() {
    return new Field[]{
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(14).rows(4).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(9).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(20).rows(4).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(1).buildingId(0).buildingLevel(0).cols(3).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(3).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(2).buildingId(0).buildingLevel(0).cols(3).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(3).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(4).buildingId(0).buildingLevel(0).cols(4).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(5).buildingId(0).buildingLevel(0).cols(4).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(6).buildingId(0).buildingLevel(0).cols(4).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(7).buildingId(0).buildingLevel(0).cols(4).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(2).rows(3).className("grid-background").build(),
      Field.builder().map("city").fieldNumber(0).buildingId(0).buildingLevel(0).cols(9).rows(1).className("grid-background").build(),
    };
  }
}


