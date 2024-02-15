package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.contactEntity;



@Repository
public interface contactRepo extends JpaRepository<contactEntity, Integer>{

}
