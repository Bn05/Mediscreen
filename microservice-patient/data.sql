DROP
DATABASE IF EXISTS mediscreen;

CREATE
DATABASE mediscreen;

use mediscreen;

CREATE TABLE patients
(

    id           INTEGER      NOT NULL AUTO_INCREMENT,
    last_name    VARCHAR(155) NOT NULL,
    first_name   VARCHAR(155) NOT NULL,
    birthdate    DATE         NOT NULL,
    gender       VARCHAR(155) NOT NULL,
    address      VARCHAR(255),
    phone_number VARCHAR(155),

    PRIMARY KEY (id)
);