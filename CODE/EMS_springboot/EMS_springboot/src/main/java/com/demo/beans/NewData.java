package com.demo.beans;

public class NewData {

	private String event_name;
	private String start_time;
	private String end_time;
	private String date;
	private int exp_attendee;
	private String venue;
	private String catering;
	private String decoration;
	private String media;
	private String email_id;

	public NewData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NewData(String event_name, String start_time, String end_time, String date, int exp_attendee, String venue,
			String catering, String decoration, String media, String email_id) {
		super();
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

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public String getCatering() {
		return catering;
	}

	public void setCatering(String catering) {
		this.catering = catering;
	}

	public String getDecoration() {
		return decoration;
	}

	public void setDecoration(String decoration) {
		this.decoration = decoration;
	}

	public String getMedia() {
		return media;
	}

	public void setMedia(String media) {
		this.media = media;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	@Override
	public String toString() {
		return "NewData [event_name=" + event_name + ", start_time=" + start_time + ", end_time=" + end_time + ", date="
				+ date + ", exp_attendee=" + exp_attendee + ", venue=" + venue + ", catering=" + catering
				+ ", decoration=" + decoration + ", media=" + media + ", email_id=" + email_id + "]";
	}

}
