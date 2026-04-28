package com.hotel_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hotel_management.model.User;
import com.hotel_management.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping
	public User saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}

	@GetMapping
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	@PutMapping("/{id}")
	public User updateUser(@PathVariable int id, @RequestBody User user) {
		user.setId(id);
		return userService.saveUser(user);
	}

	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
		return "User deleted successfully";
	}

	@PostMapping("/login")
	public String loginUser(@RequestBody User user) {
		return userService.login(user);
	}
}