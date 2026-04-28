package com.hotel_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hotel_management.model.Booking;
import com.hotel_management.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin
public class BookingController {

	@Autowired
	private BookingService bookingService;

	@PostMapping
	public String bookRoom(@RequestBody Booking booking) {
		return bookingService.saveBooking(booking);
	}

	@GetMapping
	public List<Booking> getAllBookings() {
		return bookingService.getAllBookings();
	}

	@PutMapping("/{id}")
	public Booking updateBooking(@PathVariable int id, @RequestBody Booking booking) {
		return bookingService.updateBooking(id, booking);
	}

	@DeleteMapping("/{id}")
	public String deleteBooking(@PathVariable int id) {
		bookingService.deleteBooking(id);
		return "Booking deleted successfully";
	}
}