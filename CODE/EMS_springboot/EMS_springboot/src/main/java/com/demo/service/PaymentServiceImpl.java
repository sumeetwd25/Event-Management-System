package com.demo.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Payment;
import com.demo.dao.PaymentDao;

@Service
public class PaymentServiceImpl implements PaymentService {
	
	@Autowired
	PaymentDao pdao;

	@Override
	public Payment getById(int payment_id) {
		Optional<Payment> op = pdao.findById(payment_id);
		if (op.isPresent()) {
		
			return op.get();
		} else
			return null;
	}

	@Override
	public void getById(Payment p) {
		
	}

	@Transactional
	@Override
	public void setStatus(Payment p, String s) {
		p.setStatus(s);
	}

}
