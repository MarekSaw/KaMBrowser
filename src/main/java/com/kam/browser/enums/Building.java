package com.kam.browser.enums;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@JsonFormat(shape=JsonFormat.Shape.OBJECT)
public enum Building {

  STOREHOUSE(1, "city",3,1.5,	1.2,	1.4, 1.2, new String[]{"none"}, new String[]{"none"}),
  SCHOOL(2, "city", 4,1.4,	1.25,	1.35, 1.25, new String[]{"none"}, new String[]{"none"}),
  INN(3, "city", 2,1.1,	1.3,	1.32, 1.15, new String[]{"none"}, new String[]{"none"}),
  QUARRY(4, "resources", 1,2.0,	1.2,	1.9, 0.88, new String[]{"none"}, new String[]{"stone"}),
  WOODCUTTER(5, "resources", 2,2.0,	2.0,	1.1, 0.92, new String[]{"none"}, new String[]{"wood"}),
  SAWMILL(6, "resources", 3,1.75,	2.1,	1.5, 0.97, new String[]{"wood"}, new String[]{"plank"}),
  FARM(7, "farms", 1,2.0,	1.92,	0.9, 0.8, new String[]{"none"}, new String[]{"wheat"}),
  MILL(8, "city", 7,1.3,	1.5,	1.5, 0.92, new String[]{"wheat"}, new String[]{"flour"}),
  BAKERY(9, "city", 6,1.2,	1.4,	1.6, 1.0, new String[]{"flour"}, new String[]{"bread"}),
  SWINE_FARM(10, "farms", 2,1.8,	1.8,	1.7, 1.07, new String[]{"wheat"}, new String[]{"pig","skin"}),
  BUTCHER(11, "city", 1,1.1,	1.7,	1.6, 1.1, new String[]{"pig"}, new String[]{"sausage"}),
  VINEYARD(12, "farms", 3,2.0,	1.4,	1.5, 0.9, new String[]{"none"}, new String[]{"wine"}),
  GOLD_MINE(13, "mines", 1,2.0,	1.7,	1.1, 0.9, new String[]{"none"}, new String[]{"gold-ore"}),
  COAL_MINE(14, "mines", 2,2.0,	1.6,	1.2, 0.8, new String[]{"none"}, new String[]{"coal"}),
  GOLD_SMITH(15, "city", 5,1.1,	1.4,	1.3, 1.04, new String[]{"gold-ore","coal"}, new String[]{"gold"}),
  WEAPON_WORKSHOP(16, "underCity", 4,0.5,	2.2,	1.5, 1.25, new String[]{"plank"}, new String[]{"axe","lance","bow"}),
  TANNERY(17, "underCity", 2,0.8,	1.8,	1.7, 1.02, new String[]{"skin"}, new String[]{"leather"}),
  ARMORY_WORKSHOP(18, "underCity", 3,0.5,	2.3,	1.4, 1.25, new String[]{"plank","leather"}, new String[]{"leather-armor","wooden-shield"}),
  STABLE(19, "underCity", 1,1.3,	2.0,	2.0, 1.1, new String[]{"wheat"}, new String[]{"horse"}),
  IRON_MINE(20, "mines", 3,2.0,	2.4,	2.2, 0.9, new String[]{"none"}, new String[]{"iron-ore"}),
  IRON_SMITH(21, "mines", 4,0.8,	2.5,	2.6, 1.06, new String[]{"iron-ore","coal"}, new String[]{"iron"}),
  WEAPON_SMITH(22, "gate", 3,0.7,	2.9,	3.2, 1.4, new String[]{"iron", "coal"}, new String[]{"sword","pike","crossbow"}),
  ARMOR_SMITH( 23, "gate", 5,0.7,	2.7,	3.4, 1.45, new String[]{"iron","coal"}, new String[]{"iron-armor","iron-shield"}),
  BARRACKS(24, "gate", 1,0.8,	2.5,	6.0, 2.2, new String[]{"none"}, new String[]{"none"}),
  UPPER_WATCHTOWER(25, "gate", 2,0.2,	2.2,	3.0, 2.0, new String[]{"stone"}, new String[]{"none"}),
  FISHERMAN(26, "farms", 4,2.0,	1.3,	1.1, 0.82, new String[]{"none"}, new String[]{"fish"}),
  TOWNHALL(27, "city", 9,0.5,	2.0,	3.0, 1.0, new String[]{"none"}, new String[]{"none"}),
  MARKETPLACE(28, "city", 8,1.2,	2.3,	2.2, 1.1, new String[]{"none"}, new String[]{"none"}),
  DOWN_WATCHTOWER(29, "gate", 4,0.2,	2.2,	3.0, 2.0, new String[]{"stone"}, new String[]{"none"});

  //city: 9; resources: 3; farms: 4; mines: 4; underCity: 4; gate:5;

  private final Integer id;
  private final String mapBelonging;
  private final Integer fieldNumberBelonging;
  private final Double workersMultiplier;
  private final Double planksMultiplier;
  private final Double stoneMultiplier;
  private final Double timeMultiplier;
  private final String[] goodsNeededImg;
  private final String[] goodsProducedImg;


  Building(Integer id, String mapBelonging, Integer fieldNumberBelonging, Double workersMultiplier, Double planksMultiplier, Double stoneMultiplier, Double timeMultiplier, String[] goodsNeededImg, String[] goodsProducedImg) {
    this.id = id;
    this.mapBelonging = mapBelonging;
    this.fieldNumberBelonging = fieldNumberBelonging;
    this.workersMultiplier = workersMultiplier;
    this.planksMultiplier = planksMultiplier;
    this.stoneMultiplier = stoneMultiplier;
    this.timeMultiplier = timeMultiplier;
    this.goodsNeededImg = goodsNeededImg;
    this.goodsProducedImg = goodsProducedImg;
  }

}
