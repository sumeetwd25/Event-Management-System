package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Accounts;
import com.demo.beans.Bookings;
import com.demo.beans.Login;
import com.demo.dao.AccountDao;
import com.demo.dao.LoginDao;

@Service
public class AccountServiceImpl implements AccountService {
	@Autowired
	AccountDao adao;

	@Autowired
	LoginDao ldao;

	@Override
	public void addNewAccount(Accounts a) {
		adao.save(a);
		Login l = new Login(a.getEmail_id(), a.getPassword());
		ldao.save(l);
	}


	@Override
	public Accounts getByEmailId(String email_id) {
		Optional<Accounts> op = adao.findByEmailId(email_id);
		if (op.isPresent()) {
			return op.get();
		} else
			return null;
	}


	@Override
	public List<Accounts> getAll() {
		List<Accounts> alist = adao.findAll();
		System.out.println(alist);
		return alist;
	}

	
}
