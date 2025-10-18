
"use client"

const Form3 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Subject: ${subject}
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
        <form className="row cs_row_gap_30 cs_gap_y_30" onSubmit={handleSubmit}>
        <div className="col-sm-6">
          <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_white_bg" required />
        </div>
        <div className="col-sm-6">
          <input type="email" name="email" placeholder="Email Address" className="cs_form_field cs_white_bg" required />
        </div>
        <div className="col-sm-12">
          <input type="text" name="subject" placeholder="Subject" className="cs_form_field cs_white_bg" required />
        </div>
        <div className="col-sm-12">
          <textarea name="message" rows="5" placeholder="Message" className="cs_form_field cs_white_bg" required></textarea>
        </div>
        <div className="col-sm-12">
          <button type="submit" className="cs_btn cs_style_1 cs_radius_5">
            <span>Send Message</span>
            <span><i className="bi bi-arrow-right"></i></span>
          </button>
        </div>
      </form>
    );
};

export default Form3;