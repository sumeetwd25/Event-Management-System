package com.demo.service;

import java.util.List;

import com.demo.beans.Bookings;

public interface BookingService {

	void addNewBooking(Bookings b);

	

	void deleteBooking(int event_id);



	List<Bookings> getAll();



	Bookings getById(int event_id);



	void updateBooking(Bookings b);

}
