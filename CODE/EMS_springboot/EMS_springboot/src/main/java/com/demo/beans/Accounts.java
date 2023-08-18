package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="accounts")
public class Accounts {
	@Id
	private String email_id;
	private String name;
	private String password;
	
	private String address;
	private String mob_no;
	private String role;
	

	
	public Accounts() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Accounts(String email_id, String name, String password, String address, String mob_no, String role) {
		super();
		this.email_id = email_id;
		this.name = name;
		this.password = password;
		this.address = address;
		this.mob_no = mob_no;
		this.role = role;
		
	}


	public String getEmail_id() {
		return email_id;
	}


	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getMob_no() {
		return mob_no;
	}


	public void setMob_no(String mob_no) {
		this.mob_no = mob_no;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "Accounts [email_id=" + email_id + ", name=" + name + ", password=" + password + ", address=" + address
				+ ", mob_no=" + mob_no + ", role=" + role + "]";
	}
	
	
	

}
