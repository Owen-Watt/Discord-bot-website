import './Footer.css';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="socials">
            <Link to="/commands" className="footer-links">Commands</Link>
{/*             <Link to="/manacube" className="footer-links">Manacube</Link> */}
            <Link to="/contact" className="footer-links">Contact</Link>
            <Link to="/terms" className="footer-links">Terms</Link>
            <a href="https://discord.gg/mACacV4eG8" className="footer-links">Support</a>
            <Link to="/invite" className="footer-links">Invite Bot</Link>
        </div>
        <div className="footer-copyright">© Copyright 2022</div>
      </footer>
    </>
  );
}

export default Footer;