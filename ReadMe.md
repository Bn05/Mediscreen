# MediScreen

Medical management application: patients, notes and health report.

## About The Project

Web application prototype for Openclassrooms, project number 9.
This is a Spring Boot application.

## Getting Started

### Prerequisites

Check that you have :

* Apache Maven 3.8.6 installed
* Docker Desktop installed 4.17.0 (99724)

### Installation

1. Select the Mediscreen directory
2. Run test and create docker images (Docker must be run !).
   1. On linux
      1. 
         ```sh
         mvn clean verify site -pl '!service-gateway,!service-eureka,!service-ui'
         ```
      2.  
         ```sh
         mvn clean package -pl '!microservice-patient,!microservice-note,!microservice-score' -DskipTests
         ```
   2. On Windows
      1.
         ```sh
         mvn clean verify site -pl "!service-gateway,!service-eureka,!service-ui"
         ```
      2.
         ```sh
         mvn clean package -pl "!microservice-patient,!microservice-note,!microservice-score" -DskipTests
         ```        
3. Execute
    ```sh
    docker-compose up -d 
    ```
4. To access the WebApp, open your browser, go to [http://localhost:8888/mediscreen/ui](http://localhost:8888/mediscreen/ui)
5. To access the API, call [http://localhost:8888/mediscreen/api](http://localhost:8888/mediscreen/api).
6. Swagger
7. Zipkin