package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.addonsEntity;

@Repository
public interface addonsRepo extends JpaRepository<addonsEntity, Integer>{

}