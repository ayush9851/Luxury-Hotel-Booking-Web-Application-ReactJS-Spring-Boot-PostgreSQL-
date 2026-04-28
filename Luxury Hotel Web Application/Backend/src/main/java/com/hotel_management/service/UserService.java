package com.hotel_management.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hotel_management.model.User;
import com.hotel_management.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User updateUser(int id, User user) {
		user.setId(id);
		return userRepository.save(user);
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public void deleteUser(int id) {
		userRepository.deleteById(id);
	}

	public String login(User user) {

		User existingUser = userRepository.findByEmail(user.getEmail());

		if (existingUser == null) {
			return "User not found";
		}

		if (existingUser.getPassword() == null) {
			return "Password missing in DB";
		}

		if (existingUser.getPassword().equals(user.getPassword())) {
			return "Login Successful";
		} else {
			return "Invalid password";
		}
	}
}