package com.kam.browser.model;

import lombok.*;


import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Field {

  @Id
  @GeneratedValue
  private Long id;
  @ManyToOne(fetch = FetchType.LAZY)
  @Getter(value=AccessLevel.NONE)
  private User user;
  private String map;
  private Integer fieldNumber;
  private Integer cols;
  private Integer rows;
  private String className;
  private Integer buildingId;
  private Integer buildingLevel;
}
