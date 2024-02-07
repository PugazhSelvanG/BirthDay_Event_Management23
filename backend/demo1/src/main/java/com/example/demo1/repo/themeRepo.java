package com.example.demo1.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo1.entity.themeEntity;
@Repository
public interface themeRepo extends JpaRepository<themeEntity, Integer>{

}
