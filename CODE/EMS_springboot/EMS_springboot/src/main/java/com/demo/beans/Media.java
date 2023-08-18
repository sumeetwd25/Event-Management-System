package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Media {
	@Id
	private int media_id;
	private String photography;
	private String videography;
	private String drone_photography;

	public Media() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Media(int media_id, String photography, String videography, String drone_photography) {
		super();
		this.media_id = media_id;
		this.photography = photography;
		this.videography = videography;
		this.drone_photography = drone_photography;
	}

	public int getMedia_id() {
		return media_id;
	}

	public void setMedia_id(int media_id) {
		this.media_id = media_id;
	}

	public String getPhotography() {
		return photography;
	}

	public void setPhotography(String photography) {
		this.photography = photography;
	}

	public String getVideography() {
		return videography;
	}

	public void setVideography(String videography) {
		this.videography = videography;
	}

	public String getDrone_photography() {
		return drone_photography;
	}

	public void setDrone_photography(String drone_photography) {
		this.drone_photography = drone_photography;
	}

	@Override
	public String toString() {
		return "Media [media_id=" + media_id + ", photography=" + photography + ", videography=" + videography
				+ ", drone_photography=" + drone_photography + "]";
	}

}
