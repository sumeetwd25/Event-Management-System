package com.demo.service;

import com.demo.beans.Payment;

public interface PaymentService {

	Payment getById(int payment_id);

	void getById(Payment p);

	void setStatus(Payment p, String s);

}
