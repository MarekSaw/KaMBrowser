package com.kam.browser.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Units {

  @Id
  @GeneratedValue
  private Long id;
  @OneToOne(fetch = FetchType.LAZY)
  @Getter(value=AccessLevel.NONE)
  private User user;
  private Integer militia;
  private Integer axeFighter;
  private Integer archer;
  private Integer lancer;
  private Integer scout;
  private Integer swordsman;
  private Integer crossbowman;
  private Integer pikeman;
  private Integer knight;


  @Override
  public String toString() {
    return "Units{" +
      "id=" + id +
      ", militia=" + militia +
      ", axeFighter=" + axeFighter +
      ", archer=" + archer +
      ", lancer=" + lancer +
      ", scout=" + scout +
      ", swordsman=" + swordsman +
      ", crossbowman=" + crossbowman +
      ", pikeman=" + pikeman +
      ", knight=" + knight +
      '}';
  }
}
