package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Accounts;
import com.demo.service.AccountService;

@RestController
public class AccountsController {

	@Autowired
	AccountService accountService;

	@PostMapping("accounts")
	public ResponseEntity<String> addNewAccount(@RequestBody Accounts a) {
		System.out.println(a);
		accountService.addNewAccount(a);
		return ResponseEntity.ok("added successfully");
	}

}
