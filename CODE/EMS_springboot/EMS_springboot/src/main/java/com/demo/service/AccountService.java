package com.demo.service;

import java.util.List;

import com.demo.beans.Accounts;
import com.demo.beans.Bookings;

public interface AccountService {
   
	void addNewAccount (Accounts a);

	Accounts getByEmailId(String email_id);

	List<Accounts> getAll();

}
