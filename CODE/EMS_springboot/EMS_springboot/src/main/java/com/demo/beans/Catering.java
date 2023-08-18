package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Catering {
	@Id
	private int catering_id;
	private String indian;
	private String continental;
	
	
	public Catering() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Catering(int catering_id, String indian, String continental) {
		super();
		this.catering_id = catering_id;
		this.indian = indian;
		this.continental = continental;
	}
	public int getCatering_id() {
		return catering_id;
	}
	public void setCatering_id(int catering_id) {
		this.catering_id = catering_id;
	}
	public String getIndian() {
		return indian;
	}
	public void setIndian(String indian) {
		this.indian = indian;
	}
	public String getContinental() {
		return continental;
	}
	public void setContinental(String continental) {
		this.continental = continental;
	}
	@Override
	public String toString() {
		return "Catering [catering_id=" + catering_id + ", indian=" + indian + ", continental=" + continental + "]";
	}
	
	

}
