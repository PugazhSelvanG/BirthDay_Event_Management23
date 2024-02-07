package com.example.demo1.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo1.service.addonsService;
import com.example.demo1.entity.addonsEntity;
@RestController

class addonsController {
@Autowired
addonsService service;
@PostMapping("/add/addon")
public String addDetails(@RequestBody addonsEntity m) {
    service.add(m);
    return "addon Added" ;
}
@GetMapping("/get/addon")
public List<addonsEntity> showDetails() {
    return service.getDetails();
}
@GetMapping("/get/addon/{id}")
public addonsEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);
}
@PutMapping("/update/addon/{id}")
public addonsEntity Details(@RequestBody addonsEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}
@DeleteMapping("/delete/addon/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your addon id "+id+ " is deleted";
}
}

