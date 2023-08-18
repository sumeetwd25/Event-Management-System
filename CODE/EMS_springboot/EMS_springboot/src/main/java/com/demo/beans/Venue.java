package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Venue {
	@Id
	private int venue_id;
	private String name;
	private String address;
	private String location;

	// Default constructor
	public Venue() {
		super();
	}

	// Parameterized constructor
	public Venue(int venue_id, String name, String address, String location) {
		this.venue_id = venue_id;
		this.name = name;
		this.address = address;
		this.location = location;
	}

	// Getter and setter methods
	public int getvenue_id() {
		return venue_id;
	}

	public void setvenue_id(int venue_id) {
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

	// toString method
	@Override
	public String toString() {
		return "Venue{" + "venue_id=" + venue_id + ", name='" + name + '\'' + ", address='" + address + '\''
				+ ", location='" + location + '\'' + '}';
	}
}
