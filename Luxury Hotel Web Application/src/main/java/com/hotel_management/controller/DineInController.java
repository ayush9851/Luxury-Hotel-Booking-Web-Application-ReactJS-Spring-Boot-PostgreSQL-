package com.hotel_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel_management.model.DineIn;
import com.hotel_management.service.DineInService;

@RestController
@RequestMapping("/dinein")
@CrossOrigin(origins = "http://localhost:5173")
public class DineInController {

	@Autowired
	private DineInService service;

	@PostMapping
	public DineIn bookTable(@RequestBody DineIn dine) {
		return service.save(dine);
	}

	@GetMapping
	public List<DineIn> getAll() {
		return service.getAll();
	}
}
