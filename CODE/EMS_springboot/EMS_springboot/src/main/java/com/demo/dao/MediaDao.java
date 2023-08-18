package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.Media;

@Repository
public interface MediaDao extends JpaRepository<Media, Integer> {

}
