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
import com.example.demo1.service.userService;
import com.example.demo1.entity.userEntity;
@RestController
class userController {
    @Autowired
    userService service;
    @PostMapping("/add/event")
public String addDetails(@RequestBody userEntity m) {
    service.add(m);
    return "event Added" ;
}
@GetMapping("/get/event")
public List<userEntity> showDetails() {
    return service.getDetails();
}
@GetMapping("/get/event/{id}")
public userEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);
}
@PutMapping("/update/event/{id}")
public userEntity Details(@RequestBody userEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}
@DeleteMapping("/delete/event/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your event id "+id+ " is deleted";
}
}
