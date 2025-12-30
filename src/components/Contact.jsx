import React from "react";
import "./Contact.css";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import instagramIcon from "../assets/images/icons/icons8-instagram.svg";
import facebookIcon from "../assets/images/icons/icons8-facebook.svg";
import locationIcon from "../assets/images/icons/location-map-icon.svg";

export default function Contact() {
  const { t } = useContext(LanguageContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupPhone, setShowPopupPhone] = useState(false);

  const Popup = () => {
    setShowPopup(true);
    navigator.clipboard.writeText("aurummellieha@gmail.com");
    setTimeout(() => setShowPopup(false), 3000);
  };

  const PopupPhone = () => {
    setShowPopupPhone(true);
    navigator.clipboard.writeText("+386 999 855 40");
    setTimeout(() => setShowPopupPhone(false), 3000);
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact-header">{t("contact.title")}</h2>

      <div className="contact-grid">
        <div>
          <h3>{t("contact.workingHours.title")}</h3>
          <ul className="contact-list">
            <li>{t("contact.workingHours.weekdays")}</li>
            <li className="li-hours">{t("contact.workingHours.hours1")}</li>
            <li>{t("contact.workingHours.weekend")}</li>
            <li className="li-hours">{t("contact.workingHours.hours2")}</li>
          </ul>
        </div>

        <div>
          <h3>{t("contact.contactSection.title")}</h3>
          <ul className="contact-list">
            <li>
              <a onClick={PopupPhone} className="phone-copy">
                +386 999 855 40
              </a>
              {showPopupPhone && (
                <div className="popup">
                  {t("contact.contactSection.phoneCopied")}
                </div>
              )}
            </li>
            <li className="contact-icons">
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
            </li>

            <li>
              <a onClick={Popup} className="email-copy">
                aurummellieha@gmail.com
              </a>
              {showPopup && (
                <div className="popup">
                  {t("contact.contactSection.emailCopied")}
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <h3>{t("contact.where.title")}</h3>
          <ul className="contact-list">
            <li>{t("contact.where.address1")}</li>
            <li>{t("contact.where.address2")}</li>
            <li className="location-item">
              <a
                className="contact-icon-link"
                href="https://www.google.com/maps"
              >
                {t("contact.where.location")}
                <img
                  src={locationIcon}
                  alt="Location"
                  className="contact-icon location-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="contact-footer">{t("contact.footer")}</p>
    </div>
  );
}
