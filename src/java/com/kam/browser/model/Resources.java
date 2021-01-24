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


  public Resources addResources(Resources res) {
    axe += res.axe;
    bow += res.bow;
    bread += res.bread;
    builder += res.builder;
    coal += res.coal;
    crossbow += res.crossbow;
    fish += res.fish;
    flour += res.flour;
    gold += res.gold;
    goldOre += res.goldOre;
    horse += res.horse;
    iron += res.iron;
    ironArmor += res.ironArmor;
    ironOre += res.ironOre;
    ironShield += res.ironShield;
    lance += res.lance;
    leather += res.leather;
    leatherArmor += res.leatherArmor;
    pig += res.pig;
    pike += res.pike;
    plank += res.plank;
    sausage += res.sausage;
    skin += res.skin;
    stone += res.stone;
    sword += res.sword;
    wheat += res.wheat;
    wine += res.wine;
    wood += res.wood;
    woodenShield += res.woodenShield;
    worker += res.worker;
    return this;
  }

  public static Resources initializeResources() {
    return Resources.builder()
      .axe(0)
      .bow(0)
      .bread(0)
      .builder(2)
      .coal(0)
      .crossbow(0)
      .fish(0)
      .flour(0)
      .gold(20)
      .goldOre(0)
      .horse(0)
      .iron(0)
      .ironArmor(0)
      .ironOre(0)
      .ironShield(0)
      .lance(0)
      .leather(0)
      .leatherArmor(0)
      .pig(0)
      .pike(0)
      .plank(25)
      .sausage(0)
      .skin(0)
      .stone(20)
      .sword(0)
      .wheat(0)
      .wine(30)
      .wood(0)
      .woodenShield(0)
      .worker(10)
      .build();
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
