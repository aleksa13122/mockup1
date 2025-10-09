import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-header">AURUM</h2>
      <div className="contact-grid">
        <div>
          <h3>WORKING HOURS</h3>
          <li>MONDAY-THURSDAY 9-24h</li>
          <li>WEEKENDS 9-02h</li>
        </div>
        <div>
          <h3>CONTACT</h3>
          <li>
            <a>PHONE NUM</a>
          </li>
          <li>
            <a>instagram fejs</a>
          </li>
          <li>
            <a>mejl</a>
          </li>
        </div>
        <div>
          <h3>LOCATION</h3>
          <li>ULICA</li>
          <li>POSTANSKI I IME GRADA</li>
          <li>DRZAVA</li>
        </div>
      </div>
      <p className="contact-footer">© 2025 Aurum. All rights reserved.</p>
    </div>
  );
}
