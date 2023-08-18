package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Bookings;
import com.demo.service.VenueService;

//@RestController
//@RequestMapping("/bookings")

public class VenueController {
//	@Autowired
//	VenueService venueService;
//
//	@PostMapping("/")
//	public ResponseEntity<String> addNewVenue(@RequestBody Bookings b) {
//		System.out.println(b);
//		venueService.addNewVenue(b);
//		return ResponseEntity.ok("added successfully");
//	}
}
