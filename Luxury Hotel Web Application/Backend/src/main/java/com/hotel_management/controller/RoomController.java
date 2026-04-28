package com.hotel_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hotel_management.model.Room;
import com.hotel_management.service.RoomService;

@RestController
@RequestMapping("/rooms")
@CrossOrigin
public class RoomController {

	@Autowired
	private RoomService roomService;

	@PostMapping
	public Room saveRoom(@RequestBody Room room) {
		return roomService.saveRoom(room);
	}

	@GetMapping
	public List<Room> getAllRooms() {
		return roomService.getAllRooms();
	}

	@PutMapping("/{id}")
	public Room updateRoom(@PathVariable int id, @RequestBody Room room) {
		return roomService.updateRoom(id, room);
	}

	@DeleteMapping("/{id}")
	public String deleteRoom(@PathVariable int id) {
		roomService.deleteRoom(id);
		return "Room deleted successfully";
	}
}