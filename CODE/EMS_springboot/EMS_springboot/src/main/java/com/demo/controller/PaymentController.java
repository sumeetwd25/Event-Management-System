package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Bookings;
import com.demo.beans.NewData;
import com.demo.beans.Payment;
import com.demo.service.BookingService;
import com.demo.service.PaymentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	PaymentService paymentService;

	@Autowired
	BookingService bookingService;

	@GetMapping("/{event_id}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable int event_id) {
//		System.out.println(event_id);
		Bookings b = bookingService.getById(event_id);
		System.out.println(b);
		
		if (b != null) {
		
			int p_id = b.getPayment().getPayment_id();

			System.out.println(p_id);
			Payment p =paymentService.getById(p_id);

			return ResponseEntity.ok(p);

		} else {
			
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}
	
	@PutMapping("/status/{event_id}")
	public ResponseEntity<String> updateBooking(@PathVariable int event_id, @RequestBody String s) {
	    System.out.println(s);
	    // Make sure you set the event_id from the path into the entity if needed
	    Bookings b = bookingService.getById(event_id);
	    System.out.println(b);
	    
		int p_id = b.getPayment().getPayment_id();
		System.out.println(p_id);
		
		Payment p =paymentService.getById(p_id);
		System.out.println(p);
		
	    paymentService.setStatus(p,s);
	    return ResponseEntity.ok("Modified successfully");
	}

}
