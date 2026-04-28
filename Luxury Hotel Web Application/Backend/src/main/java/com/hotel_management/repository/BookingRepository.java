package com.hotel_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hotel_management.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Query("SELECT b FROM Booking b WHERE b.room.id = :roomId "
			+ "AND (:checkIn < b.checkOutDate AND :checkOut > b.checkInDate)")
	List<Booking> findConflictingBookings(@Param("roomId") int roomId, @Param("checkIn") String checkIn,
			@Param("checkOut") String checkOut);

}
