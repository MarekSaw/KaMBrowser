package com.kam.browser.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddResources {

  @Id
  @GeneratedValue
  private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @Getter(value= AccessLevel.NONE)
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

}
