package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Bookings;
import com.demo.beans.Decoration;
import com.demo.dao.DecorationDao;

@Service
public class DecorationServiceImpl implements DecorationService {

	@Autowired
	DecorationDao ddao;

	@Override
	public void addNewDecoration(Bookings b) {
		Decoration d = b.getDecoration();
		ddao.save(d);		
	}

	}


