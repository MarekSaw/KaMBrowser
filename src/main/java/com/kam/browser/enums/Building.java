package com.kam.browser.enums;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@JsonFormat(shape=JsonFormat.Shape.OBJECT)
public enum Building {

  STOREHOUSE(1, "city",3, 6, 5, 5L),
  SCHOOL(2, "city", 4,6, 5, 5L),
  INN(3, "city", 2,6, 5, 5L),
  QUARRY(4, "resources", 1,3, 2, 5L),
  WOODCUTTER(5, "resources", 2,3, 2, 5L),
  SAWMILL(6, "resources", 3,4, 3, 5L),
  FARM(7, "farms", 1,4, 3, 5L),
  MILL(8, "city", 7,4, 3, 5L),
  BAKERY(9, "city", 6,4, 3, 5L),
  SWINE_FARM(10, "farms", 2,4, 3, 5L),
  BUTCHER(11, "city", 1,4, 3, 5L),
  VINEYARD(12, "farms", 3,4, 3, 5L),
  GOLD_MINE(13, "mines", 1,3, 2 , 5L),
  COAL_MINE(14, "mines", 2,3, 2, 5L),
  GOLD_SMITH(15, "city", 5,4, 3, 5L),
  WEAPON_WORKSHOP(16, "underCity", 4,4, 3, 5L),
  TANNERY(17, "underCity", 2,4, 3, 5L),
  ARMORY_WORKSHOP(18, "underCity", 3,4, 3, 5L),
  STABLE(19, "underCity", 1,6, 5, 5L),
  IRON_MINE(20, "mines", 3,3, 2, 5L),
  IRON_SMITH(21, "mines", 4,4, 3, 5L),
  WEAPON_SMITH(22, "gate", 3,4, 3, 5L),
  ARMOR_SMITH( 23, "gate", 5,4, 3, 5L),
  BARRACKS(24, "gate", 1,6, 6, 5L),
  WATCHTOWER(25, "gate", 2,3, 2, 5L),
  FISHERMAN(26, "farms", 4,4, 3, 5L),
  TOWNHALL(27, "city", 9,6, 5, 5L),
  MARKETPLACE(28, "city", 8,6, 6, 5L);

  //city: 9; resources: 3; farms: 4; mines: 4; underCity: 4; gate:4;

  private final Integer id;
  private final String mapBelonging;
  private final Integer fieldNumberBelonging;
  private final Integer planksNeed;
  private final Integer stoneNeed;
  private final Long timeNeed;


  Building(Integer id, String mapBelonging, Integer fieldNumberBelonging, Integer planksNeed, Integer stoneNeed, Long timeNeed) {
    this.id = id;
    this.mapBelonging = mapBelonging;
    this.fieldNumberBelonging = fieldNumberBelonging;
    this.planksNeed = planksNeed;
    this.stoneNeed = stoneNeed;
    this.timeNeed = timeNeed;
  }

}
