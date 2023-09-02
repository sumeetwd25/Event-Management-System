package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Login;

@Repository
public interface LoginDao extends JpaRepository<Login, Integer> {
	
	@Query(value = "select * from login where email_id=:email_id and password=:password", nativeQuery = true)
	Login validateUser(@Param("email_id") String email_id, @Param("password") String password);

}
