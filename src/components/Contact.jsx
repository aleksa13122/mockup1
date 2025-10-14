import "./Contact.css";
import instagramIcon from "../assets/images/icons/icons8-instagram.svg";
import facebookIcon from "../assets/images/icons/icons8-facebook.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <h2 className="contact-header">AURUM</h2>
      </div>

      <div className="contact-grid">
        <div>
          <h3>WORKING HOURS</h3>
          <ul className="contact-list">
            <li>MONDAY-THURSDAY AND SUNDAY</li>
            <li className="li-hours">09:00 - 00:00h</li>
            <li>WEEKENDS</li>
            <li className="li-hours">09:00 - 02:00h</li>
          </ul>
        </div>
        <div>
          <h3>CONTACT</h3>
          <ul className="contact-list">
            <li>
              <a href="tel:+38699985540">+386 999 855 40</a>
            </li>

            <div className="contact-icons">
              <a
                href="https://www.instagram.com/aurumrestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="contact-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/aurumrestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="contact-icon"
                />
              </a>
            </div>

            <li>
              <a href="mailto:aurummellieha@gmail.com">
                aurummellieha@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>WHERE TO FIND US</h3>
          <ul className="contact-list">
            <li>Triq Dun Frangisk Scibberas 80</li>
            <li>2080 Mellieha,Malta</li>

            <li>
              <a href="https://www.google.com/search?q=google+maps+mellieha&oq=google+maps+mellieha+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEINDA4MGowajGoAgCwAgA&sourceid=chrome&ie=UTF-8#vhid=0x0:0x8410ebe85c31fe39&vssid=lclsmap&smwie=1">
                Location
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="contact-footer">© 2025 Aurum. All rights reserved.</p>
    </div>
  );
}
