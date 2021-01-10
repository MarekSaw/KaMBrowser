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
  private Integer worker;
  private Integer builder;
  private Integer planks;
  private Integer stone;
  private Integer food;

  @Override
  public String toString() {
    return "Resources{" +
      "id=" + id +
      ", worker=" + worker +
      ", builder=" + builder +
      ", planks=" + planks +
      ", stone=" + stone +
      ", food=" + food +
      '}';
  }
}
