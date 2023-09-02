package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Venue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int venue_id;
	private String name;
	private String address;
	private String location;
	private int venue_cost;

	public Venue() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Venue(int venue_id, String name, String address, String location, int venue_cost) {
		super();
		this.venue_id = venue_id;
		this.name = name;
		this.address = address;
		this.location = location;
		this.venue_cost = venue_cost;
	}

	public int getVenue_id() {
		return venue_id;
	}

	public void setVenue_id(int venue_id) {
		this.venue_id = venue_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getVenue_cost() {
		return venue_cost;
	}

	public void setVenue_cost(int venue_cost) {
		this.venue_cost = venue_cost;
	}

	@Override
	public String toString() {
		return "Venue [venue_id=" + venue_id + ", name=" + name + ", address=" + address + ", location=" + location
				+ ", venue_cost=" + venue_cost + "]";
	}

}
