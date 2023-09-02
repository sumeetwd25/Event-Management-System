package com.demo.service;

import com.demo.beans.Accounts;
import com.demo.beans.Login;

public interface LoginService {
	void addNewLogin(Accounts a);

	Login validateUser(Login l);
}
