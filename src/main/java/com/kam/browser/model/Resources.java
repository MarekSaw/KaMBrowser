package com.kam.browser.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Resources {

  @Id
  @GeneratedValue
  private Long id;
  @OneToOne(fetch = FetchType.LAZY)
  @Getter(value=AccessLevel.NONE)
  private User user;

  // Living resources
  private Integer worker;
  private Integer builder;

  // Building resources
  private Integer plank;
  private Integer stone;

  // Post-produced food
  private Integer wine;
  private Integer bread;
  private Integer fish;
  private Integer sausage;

  // Pre-produced resources
  private Integer wood;
  private Integer ironOre;
  private Integer goldOre;
  private Integer coal;
  private Integer iron;
  private Integer gold;

  private Integer wheat;
  private Integer flour;
  private Integer leather;
  private Integer pig;
  private Integer skin;

  // Weaponry
  private Integer woodenShield;
  private Integer ironShield;
  private Integer leatherArmor;
  private Integer ironArmor;
  private Integer axe;
  private Integer sword;
  private Integer lance;
  private Integer pike;
  private Integer bow;
  private Integer crossbow;
  private Integer horse;

  public Resources(Long id) {
    this.user.setId(id);
    this.worker = 5;
    this.builder = 1;
    this.plank = 20;
    this.stone = 10;
    this.wine = 20;
    this.bread = 0;
    this.fish = 0;
    this.sausage = 0;
    this.wood = 0;
    this.ironOre = 0;
    this.goldOre = 0;
    this.coal = 0;
    this.iron = 0;
    this.gold = 0;
    this.wheat = 0;
    this.flour = 0;
    this.leather = 0;
    this.pig = 0;
    this.skin = 0;
    this.woodenShield = 0;
    this.ironShield = 0;
    this.leatherArmor = 0;
    this.ironArmor = 0;
    this.axe = 0;
    this.sword = 0;
    this.lance = 0;
    this.pike = 0;
    this.bow = 0;
    this.crossbow = 0;
    this.horse = 0;
  }


  @Override
  public String toString() {
    return "Resources{" +
      "id=" + id +
      ", worker=" + worker +
      ", builder=" + builder +
      ", plank=" + plank +
      ", stone=" + stone +
      ", wine=" + wine +
      ", bread=" + bread +
      ", fish=" + fish +
      ", sausage=" + sausage +
      ", wood=" + wood +
      ", ironOre=" + ironOre +
      ", goldOre=" + goldOre +
      ", coal=" + coal +
      ", iron=" + iron +
      ", gold=" + gold +
      ", wheat=" + wheat +
      ", flour=" + flour +
      ", leather=" + leather +
      ", pig=" + pig +
      ", skin=" + skin +
      ", woodenShield=" + woodenShield +
      ", ironShield=" + ironShield +
      ", leatherArmor=" + leatherArmor +
      ", ironArmor=" + ironArmor +
      ", axe=" + axe +
      ", sword=" + sword +
      ", lance=" + lance +
      ", pike=" + pike +
      ", bow=" + bow +
      ", crossbow=" + crossbow +
      ", horse=" + horse +
      '}';
  }
}
