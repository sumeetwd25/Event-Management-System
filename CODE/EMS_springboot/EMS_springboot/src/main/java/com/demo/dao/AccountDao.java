package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Accounts;

@Repository
public interface AccountDao extends JpaRepository<Accounts, Integer> {

//	@Query(value="select * from accounts where email_id=:email_id",nativeQuery=true)
//	Optional<Accounts> findById(@Param("email_id") String email_id);

	@Query(value="select * from accounts where email_id=:email_id",nativeQuery = true)
	Optional<Accounts> findByEmailId(@Param("email_id") String email_id);

}
