package com.kam.browser.service;

import com.kam.browser.model.Field;
import com.kam.browser.model.User;
import com.kam.browser.repository.FieldRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
@Slf4j
public class FieldServiceImpl implements FieldService {

  private final FieldRepository fieldRepository;
  private final UserService userService;
  private final BuildingService buildingService;


  public FieldServiceImpl(FieldRepository fieldRepository, UserService userService, BuildingService buildingService) {
    this.fieldRepository = fieldRepository;
    this.userService = userService;
    this.buildingService = buildingService;
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
    log.info("up: "+field.toString());
    log.info("us: "+id);
    if (Objects.nonNull(userService.getUserById(id))) {
      Field fieldToUpdate = fieldRepository.findFieldByMapAndFieldNumberAndUser_Id(field.getMap(), field.getFieldNumber(), id);
      field.setId(fieldToUpdate.getId());
      field.setUser(userService.getUserById(id));



      //current level of building
      int buildingLevel = fieldToUpdate.getBuildingLevel();
      Double timeMultiplier = buildingService.getBuildingByMapAndFieldNumber(fieldToUpdate.getMap(), fieldToUpdate.getFieldNumber()).getTimeMultiplier();
      long buildingTimeSeconds = Math.round(getBuildingTimeSeconds(buildingLevel) * timeMultiplier);
      LocalDateTime time = LocalDateTime.now().plusSeconds(buildingTimeSeconds);
      field.setEndOfBuildingTime(time);
      log.info("TIME: "+time);

      return fieldRepository.save(field);
    }
    return null;
  }

  private long getBuildingTimeSeconds(int buildingLevel) {
    double buildingTimeSeconds;
    if (buildingLevel == 0){
      buildingTimeSeconds = 5.0;
    }else {
      buildingTimeSeconds = 7.185 * Math.pow(buildingLevel, 3) - 24.35 * Math.pow(buildingLevel, 2) + 36.18 * buildingLevel - 6;
    }
    return Math.round(buildingTimeSeconds);
  }

  @Override
  public Field getFieldByMapAndFieldNumberAndUserId(String map, Integer fieldNumber, Long id) {
    if (Objects.nonNull(userService.getUserById(id))) {
      return fieldRepository.findFieldByMapAndFieldNumberAndUser_Id(map, fieldNumber, id);
    }
    return null;
  }

  @Override
  public Long getTimeSecondsToEndUpgradeField(String map, Integer fieldNumber, Long id) {
    Field fieldFromDatabase = getFieldByMapAndFieldNumberAndUserId(map, fieldNumber, id);
    return  (fieldFromDatabase.getEndOfBuildingTime().toEpochSecond(ZoneOffset.UTC)) - LocalDateTime.now().toEpochSecond(ZoneOffset.UTC);
  }

  @Override
  public Long getTimeSecondsToUpgradeField(String map, Integer fieldNumber, Long id) {
    Field fieldFromDatabase = getFieldByMapAndFieldNumberAndUserId(map, fieldNumber, id);
    return  getBuildingTimeSeconds(fieldFromDatabase.getBuildingLevel());
  }

  private Field[] getFields() {
    LocalDateTime currentTime = LocalDateTime.now();
    return new Field[]{
      Field.builder().map("city").fieldNumber(1).buildingId(11).buildingLevel(0).className("butcher").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(2).buildingId(3).buildingLevel(0).className("inn").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(3).buildingId(1).buildingLevel(1).className("build-storehouse").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(4).buildingId(2).buildingLevel(1).className("build-school").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(5).buildingId(15).buildingLevel(0).className("gold-smith").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(6).buildingId(9).buildingLevel(0).className("bakery").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(7).buildingId(8).buildingLevel(0).className("mill").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(8).buildingId(28).buildingLevel(0).className("marketplace").endOfBuildingTime(currentTime).build(),
      Field.builder().map("city").fieldNumber(9).buildingId(27).buildingLevel(0).className("townhall").endOfBuildingTime(currentTime).build(),

      Field.builder().map("resources").fieldNumber(1).buildingId(4).buildingLevel(0).className("quarry").endOfBuildingTime(currentTime).build(),
      Field.builder().map("resources").fieldNumber(2).buildingId(5).buildingLevel(0).className("woodcutter").endOfBuildingTime(currentTime).build(),
      Field.builder().map("resources").fieldNumber(3).buildingId(6).buildingLevel(0).className("sawmill").endOfBuildingTime(currentTime).build(),

      Field.builder().map("farms").fieldNumber(1).buildingId(7).buildingLevel(0).className("farm").endOfBuildingTime(currentTime).build(),
      Field.builder().map("farms").fieldNumber(2).buildingId(10).buildingLevel(0).className("swine-farm").endOfBuildingTime(currentTime).build(),
      Field.builder().map("farms").fieldNumber(3).buildingId(12).buildingLevel(0).className("vineyard").endOfBuildingTime(currentTime).build(),
      Field.builder().map("farms").fieldNumber(4).buildingId(26).buildingLevel(0).className("fisherman").endOfBuildingTime(currentTime).build(),

      Field.builder().map("mines").fieldNumber(1).buildingId(13).buildingLevel(0).className("gold-mine").endOfBuildingTime(currentTime).build(),
      Field.builder().map("mines").fieldNumber(2).buildingId(14).buildingLevel(0).className("coal-mine").endOfBuildingTime(currentTime).build(),
      Field.builder().map("mines").fieldNumber(3).buildingId(20).buildingLevel(0).className("iron-mine").endOfBuildingTime(currentTime).build(),
      Field.builder().map("mines").fieldNumber(4).buildingId(21).buildingLevel(0).className("iron-smith").endOfBuildingTime(currentTime).build(),

      Field.builder().map("underCity").fieldNumber(1).buildingId(19).buildingLevel(0).className("stable").endOfBuildingTime(currentTime).build(),
      Field.builder().map("underCity").fieldNumber(2).buildingId(17).buildingLevel(0).className("tannery").endOfBuildingTime(currentTime).build(),
      Field.builder().map("underCity").fieldNumber(3).buildingId(18).buildingLevel(0).className("armory-workshop").endOfBuildingTime(currentTime).build(),
      Field.builder().map("underCity").fieldNumber(4).buildingId(16).buildingLevel(0).className("weapon-workshop").endOfBuildingTime(currentTime).build(),

      Field.builder().map("gate").fieldNumber(1).buildingId(24).buildingLevel(0).className("barracks").endOfBuildingTime(null).build(),
      Field.builder().map("gate").fieldNumber(2).buildingId(25).buildingLevel(0).className("upper-tower").endOfBuildingTime(null).build(),
      Field.builder().map("gate").fieldNumber(3).buildingId(22).buildingLevel(0).className("weapon-smith").endOfBuildingTime(null).build(),
      Field.builder().map("gate").fieldNumber(4).buildingId(25).buildingLevel(0).className("down-tower").endOfBuildingTime(null).build(),
      Field.builder().map("gate").fieldNumber(5).buildingId(23).buildingLevel(0).className("armor-smith").endOfBuildingTime(null).build(),
    };
  }
}


