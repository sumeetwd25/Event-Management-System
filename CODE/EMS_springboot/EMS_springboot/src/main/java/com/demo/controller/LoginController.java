package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Login;
import com.demo.service.LoginService;

@CrossOrigin("*")
@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginService loginService;

    @PostMapping("/") 
    public ResponseEntity<Login> validateUser(
            
            @RequestBody Login l) {

        System.out.println("in post");
        Login u1 = loginService.validateUser(l);
        System.out.println(u1);

        if (u1 != null) {
            // Return a success response with the user data
            return new ResponseEntity<>(u1, HttpStatus.OK);
        } else {
            // Return a failure response with an appropriate status code
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 401 Unauthorized
        }
    }
}