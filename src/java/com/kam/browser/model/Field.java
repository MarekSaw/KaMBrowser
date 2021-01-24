package com.kam.browser.model;

import lombok.*;


import javax.persistence.*;
import java.time.LocalDateTime;

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
  @Getter(value = AccessLevel.NONE)
  private User user;

  private String map;
  private Integer fieldNumber;
  private String className;
  private Integer buildingId;
  private Integer buildingLevel;
  private LocalDateTime endOfBuildingTime;
}
