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
import com.demo.beans.NewData;
import com.demo.beans.Payment;
import com.demo.beans.Venue;
import com.demo.dao.BookingDao;
import com.demo.dao.CateringDao;
import com.demo.dao.DecorationDao;
import com.demo.dao.MediaDao;
import com.demo.dao.PaymentDao;
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
	
	@Autowired
	PaymentDao pdao;

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
		
		Payment p = b.getPayment();
		pdao.save(p);

		bdao.saveBooking(b.getEvent_id(), b.getEvent_name(), b.getStart_time(), b.getEnd_time(), b.getDate(),
				b.getExp_attendee(), b.getVenue().getVenue_id(), b.getCatering().getCatering_id(),
				b.getDecoration().getDecoration_id(), b.getMedia().getMedia_id(), b.getPayment().getPayment_id(), b.getEmail_id());

	}

	@Override
	@Transactional
	public void deleteBooking(int event_id) {
	    Optional<Bookings> optionalBooking = bdao.findById(event_id);
	    if (optionalBooking.isPresent()) {
	        Bookings booking = optionalBooking.get();
	        
	        bdao.delete(booking);				//Always keep foreign key table related methods first followed by primary key. Due to FK constraint, error occurred.
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
	public List<Bookings> getByDate(String date, String start_time, String end_time) {
		
		List<Bookings> blist = bdao.findByDate(date, start_time, end_time);
		if (blist!=null) {
			return blist;
		} else
			return null;	
	}

	@Transactional
	@Override
	public void updateBooking(Bookings b, NewData n) {
		Optional<Bookings> op = bdao.findById(b.getEvent_id());
		if(op.isPresent()) {
			Bookings b1 = op.get();
			b1.setEvent_name(n.getEvent_name());
			b1.setStart_time(n.getStart_time());
			b1.setEnd_time(n.getEnd_time());
			b1.setDate(n.getDate());
			b1.setExp_attendee(n.getExp_attendee());
			b1.getVenue().setName(n.getVenue());
			b1.getCatering().setMenu(n.getCatering());
			b1.getDecoration().setDecor_type(n.getDecoration());
			b1.getMedia().setMedia_type(n.getMedia());
			b1.setEmail_id(n.getEmail_id());
			System.out.println(b1);
			 bdao.save(b1);
		}
		
	}

	@Override
	public List<Bookings> getByEmail(String email_id) {
		List<Bookings> op = bdao.findByEmail(email_id);
		if (op!=null) {
			return op;
		} else
			return null;
	}

	

}
