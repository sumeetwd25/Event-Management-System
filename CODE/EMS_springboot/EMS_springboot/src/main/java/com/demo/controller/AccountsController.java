package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Accounts;
import com.demo.beans.Bookings;
import com.demo.service.AccountService;

@CrossOrigin("*")
@RestController
@RequestMapping("/accounts")
public class AccountsController {

	@Autowired
	AccountService accountService;
	
	@GetMapping("/")
	public List<Accounts> displayAll() {

		List<Accounts> alist = accountService.getAll();

		return alist;
	}
	
	@GetMapping("/{email_id}")
	public ResponseEntity<Accounts> getAccountByEmailId(@PathVariable String email_id) {
		System.out.println(email_id);
		Accounts a = accountService.getByEmailId(email_id);
		if (a != null)
			return ResponseEntity.ok(a);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();	}
	

	@PostMapping("/insert")
	public ResponseEntity<String> addNewAccount(@RequestBody Accounts a) {
		System.out.println(a);
		accountService.addNewAccount(a);
		return ResponseEntity.ok("added successfully");
	}

}
