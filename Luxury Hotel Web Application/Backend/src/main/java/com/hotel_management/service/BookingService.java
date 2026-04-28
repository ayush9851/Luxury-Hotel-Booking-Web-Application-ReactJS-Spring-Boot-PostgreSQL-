package com.hotel_management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hotel_management.model.Booking;
import com.hotel_management.repository.BookingRepository;

@Service
public class BookingService {

	@Autowired
	private BookingRepository bookingRepository;

	public String saveBooking(Booking booking) {

	    List<Booking> conflicts = bookingRepository.findConflictingBookings(
	            booking.getRoom().getId(),
	            booking.getCheckInDate(),
	            booking.getCheckOutDate()
	    );

	    if (!conflicts.isEmpty()) {
	        return "Room already booked for selected dates";
	    }

	    bookingRepository.save(booking);
	    return "Booking successful";
	}

	public List<Booking> getAllBookings() {
		return bookingRepository.findAll();
	}

	public Booking updateBooking(int id, Booking booking) {
		booking.setId(id);
		return bookingRepository.save(booking);
	}

	public void deleteBooking(int id) {
		bookingRepository.deleteById(id);
	}
}