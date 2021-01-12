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
      Field.builder().map("city").fieldNumber(1).buildingId(11).buildingLevel(0).className("butcher").build(),
      Field.builder().map("city").fieldNumber(2).buildingId(3).buildingLevel(0).className("inn").build(),
      Field.builder().map("city").fieldNumber(3).buildingId(1).buildingLevel(1).className("build-storehouse").build(),
      Field.builder().map("city").fieldNumber(4).buildingId(2).buildingLevel(1).className("build-school").build(),
      Field.builder().map("city").fieldNumber(5).buildingId(15).buildingLevel(0).className("gold-smith").build(),
      Field.builder().map("city").fieldNumber(6).buildingId(9).buildingLevel(0).className("bakery").build(),
      Field.builder().map("city").fieldNumber(7).buildingId(8).buildingLevel(0).className("mill").build(),
      Field.builder().map("city").fieldNumber(8).buildingId(28).buildingLevel(0).className("marketplace").build(),
      Field.builder().map("city").fieldNumber(9).buildingId(27).buildingLevel(0).className("townhall").build(),

      Field.builder().map("resources").fieldNumber(1).buildingId(4).buildingLevel(0).className("quarry").build(),
      Field.builder().map("resources").fieldNumber(2).buildingId(5).buildingLevel(0).className("woodcutter").build(),
      Field.builder().map("resources").fieldNumber(3).buildingId(6).buildingLevel(0).className("sawmill").build(),

      Field.builder().map("farms").fieldNumber(1).buildingId(7).buildingLevel(0).className("farm").build(),
      Field.builder().map("farms").fieldNumber(2).buildingId(10).buildingLevel(0).className("swine-farm").build(),
      Field.builder().map("farms").fieldNumber(3).buildingId(12).buildingLevel(0).className("vineyard").build(),
      Field.builder().map("farms").fieldNumber(4).buildingId(26).buildingLevel(0).className("fisherman").build(),

      Field.builder().map("mines").fieldNumber(1).buildingId(13).buildingLevel(0).className("gold-mine").build(),
      Field.builder().map("mines").fieldNumber(2).buildingId(14).buildingLevel(0).className("coal-mine").build(),
      Field.builder().map("mines").fieldNumber(3).buildingId(20).buildingLevel(0).className("iron-mine").build(),
      Field.builder().map("mines").fieldNumber(4).buildingId(21).buildingLevel(0).className("iron-smith").build(),

      Field.builder().map("underCity").fieldNumber(1).buildingId(19).buildingLevel(0).className("stable").build(),
      Field.builder().map("underCity").fieldNumber(2).buildingId(17).buildingLevel(0).className("tannery").build(),
      Field.builder().map("underCity").fieldNumber(3).buildingId(18).buildingLevel(0).className("armory-workshop").build(),
      Field.builder().map("underCity").fieldNumber(4).buildingId(16).buildingLevel(0).className("weapon-workshop").build(),

      Field.builder().map("gate").fieldNumber(1).buildingId(24).buildingLevel(0).className("barracks").build(),
      Field.builder().map("gate").fieldNumber(2).buildingId(25).buildingLevel(0).className("upper-tower").build(),
      Field.builder().map("gate").fieldNumber(3).buildingId(22).buildingLevel(0).className("weapon-smith").build(),
      Field.builder().map("gate").fieldNumber(4).buildingId(25).buildingLevel(0).className("down-tower").build(),
      Field.builder().map("gate").fieldNumber(5).buildingId(23).buildingLevel(0).className("armor-smith").build(),
    };
  }
}


