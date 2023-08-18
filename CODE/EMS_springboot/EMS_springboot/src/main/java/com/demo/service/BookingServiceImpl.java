package com.demo.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.beans.Bookings;
import com.demo.beans.Catering;
import com.demo.beans.Decoration;
import com.demo.beans.Media;
import com.demo.beans.Venue;
import com.demo.dao.BookingDao;
import com.demo.dao.CateringDao;
import com.demo.dao.DecorationDao;
import com.demo.dao.MediaDao;
import com.demo.dao.VenueDao;

@Service
public class BookingServiceImpl implements BookingService {
	@Autowired
	BookingDao bdao;

	@Autowired
	VenueDao vdao;

	@Autowired
	MediaDao mdao;

	@Autowired
	CateringDao cdao;

	@Autowired
	DecorationDao ddao;

	@Override
	@Transactional
	public void addNewBooking(Bookings b) {

		Catering c = b.getCatering();
		cdao.save(c);

		Decoration d = b.getDecoration();
		ddao.save(d);

		Media m = b.getMedia();
		mdao.save(m);

		Venue v = b.getVenue();
		vdao.save(v);

		bdao.saveBooking(b.getEvent_id(), b.getEvent_name(), b.getStart_time(), b.getEnd_time(), b.getDate(),
				b.getExp_attendee(), b.getVenue().getvenue_id(), b.getCatering().getCatering_id(),
				b.getDecoration().getDecoration_id(), b.getMedia().getMedia_id());

	}

	@Override
	@Transactional
	public void deleteBooking(int event_id) {
	    Optional<Bookings> optionalBooking = bdao.findById(event_id);
	    if (optionalBooking.isPresent()) {
	        Bookings booking = optionalBooking.get();
	        bdao.delete(booking);
	        vdao.delete(booking.getVenue());
	        cdao.delete(booking.getCatering());
	        ddao.delete(booking.getDecoration());
	        mdao.delete(booking.getMedia());
	    } else {
	        // Handle case when booking is not found
	        throw new EntityNotFoundException("Booking with event_id " + event_id + " not found.");
	    }
	}


	@Override
	public List<Bookings> getAll() {
		List<Bookings> blist = bdao.findAll();
		System.out.println(blist);
		return blist;
	}

	@Override
	public Bookings getById(int event_id) {
		Optional<Bookings> op = bdao.findById(event_id);
		if (op.isPresent()) {
			return op.get();
		} else
			return null;
	}

	@Override
	public void updateBooking(Bookings b) {
		Optional<Bookings> op = bdao.findById(b.getEvent_id());
		if(op.isPresent()) {
			Bookings b1 = op.get();
			b1.setEvent_name(b.getEvent_name());
			b1.setStart_time(b.getStart_time());
			b1.setEnd_time(b.getEnd_time());
			b1.setDate(b.getDate());
			b1.setExp_attendee(b.getExp_attendee());
			b1.setVenue(b.getVenue());
			b1.setCatering(b.getCatering());
			b1.setDecoration(b.getDecoration());
			b1.setMedia(b.getMedia());
			 bdao.save(b1);
		}
		
	}

}
