package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Decoration {
	@Id
	private int decoration_id;
	private String floral_decor;
	private String balloon_decor;
	private String other_decor;

	public Decoration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Decoration(int decoration_id, String floral_decor, String balloon_decor, String other_decor) {
		super();
		this.decoration_id = decoration_id;
		this.floral_decor = floral_decor;
		this.balloon_decor = balloon_decor;
		this.other_decor = other_decor;
	}

	public int getDecoration_id() {
		return decoration_id;
	}

	public void setDecoration_id(int decoration_id) {
		this.decoration_id = decoration_id;
	}

	public String getFloral_decor() {
		return floral_decor;
	}

	public void setFloral_decor(String floral_decor) {
		this.floral_decor = floral_decor;
	}

	public String getBalloon_decor() {
		return balloon_decor;
	}

	public void setBalloon_decor(String balloon_decor) {
		this.balloon_decor = balloon_decor;
	}

	public String getOther_decor() {
		return other_decor;
	}

	public void setOther_decor(String other_decor) {
		this.other_decor = other_decor;
	}

	@Override
	public String toString() {
		return "Decoration [decoration_id=" + decoration_id + ", floral_decor=" + floral_decor + ", balloon_decor="
				+ balloon_decor + ", other_decor=" + other_decor + "]";
	}

}
