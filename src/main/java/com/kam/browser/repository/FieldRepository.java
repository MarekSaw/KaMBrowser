package com.kam.browser.repository;

import com.kam.browser.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FieldRepository extends JpaRepository<Field, Long> {

  List<Field> findFieldByUser_IdAndMap(Long userId, String map);

  Field findFieldByMapAndFieldNumberAndUser_Id(String map, Integer fieldNumber, Long userId);

}
