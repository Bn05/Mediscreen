package com.mediscreen.serviceui.proxies;

import com.mediscreen.serviceui.bean.PatientBean;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "microservice-patient")
@LoadBalancerClient(name = "microservice-patient")
public interface PatientProxy {

    //CREATE
    @PostMapping(value = "/patient")
    public PatientBean addPatient(@RequestBody PatientBean patientBean);

    //READ
    @GetMapping(value = "/patient/{id}")
    public PatientBean getPatientById(@PathVariable int id);

    //READ ALL
    @GetMapping(value = "/patient/all")
    public List<PatientBean> getAllPatient();

    //UPDATE
    @PutMapping(value = "/patient/{id}")
    public PatientBean updatePatient(@PathVariable int id, @RequestBody PatientBean patientBean);

    //DELETE
    @DeleteMapping("/patient/{id}")
    public void deletePatient(@PathVariable int id);
}
