package com.hotel_management.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class Room {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String roomNumber;
	private String type;
	private double price;

	@OneToMany(mappedBy = "room")
	@JsonIgnore
	private List<Booking> bookings;

	// getters
	public int getId() {
		return id;
	}

	public String getRoomNumber() {
		return roomNumber;
	}

	public String getType() {
		return type;
	}

	public double getPrice() {
		return price;
	}

	// setters
	public void setId(int id) {
		this.id = id;
	}

	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setPrice(double price) {
		this.price = price;
	}
}