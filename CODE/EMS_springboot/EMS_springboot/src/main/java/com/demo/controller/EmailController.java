package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Accounts;
import com.demo.beans.EmailRequest;
import com.demo.service.AccountService;

@CrossOrigin("*")
@RestController
public class EmailController {

    @Autowired
    private JavaMailSender javaMailSender;
    
	@Autowired
	AccountService accountService;

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
    	
    	Accounts a =accountService.getByEmailId(emailRequest.getTo());
    	if(a!=null) {
    		System.out.println(a);
    		String password = a.getPassword();
        	
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(emailRequest.getTo());
            message.setSubject("4S Events");
            message.setText("Password of your 4S Events account is : "+password);
            
            System.out.println(message);
            
            javaMailSender.send(message);
            
            return "Email sent successfully!";
    	}
    	else {
    		return null;
    	}
    	
    }
}

