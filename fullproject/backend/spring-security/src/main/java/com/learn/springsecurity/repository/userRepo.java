package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface userRepo extends JpaRepository<com.learn.springsecurity.model.userEntity, Integer>{

}
