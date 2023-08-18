package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Bookings;
import com.demo.service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingsController {
	@Autowired
	BookingService bookingService;

	@GetMapping("/")
	public List<Bookings> displayAll() {

		List<Bookings> blist = bookingService.getAll();

		return blist;
	}

	@GetMapping("/{event_id}")
	public ResponseEntity<Bookings> getById(@PathVariable int event_id) {
//		System.out.println(event_id);
		Bookings b = bookingService.getById(event_id);
		if (b != null)
			return ResponseEntity.ok(b);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PostMapping("/insert")
	public ResponseEntity<String> addNewBooking(@RequestBody Bookings b) {
		System.out.println(b);
		bookingService.addNewBooking(b);
		return ResponseEntity.ok("added successfully");
	}

	@DeleteMapping("/delete/{event_id}")
	public ResponseEntity<String> deleteBooking(@PathVariable int event_id) {
		System.out.println(event_id);
		bookingService.deleteBooking(event_id);
		return ResponseEntity.ok("deleted successfully");
	}
	
	@PutMapping("/update/{event_id}")
	public ResponseEntity<String> updateBooking(@PathVariable int event_id, @RequestBody Bookings b) {
	    System.out.println(b);
	    // Make sure you set the event_id from the path into the entity if needed
	    b.setEvent_id(event_id);
	    bookingService.updateBooking(b);
	    return ResponseEntity.ok("Modified successfully");
	}


}
