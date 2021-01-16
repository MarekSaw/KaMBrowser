package com.kam.browser.enums;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@JsonFormat(shape=JsonFormat.Shape.OBJECT)
public enum Building {

  STOREHOUSE(1, "city",3,3, 6, 5, 5L, new String[]{"none"}, new String[]{"none"}),
  SCHOOL(2, "city", 4,3,6, 5, 5L, new String[]{"none"}, new String[]{"none"}),
  INN(3, "city", 2,4,6, 5, 5L, new String[]{"none"}, new String[]{"none"}),
  QUARRY(4, "resources", 1,3,3, 2, 5L, new String[]{"none"}, new String[]{"stone"}),
  WOODCUTTER(5, "resources", 2,2,3, 2, 5L, new String[]{"none"}, new String[]{"wood"}),
  SAWMILL(6, "resources", 3,4,4, 3, 5L, new String[]{"wood"}, new String[]{"plank"}),
  FARM(7, "farms", 1,4,4, 3, 5L, new String[]{"none"}, new String[]{"wheat"}),
  MILL(8, "city", 7,3,4, 3, 5L, new String[]{"wheat"}, new String[]{"flour"}),
  BAKERY(9, "city", 6,3,4, 3, 5L, new String[]{"flour"}, new String[]{"bread"}),
  SWINE_FARM(10, "farms", 2,4,4, 3, 5L, new String[]{"wheat"}, new String[]{"pig","skin"}),
  BUTCHER(11, "city", 1,3,4, 3, 5L, new String[]{"pig"}, new String[]{"sausage"}),
  VINEYARD(12, "farms", 3,3,4, 3, 5L, new String[]{"none"}, new String[]{"wine"}),
  GOLD_MINE(13, "mines", 1,2,3, 2 , 5L, new String[]{"none"}, new String[]{"gold-ore"}),
  COAL_MINE(14, "mines", 2,2,3, 2, 5L, new String[]{"none"}, new String[]{"coal"}),
  GOLD_SMITH(15, "city", 5,3,4, 3, 5L, new String[]{"gold-ore","coal"}, new String[]{"gold"}),
  WEAPON_WORKSHOP(16, "underCity", 4,4,4, 3, 5L, new String[]{"plank"}, new String[]{"axe","lance","bow"}),
  TANNERY(17, "underCity", 2,3,4, 3, 5L, new String[]{"skin"}, new String[]{"leather"}),
  ARMORY_WORKSHOP(18, "underCity", 3,3,4, 3, 5L, new String[]{"plank","leather"}, new String[]{"leather-armor","wooden-shield"}),
  STABLE(19, "underCity", 1,4,6, 5, 5L, new String[]{"wheat"}, new String[]{"horse"}),
  IRON_MINE(20, "mines", 3,2,3, 2, 5L, new String[]{"none"}, new String[]{"iron-ore"}),
  IRON_SMITH(21, "mines", 4,3,4, 3, 5L, new String[]{"iron-ore","coal"}, new String[]{"iron"}),
  WEAPON_SMITH(22, "gate", 3,4,4, 3, 5L, new String[]{"iron", "coal"}, new String[]{"sword","pike","crossbow"}),
  ARMOR_SMITH( 23, "gate", 5,4,4, 3, 5L, new String[]{"iron","coal"}, new String[]{"iron-armor","iron-shield"}),
  BARRACKS(24, "gate", 1,4,6, 6, 5L, new String[]{"none"}, new String[]{"none"}),
  UPPER_WATCHTOWER(25, "gate", 2,2,3, 2, 5L, new String[]{"stone"}, new String[]{"none"}),
  FISHERMAN(26, "farms", 4,2,4, 3, 5L, new String[]{"none"}, new String[]{"fish"}),
  TOWNHALL(27, "city", 9,5,6, 5, 5L, new String[]{"none"}, new String[]{"none"}),
  MARKETPLACE(28, "city", 8,5,6, 6, 5L, new String[]{"none"}, new String[]{"none"}),
  DOWN_WATCHTOWER(29, "gate", 4,2,3, 2, 5L, new String[]{"stone"}, new String[]{"none"});

  //city: 9; resources: 3; farms: 4; mines: 4; underCity: 4; gate:5;

  private final Integer id;
  private final String mapBelonging;
  private final Integer fieldNumberBelonging;
  private final Integer workersNeed;
  private final Integer planksNeed;
  private final Integer stoneNeed;
  private final Long timeNeed;
  private final String[] goodsNeededImg;
  private final String[] goodsProducedImg;


  Building(Integer id, String mapBelonging, Integer fieldNumberBelonging, Integer workersNeed, Integer planksNeed, Integer stoneNeed, Long timeNeed, String[] goodsNeededImg, String[] goodsProducedImg) {
    this.id = id;
    this.mapBelonging = mapBelonging;
    this.fieldNumberBelonging = fieldNumberBelonging;
    this.workersNeed = workersNeed;
    this.planksNeed = planksNeed;
    this.stoneNeed = stoneNeed;
    this.timeNeed = timeNeed;
    this.goodsNeededImg = goodsNeededImg;
    this.goodsProducedImg = goodsProducedImg;
  }

}
