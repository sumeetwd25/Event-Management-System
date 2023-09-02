package com.demo.service;

import java.util.Date;
import java.util.List;

import com.demo.beans.Bookings;
import com.demo.beans.NewData;

public interface BookingService {

	void addNewBooking(Bookings b);

	

	void deleteBooking (int event_id);



	List<Bookings> getAll();



	Bookings getById(int event_id);



//	void updateBooking(Bookings b);



	List<Bookings> getByDate(String date, String start_time, String end_time);



	List<Bookings> getByEmail(String email_id);



	void updateBooking(Bookings b, NewData n);

}
