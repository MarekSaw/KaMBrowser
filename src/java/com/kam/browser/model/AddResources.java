package com.kam.browser.model;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

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

  private LocalDateTime date;

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


  public static AddResources initializeAddResources() {
    return AddResources.builder()
      .axe(0)
      .bow(0)
      .bread(0)
      .builder(0)
      .coal(0)
      .crossbow(0)
      .fish(0)
      .flour(0)
      .gold(0)
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
      .plank(0)
      .sausage(0)
      .skin(0)
      .stone(20)
      .sword(0)
      .wheat(0)
      .wine(0)
      .wood(0)
      .woodenShield(0)
      .worker(0)
      .build();
  }

}
