package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Bookings;
import com.demo.service.CateringService;

//@RestController
//@RequestMapping("/bookings")

public class CateringController {
//	@Autowired
//	CateringService cateringService;

//	@PostMapping("/")
//	public ResponseEntity<String> addNewCatering(@RequestBody Bookings b) {
//		System.out.println(b);
//		cateringService.addNewCatering(b);
//		return ResponseEntity.ok("added successfully");
//	}
}
