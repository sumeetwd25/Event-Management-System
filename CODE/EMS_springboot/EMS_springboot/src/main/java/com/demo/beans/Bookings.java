package com.demo.beans;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


@Entity
public class Bookings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int event_id;
	private String event_name;
	private String start_time;
	private String end_time;
	private String date;
	private int exp_attendee;
	@OneToOne
	@JoinColumn(name="venue_id")
	private Venue venue;
	@OneToOne
	@JoinColumn(name="catering_id")
	private Catering catering;
	@OneToOne
	@JoinColumn(name="decoration_id")
	private  Decoration decoration;
	@OneToOne
	@JoinColumn(name="media_id")
	private Media media;
	@OneToOne
	@JoinColumn(name="payment_id")
	private Payment payment;
	
//	@OneToOne
//	@JoinColumn(name="email_id")
	private String email_id;
	
	
	public Bookings() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Bookings(int event_id, String event_name, String start_time, String end_time, String date, int exp_attendee,
			Venue venue, Catering catering, Decoration decoration, Media media, Payment payment, String email_id) {
		super();
		this.event_id = event_id;
		this.event_name = event_name;
		this.start_time = start_time;
		this.end_time = end_time;
		this.date = date;
		this.exp_attendee = exp_attendee;
		this.venue = venue;
		this.catering = catering;
		this.decoration = decoration;
		this.media = media;
		this.email_id = email_id;
		this.payment = payment;
	}



	public String getEmail_id() {
		return email_id;
	}


	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}


	public int getEvent_id() {
		return event_id;
	}


	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}


	public String getEvent_name() {
		return event_name;
	}


	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}


	public String getStart_time() {
		return start_time;
	}


	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}


	public String getEnd_time() {
		return end_time;
	}


	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public int getExp_attendee() {
		return exp_attendee;
	}


	public void setExp_attendee(int exp_attendee) {
		this.exp_attendee = exp_attendee;
	}


	public Venue getVenue() {
		return venue;
	}


	public void setVenue(Venue venue) {
		this.venue = venue;
	}


	public Catering getCatering() {
		return catering;
	}


	public void setCatering(Catering catering) {
		this.catering = catering;
	}


	public Decoration getDecoration() {
		return decoration;
	}


	public void setDecoration(Decoration decoration) {
		this.decoration = decoration;
	}


	public Media getMedia() {
		return media;
	}


	public void setMedia(Media media) {
		this.media = media;
	}
	
	public Payment getPayment() {
		return payment;
	}


	public void setPayment(Payment payment) {
		this.payment = payment;
	}


	@Override
	public String toString() {
		return "Bookings [event_id=" + event_id + ", event_name=" + event_name + ", start_time=" + start_time
				+ ", end_time=" + end_time + ", date=" + date + ", exp_attendee=" + exp_attendee + ", venue=" + venue
				+ ", catering=" + catering + ", decoration=" + decoration + ", media=" + media + ", payment=" + payment
				+ ", email_id=" + email_id + "]";
	}
	
	
	

}
