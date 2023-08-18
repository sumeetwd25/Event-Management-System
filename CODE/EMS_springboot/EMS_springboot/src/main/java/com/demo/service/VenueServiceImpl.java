package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Bookings;
import com.demo.beans.Venue;
import com.demo.dao.VenueDao;

@Service
public class VenueServiceImpl implements VenueService {

	@Autowired
	VenueDao vdao;

	@Override
	public void addNewVenue(Bookings b) {
		Venue v = b.getVenue();
		vdao.save(v);
	}

}
