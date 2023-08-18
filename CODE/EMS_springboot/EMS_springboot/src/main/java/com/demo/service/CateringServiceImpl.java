package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Bookings;
import com.demo.beans.Catering;
import com.demo.dao.CateringDao;

@Service
public class CateringServiceImpl implements CateringService {

	@Autowired
	CateringDao cdao;

	@Override
	public void addNewCatering(Bookings b) {
		Catering c = b.getCatering();
		cdao.save(c);
	}

}
