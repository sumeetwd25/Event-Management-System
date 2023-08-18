package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Accounts;
import com.demo.beans.Login;
import com.demo.dao.LoginDao;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	LoginDao ldao;

	@Override
	public void addNewLogin(Accounts a) {
		Login l=new Login(a.getEmail_id(),a.getPassword());
		ldao.save(l);
	}

}
