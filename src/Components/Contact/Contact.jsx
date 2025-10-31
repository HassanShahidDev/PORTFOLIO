import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b82bcd04-9695-4102-9159-dded8181bda7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Success!");
      alert("✅ Your message has been sent successfully!");
      event.target.reset(); // form clear after submit
    } else {
      setResult("Error");
      alert("❌ Something went wrong! Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contactleft">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>

          <div className="contact-details">
            <div className="conatct-detail">
              <img src={mail_icon} alt="" /> <p>hassndev@gmail.com</p>
            </div>

            <div className="conatct-detail">
              <img src={call_icon} alt="" /> <p>+92 300-1839292</p>
            </div>

            <div className="conatct-detail">
              <img src={location_icon} alt="" /> <p>Lhr, Pakistan</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" required />
          
          <label>Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" required />

          <label>Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
