package com.hotel_management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hotel_management.model.Room;
import com.hotel_management.repository.RoomRepository;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRepository;

	public Room saveRoom(Room room) {
		return roomRepository.save(room);
	}

	public List<Room> getAllRooms() {
		return roomRepository.findAll();
	}

	public Room updateRoom(int id, Room room) {
		room.setId(id);
		return roomRepository.save(room);
	}

	public void deleteRoom(int id) {
		roomRepository.deleteById(id);
	}

}