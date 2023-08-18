package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Bookings;
import com.demo.beans.Media;
import com.demo.dao.MediaDao;
import com.demo.dao.VenueDao;

@Service
public class MediaServiceImpl implements MediaService {

	@Autowired
	MediaDao mdao;

	@Override
	public void addNewMedia(Bookings b) {
		Media m = b.getMedia();
		mdao.save(m);

	}

}
