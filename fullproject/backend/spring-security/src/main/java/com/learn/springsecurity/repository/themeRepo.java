package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.themeEntity;
@Repository
public interface themeRepo extends JpaRepository<themeEntity, Integer>{

}
