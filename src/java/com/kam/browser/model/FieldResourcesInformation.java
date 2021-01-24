package com.kam.browser.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FieldResourcesInformation {
  private Long workersNeeded;
  private Long planksNeeded;
  private Long stonesNeeded;
  private Long timeSecondsToUpgrade;
  private Long timeSecondsToEndUpgrade;
}
