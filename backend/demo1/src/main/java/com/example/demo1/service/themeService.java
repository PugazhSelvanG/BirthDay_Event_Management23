package com.example.demo1.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo1.entity.themeEntity;
import com.example.demo1.repo.themeRepo;
@Service
public class themeService {	
	@Autowired(required=true)
	themeRepo r;
	
	public String add(themeEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<themeEntity> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public themeEntity getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public themeEntity updateDetails(themeEntity newUser ,int id) 
	{
		themeEntity up=r.findById(id).get();		
		 up.setTheme_name(newUser.getTheme_name());
		 up.setImage_url(newUser.getImage_url());
		 up.setCost(newUser.getCost());
		 up.setDescription(newUser.getDescription());
         return r.saveAndFlush(up);
	}

    }
