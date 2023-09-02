

CREATE TABLE venue (
    venue_id INT PRIMARY KEY auto_increment,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255),
    venue_cost int
);

CREATE TABLE catering (
    catering_id INT PRIMARY KEY auto_increment,
   menu varchar(255),
   menu_cost int
);


CREATE TABLE decoration (
    decoration_id INT PRIMARY KEY auto_increment,
	decor_type varchar(255),
	decor_cost int
);

CREATE TABLE media (
    media_id INT PRIMARY KEY auto_increment,
	media_type varchar(255),
    media_cost int
);


CREATE TABLE accounts (
    email_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    mob_no VARCHAR(20),
    role VARCHAR(50) NOT NULL
);

CREATE TABLE payment (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(50),
    venue_amt int,
    catering_amt int,
    media_amt int,
    decoration_amt int,
    total int
);

CREATE TABLE bookings (
    event_id INT PRIMARY KEY auto_increment,
    event_name VARCHAR(255) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    date DATE NOT NULL,
    exp_attendee INT,
    venue_id INT,
    catering_id INT,
    decoration_id INT,
    media_id INT,
    payment_id int,
    email_id VARCHAR(255),
    FOREIGN KEY (venue_id) REFERENCES venue(venue_id),
    FOREIGN KEY (catering_id) REFERENCES catering(catering_id),
    FOREIGN KEY (decoration_id) REFERENCES decoration(decoration_id),
    FOREIGN KEY (media_id) REFERENCES media(media_id),
    FOREIGN KEY (payment_id) REFERENCES payment(payment_id)
);



CREATE TABLE login (
    email_id VARCHAR(255),
    password VARCHAR(255) NOT NULL
);

#alter table payment modify column total int generated always as (venue_amt+catering_amt+media_amt+decoration_amt) stored;












