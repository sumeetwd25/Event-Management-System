package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.Accounts;

@Repository
public interface AccountDao extends JpaRepository<Accounts, Integer> {

}
