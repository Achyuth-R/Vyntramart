package com.vyntramart.controller;

import java.util.List;
import java.util.Optional.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vyntramart.model.User;
import com.vyntramart.repository.UserRepository;
import com.vyntramart.exception.*;

@RestController
@RequestMapping("/api/users")
public class UserController{
	@Autowired
	private UserRepository repo;
	
	@GetMapping
	public List<User> getAllUsers(){
		return this.repo.findAll();
	}
	@GetMapping("/{username}")
	public String getPwdByName(@PathVariable(value = "username") String username){
		User user = this.repo.findByUsername(username);
		if(user != null)
		{
			String tem =  user.getPassword();
			String json = "{ \"password\" : \"" + tem + "\"}"; 
			return json;
		}else {
			return "";
		}
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		System.out.println(user.toString());
		return this.repo.save(user);
	}
	
	@PutMapping("/{username}")
	public User updateUser(@RequestBody User user, @PathVariable("username") String username) {
		if(repo.countByUsername(username)==1) {
			User existingUser = this.repo.findByUsername(username);
//			existingUser.setUserid(user.getUserid());
			existingUser.setUsername(user.getUsername());
			existingUser.setAddress(user.getAddress());
			existingUser.setEmail(user.getEmail());
			existingUser.setFirstname(user.getFirstname());
			existingUser.setLastname(user.getLastname());
			existingUser.setPassword(user.getPassword());
			return this.repo.save(existingUser);
//			return existingUser;
		}else {
			throw new ResourceNotFoundException("User not found with name : " + username);
		}
		            
	}
	
	@DeleteMapping("/{username}")
	public ResponseEntity<User> deleteUser(@PathVariable("username") String username){
//	public User deleteUser(@PathVariable("username") String username){
//		User existigUser = this.repo.findByUsername(username).orElseThrow(()-> new ResourceNotFoundEception("User not found with id :"+ username));
		if(repo.countByUsername(username)==1) {
			User existingUser = this.repo.findByUsername(username);
			this.repo.delete(existingUser);
			return ResponseEntity.ok().build();
//			return existingUser;
		}else {
			throw new ResourceNotFoundException("User not found with name : " + username);
		}
	}
}