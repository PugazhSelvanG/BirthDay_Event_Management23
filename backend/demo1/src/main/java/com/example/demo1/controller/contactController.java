
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
import com.example.demo1.service.contactService;
import com.example.demo1.entity.contactEntity;
@RestController
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

        