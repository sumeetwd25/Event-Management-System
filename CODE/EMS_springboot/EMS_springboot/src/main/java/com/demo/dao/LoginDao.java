package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.Login;

@Repository
public interface LoginDao extends JpaRepository<Login, Integer> {

}
