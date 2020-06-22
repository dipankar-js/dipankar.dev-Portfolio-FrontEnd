import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>copyright&copy; {new Date().getFullYear()}</h4>
        <span>dipankar.dev</span> All right reserved
      </div>
    </footer>
  )
}

export default Footer