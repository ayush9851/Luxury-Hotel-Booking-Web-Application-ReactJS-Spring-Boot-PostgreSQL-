package com.hotel_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel_management.model.DineIn;

public interface DineInRepository extends JpaRepository<DineIn, Integer> {
}
