"use client"
import React, { useState } from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';

// Function to convert time string to 24-hour format for comparison
const timeToMinutes = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    
    if (period === 'PM' && hours !== 12) {
        totalMinutes += 12 * 60;
    } else if (period === 'AM' && hours === 12) {
        totalMinutes -= 12 * 60;
    }
    
    return totalMinutes;
};

const BookPage = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    
    // Get today's date in YYYY-MM-DD format for min attribute
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Initialize available times based on current time
    const getInitialTimes = () => {
        const today = new Date();
        const currentTime = today.getHours() * 60 + today.getMinutes();
        
        // Default times for Monday-Saturday
        const defaultTimes = [
            "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
            "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
            "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", 
            "5:00 PM", "5:30 PM"
        ];
        
        // Filter out past times if it's during business hours
        return defaultTimes.filter(time => {
            const timeInMinutes = timeToMinutes(time);
            return timeInMinutes > currentTime;
        });
    };

    const [availableTimes, setAvailableTimes] = useState(getInitialTimes());

    // Function to generate time slots based on the selected day
    const generateTimeSlots = (dateString) => {
        if (!dateString) return;
        
        const date = new Date(dateString);
        const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const today = new Date();
        const isToday = dateString === getTodayDate();
        
        const times = [];
        
        if (dayOfWeek >= 1 && dayOfWeek <= 6) {
            // Monday to Saturday: 8:00 AM to 5:30 PM
            times.push("8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
                      "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
                      "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", 
                      "5:00 PM", "5:30 PM");
        } else if (dayOfWeek === 0) {
            // Sunday: 10:00 AM to 3:30 PM
            times.push("10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
                      "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM");
        }
        
        // If booking for today, filter out past times
        if (isToday) {
            const currentTime = today.getHours() * 60 + today.getMinutes();
            const availableTimes = times.filter(time => {
                const timeInMinutes = timeToMinutes(time);
                return timeInMinutes > currentTime;
            });
            setAvailableTimes(availableTimes);
        } else {
            setAvailableTimes(times);
        }
        
        setSelectedTime(''); // Reset time when date changes
    };

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        generateTimeSlots(date);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email') || 'Not provided';
        const services = formData.getAll('services');
        const date = selectedDate;
        const time = formData.get('time');
        const message = formData.get('message') || 'No additional message';
        
        // Format services list
        const servicesList = services.length > 0 ? services.join(', ') : 'None selected';
        
        // Create WhatsApp message
        const whatsappMessage = `🚗 New Booking Appointment Request:

👤 Customer Information:
• Name: ${name}
• Phone: ${phone}
• Email: ${email}

📅 Appointment Details:
• Date: ${date}
• Time: ${time}

🔧 Services Requested:
${servicesList}

💬 Additional Message:
${message}

⏰ Booked on: ${new Date().toLocaleString()}`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Use the correct phone number format (remove + and spaces)
        const phoneNumber = '447578182552';
        
        // Open WhatsApp with the message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        e.target.reset();
        setSelectedDate('');
        setSelectedTime('');
        setAvailableTimes(getInitialTimes());
    };

    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/bg3.jpg"
                Title="Booking"
            ></BreadCumb>
            
            {/* Booking Section */}
            <section className="cs_booking_section cs_section_padding">
                <div className="container">
                    <div className="row">
                        {/* Booking Information Sidebar */}
                        <div className="col-lg-4">
                            <div className="cs_booking_info_sidebar">
                                <div className="cs_booking_info_title">
                                    <h3>Booking Information</h3>
                                    <div className="cs_title_separator">
                                        <span className="cs_accent_bg"></span>
                                    </div>
                                </div>
                                
                                <div className="cs_booking_info_item">
                                    <div className="cs_info_icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div className="cs_info_content">
                                        <h4>Call for Booking</h4>
                                        <p>+44 777 693 0794</p>
                                        <p>+44 757 818 2552</p>
                                    </div>
                                </div>
                                
                                <div className="cs_booking_info_item">
                                    <div className="cs_info_icon">
                                        <i className="bi bi-clock-fill"></i>
                                    </div>
                                    <div className="cs_info_content">
                                        <h4>Operating Hours</h4>
                                        <p>Mon - Sat: 8am to 6pm</p>
                                        <p>Sun: 10am to 4pm</p>
                                    </div>
                                </div>
                                
                                <div className="cs_booking_info_item">
                                    <div className="cs_info_icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div className="cs_info_content">
                                        <h4>Shop Address</h4>
                                        <p>416 Ealing Rd, Wembley HA0 1JQ, United Kingdom</p>
                                    </div>
                                </div>
                                
                                <div className="cs_booking_info_item">
                                    <div className="cs_info_icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <div className="cs_info_content">
                                        <h4>Email Us</h4>
                                        <p>zeeautotyres@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Booking Form */}
                        <div className="col-lg-8">
                            <div className="cs_booking_form_wrap">
                                <div className="cs_booking_form_title">
                                    <h2>Book Your Service</h2>
                                    <div className="cs_title_separator">
                                        <span className="cs_accent_bg"></span>
                                        <span className="cs_accent_bg"></span>
                                    </div>
                                    <p>Fill out the form below to schedule your appointment. Required fields are marked with *</p>
                                </div>
                                
                                <form className="cs_booking_form" onSubmit={handleSubmit}>
                                    {/* Services Selection */}
                                    <div className="cs_form_group">
                                        <label className="cs_form_label">Select Services *</label>
                                        <div className="cs_services_grid">
                                            <div className="cs_service_checkbox">
                                                <input type="checkbox" id="service1" name="services" value="New & Used Tyres" />
                                                <label htmlFor="service1">New & Used Tyres</label>
                                            </div>
                                            <div className="cs_service_checkbox">
                                                <input type="checkbox" id="service2" name="services" value="Wheel Alignment" />
                                                <label htmlFor="service2">Wheel Alignment</label>
                                            </div>
                                            <div className="cs_service_checkbox">
                                                <input type="checkbox" id="service3" name="services" value="Puncture Repair" />
                                                <label htmlFor="service3">Puncture Repair</label>
                                            </div>
                                            <div className="cs_service_checkbox">
                                                <input type="checkbox" id="service4" name="services" value="Service Brakes" />
                                                <label htmlFor="service4">Service Brakes</label>
                                            </div>
                                            <div className="cs_service_checkbox">
                                                <input type="checkbox" id="service5" name="services" value="Balancing" />
                                                <label htmlFor="service5">Balancing</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Date and Time */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="cs_form_group">
                                                <label className="cs_form_label">Preferred Date *</label>
                                                <div className="cs_input_wrap">
                                                    <input 
                                                        type="date" 
                                                        className="cs_form_control" 
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        min={getTodayDate()}
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cs_form_group">
                                                <label className="cs_form_label">Preferred Time *</label>
                                                <div className="cs_input_wrap">
                                                    <select name="time" className="cs_form_control" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                                                        <option value="">Select Time</option>
                                                        {availableTimes.map((time, index) => (
                                                            <option key={index} value={time}>
                                                                {time}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Contact Information */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="cs_form_group">
                                                <label className="cs_form_label">Full Name *</label>
                                                <input type="text" name="name" className="cs_form_control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cs_form_group">
                                                <label className="cs_form_label">Phone Number *</label>
                                                <input type="tel" name="phone" className="cs_form_control" required />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="cs_form_group">
                                        <label className="cs_form_label">Email Address (Optional)</label>
                                        <input type="email" name="email" className="cs_form_control" />
                                    </div>
                                    
                                    <div className="cs_form_group">
                                        <label className="cs_form_label">Additional Message (Optional)</label>
                                        <textarea name="message" className="cs_form_control cs_textarea" rows="4" placeholder="Please provide any additional details about your service requirements..."></textarea>
                                    </div>
                                    
                                    <div className="cs_form_submit">
                                        <button type="submit" className="cs_btn cs_style_1 cs_accent_bg">
                                            <span>BOOK APPOINTMENT</span>
                                            <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookPage;
