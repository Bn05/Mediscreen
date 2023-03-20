package com.mediscreen.microservicepatient.service;

import com.mediscreen.microservicepatient.model.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPatientService {

    //CREATE
    public Patient addPatient(Patient patient);

    //READ
    public Patient getPatientById(int id);

    //READ ALL
    public List<Patient> getAllPatient();

    //UPDATE
    public Patient updatePatient(Patient patient);

    //DELETE
    public void deletePatient(int id);
}