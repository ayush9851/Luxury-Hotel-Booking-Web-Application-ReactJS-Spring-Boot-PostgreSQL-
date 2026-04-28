package com.hotel_management.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hotel_management.model.DineIn;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	@Column(unique = true)
	private String email;
	private String password;

	@OneToMany(mappedBy = "user")
	private List<Booking> bookings;

	// getters
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	// setters
	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<DineIn> dineins;
}