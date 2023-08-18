package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.Decoration;

@Repository
public interface DecorationDao extends JpaRepository<Decoration, Integer> {

}
