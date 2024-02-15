package com.learn.springsecurity.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learn.springsecurity.model.contactEntity;
import com.learn.springsecurity.service.contactService;

@RestController
@CrossOrigin("http://localhost:5173/")
class contactController {
         @Autowired
    contactService service;
    @PostMapping("/add/contact")
public String addDetails(@RequestBody contactEntity m) {
    service.add(m);
    return "query Added" ;
}

@GetMapping("/get/contact")
public List<contactEntity> showDetails() {
    return service.getDetails();

}
@GetMapping("/get/contact/{id}")
public contactEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);

}
@PutMapping("/update/contact/{id}")
public contactEntity Details(@RequestBody contactEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}


@DeleteMapping("/delete/contact/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your contact id "+id+ " is deleted";
}
}

        