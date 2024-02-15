package com.learn.springsecurity.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.contactEntity;
import com.learn.springsecurity.repository.contactRepo;



@Service
public class contactService {	
	@Autowired(required=true)
	contactRepo r;
	
	public String add(contactEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<contactEntity> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	public contactEntity getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public contactEntity updateDetails(contactEntity newUser ,int id) 
	{
		contactEntity up=r.findById(id).get();		
		 up.setName(newUser.getName());
		 up.setEmail(newUser.getEmail());
		 up.setMessage(newUser.getMessage());
         return r.saveAndFlush(up);
	}

    }
