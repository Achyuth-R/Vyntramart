package com.vyntramart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
public class User{

	public User(long id, String username, String firstname, String lastname, String password,
			String email, String address) {
		super();
		this.id = id;
//		this.userid = userid;
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.email = email;
		this.Address = address;
	}
	public User() {
		
	}

	@Id
	@GeneratedValue
	private long id;
	
//	@Column(name = "UserId", nullable = false, unique = true)
//	private String userid;
//		
	@Column(name = "Username", nullable = false)
	private String username;
	
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", password=" + password + ", email=" + email + ", Address=" + Address + "]";
	}

	@Column(name = "firstName")
	private String firstname;
	
	@Column(name = "lastName")
	private String lastname;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "Address")
	private String Address;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

//	public String getUserid() {
//		return userid;
//	}
//
//	public void setUserid(String userid) {
//		this.userid = userid;
//	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

}
