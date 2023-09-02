package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Bookings;

@Repository
public interface BookingDao extends JpaRepository<Bookings, Integer> {

	@Modifying
	@Query(value = "INSERT INTO bookings (event_id, event_name, start_time, end_time, date, exp_attendee, venue_id, catering_id, decoration_id, media_id, payment_id, email_id) " +
	       "VALUES (:event_id, :event_name, :start_time, :end_time, :date, :exp_attendee, :venue_id, :catering_id, :decoration_id, :media_id, :payment_id, :email_id)", nativeQuery = true)
	void saveBooking(@Param("event_id") int eventId, @Param("event_name") String eventName, @Param("start_time") String startTime,
	                 @Param("end_time") String endTime, @Param("date") String date, @Param("exp_attendee") int expAttendee,
	                 @Param("venue_id") int venueId, @Param("catering_id") int cateringId, @Param("decoration_id") int decorationId,
	                 @Param("media_id") int mediaId, @Param("payment_id") int payment_id, @Param("email_id") String email_id);

	@Query(value="select * from bookings where date=:date and (:start_time between start_time and end_time or :end_time between start_time and end_time);",nativeQuery = true)
	List<Bookings> findByDate(@Param("date") String date, @Param("start_time") String start_time,@Param("end_time") String end_time);

	@Query(value="select * from bookings where email_id=:email_id",nativeQuery = true)
	List<Bookings> findByEmail(@Param("email_id") String email_id);


//	void delete(Optional<Bookings> b);


}
