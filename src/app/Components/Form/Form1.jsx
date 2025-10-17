
"use client"

const Form1 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Subject: ${subject}
Service: ${service}
Message: ${message}`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Use the correct phone number format (remove + and spaces)
        const phoneNumber = '447578182552';
        
        // Open WhatsApp with the message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        e.target.reset();
    };

    return (
        <form className="row cs_row_gap_30 cs_gap_y_30" id="cs_form" onSubmit={handleSubmit}>
        <div className="col-sm-6">
          <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_radius_5" required />
        </div>
        <div className="col-sm-6">
          <input type="email" name="email" placeholder="Your Email" className="cs_form_field cs_radius_5" required />
        </div>
        <div className="col-sm-6">
          <input type="text" name="subject" placeholder="Subject" className="cs_form_field cs_radius_5" required />
        </div>
        <div className="col-sm-6 position-relative">
          <select name="service" className="form-select cs_form_field cs_radius_5" required>
            <option value="">Choose an option</option>
            <option value="New & Used Tyres">New & Used Tyres</option>
            <option value="Wheel Alignment">Wheel Alignment</option>
            <option value="Balancing">Balancing</option>
            <option value="Puncture Repair">Puncture Repair</option>
            <option value="Service Brakes">Service Brakes</option>
          </select>
        </div>
        <div className="col-12">
         <textarea name="message" rows="6" placeholder="Message" className="cs_form_field" required></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="cs_btn cs_style_1 wow fadeInRight">
            <span>Submit</span><i className="bi bi-arrow-right"></i>  
          </button>
        </div>
      </form>
    );
};

export default Form1;