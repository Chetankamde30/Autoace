import React from "react";
import "./FooterStyles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";

export const Footer = () => {
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          <FooterContact />
          <FooterLink
            title="Locations"
            links={["Nagpur", "Mumbai", "Pune", "Gujarat", "Delhi"]}
          />
          <FooterLink
            title="Useful Pages"
            links={[
              "About Us",
              "Contact Us",
              "Our Team",
              "Projects",
              "Testimonial",
            ]}
          />
          <Newsletter />
        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a href="">Terms of use</a>
          <a href="">Privacy policy</a>
          <a href="">Cookies</a>
          <a href="">Help</a>
          <a href="">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy;{" "}
              <a
                href="https://freewebsitecode.com"
                style={{ textDecoration: "none" }}
              >
                Autoace@gmail.com
              </a>
              , All Right Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Developed By -{" "}
              <a
                href="https://freewebsitecode.com"
                style={{ textDecoration: "none" }}
              >
                Chetan Kamde | Vedantika Patil | Vikrant Gawale | Ketki Lanjewar
                | Atul Kakade
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FooterContact = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="footer-contact">
        <h2>Office Contact</h2>
        <p>
          <i className="fa fa-map-marker-alt"></i>AutoAce Office, New Delhi
        </p>
        <p>
          <i className="fa fa-phone-alt"></i>+012 345 67890
        </p>
        <p>
          <i className="fa fa-envelope"></i>info@gmail.com
        </p>
        <div className="footer-social ">
          <a href="https://freewebsitecode.com/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/freewebsitecode">
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* <a href="https://freewebsitecode.com/"><i className="fab fa-linkedin-in"></i></a> */}
          <a href="https://freewebsitecode.com/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export const FooterLink = ({ title, links }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="footer-link">
        <h2>{title}</h2>
        {links.map((link, index) => (
          <a key={index} href="#">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server
      const response = await fetch("http://localhost:4900/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        // Handle successful subscription, e.g., show a success message
        console.log("Subscription successful!");
      } else {
        // Handle subscription failure, e.g., show an error message
        console.error("Subscription failed:", data.error);
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      // Handle other errors, e.g., show a general error message
    }

    // Clear the email input after submission
    setEmail("");
  };
  return (
    <div className="col-md-6 col-lg-3">
      <div className="newsletter">
        <h2>
          "Discover Excellence with AutoAce: Your Premier Vehicle Care Partner"
        </h2>
        <p>
          "AutoAce: Your Trusted Partner for Comprehensive Vehicle Care. With
          cutting-edge technology, skilled technicians, and a commitment to
          customer satisfaction, we ensure your journey is smooth and
          worry-free. Drive confidently with AutoAce – Where Excellence Meets
          the Road."
        </p>
        <div className="form">
          <input className="form-control" placeholder="Email here" />
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
