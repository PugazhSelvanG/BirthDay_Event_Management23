
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
import com.example.demo1.service.themeService;
import com.example.demo1.entity.themeEntity;

@RestController
class themeController {
    @Autowired
    themeService service;
    @PostMapping("/add/theme")
public String addDetails(@RequestBody themeEntity m) {
    service.add(m);
    return "theme Added" ;
}

@GetMapping("/get/theme")
public List<themeEntity> showDetails() {
    return service.getDetails();

}
@GetMapping("/get/theme/{id}")
public themeEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);

}
@PutMapping("/update/theme/{id}")
public themeEntity Details(@RequestBody themeEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}

@DeleteMapping("/delete/theme/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your theme id "+id+ " is deleted";
}

}

