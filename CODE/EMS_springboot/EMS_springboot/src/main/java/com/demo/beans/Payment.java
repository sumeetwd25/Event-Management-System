package com.demo.beans;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Formula;

@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int payment_id;
	private String status;
	private int venue_amt;
	private int catering_amt;
	private int media_amt;
	private int decoration_amt;
	
//	@Formula(value = "venue_cost + catering_cost + media_cost + decoration_cost")
	private int total;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(int payment_id, String status, int venue_amt, int catering_amt, int media_amt,
			int decoration_amt, int total) {
		super();
		this.payment_id = payment_id;
		this.status = status;
		this.venue_amt = venue_amt;
		this.catering_amt = catering_amt;
		this.media_amt = media_amt;
		this.decoration_amt = decoration_amt;
		this.total = total;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getVenue_amt() {
		return venue_amt;
	}

	public void setVenue_amt(int venue_amt) {
		this.venue_amt = venue_amt;
	}

	public int getCatering_amt() {
		return catering_amt;
	}

	public void setCatering_amt(int catering_amt) {
		this.catering_amt = catering_amt;
	}

	public int getMedia_amt() {
		return media_amt;
	}

	public void setMedia_amt(int media_amt) {
		this.media_amt = media_amt;
	}

	public int getDecoration_amt() {
		return decoration_amt;
	}

	public void setDecoration_amt(int decoration_amt) {
		this.decoration_amt = decoration_amt;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "Payment [payment_id=" + payment_id + ", status=" + status + ", venue_amt=" + venue_amt
				+ ", catering_amt=" + catering_amt + ", media_amt=" + media_amt + ", decoration_amt=" + decoration_amt
				+ ", total=" + total + "]";
	}

}
