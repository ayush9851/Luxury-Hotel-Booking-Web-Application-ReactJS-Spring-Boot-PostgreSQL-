package com.hotel_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel_management.model.DineIn;
import com.hotel_management.repository.DineInRepository;

@Service
public class DineInService {

	@Autowired
	private DineInRepository repo;

	public DineIn save(DineIn dine) {
		System.out.println("Saving: " + dine.getDate());
		return repo.save(dine);
	}

	public List<DineIn> getAll() {
		return repo.findAll();
	}
}
