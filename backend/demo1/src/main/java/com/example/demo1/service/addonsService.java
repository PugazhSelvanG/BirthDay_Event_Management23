package com.example.demo1.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo1.entity.addonsEntity;
import com.example.demo1.repo.addonsRepo;
@Service
public class addonsService {	
	@Autowired(required=true)
	addonsRepo r;
	
	public String add(addonsEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<addonsEntity> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	public addonsEntity getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public addonsEntity updateDetails(addonsEntity newUser ,int id) 
	{
		addonsEntity up=r.findById(id).get();		
		 up.setAddon_name(newUser.getAddon_name());
		 up.setImage_url(newUser.getImage_url());
		 up.setCost(newUser.getCost());
		 up.setDescription(newUser.getDescription());
         return r.saveAndFlush(up);
	}

    }
