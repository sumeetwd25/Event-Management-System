package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.Venue;

@Repository
public interface VenueDao extends JpaRepository<Venue, Integer> {

}
