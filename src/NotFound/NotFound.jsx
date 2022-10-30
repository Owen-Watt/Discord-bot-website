import '../style.css'
import './NotFound.css'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NotFound() {


  return (
    <>
    <Helmet>
      <title>Not Found | Tokyo</title>
    </Helmet>

    <div className = "background">
      <h1>404</h1>
      <p>Page does not exist.</p>
      <Link to="/" className = "homePage-button">Return to Home page</Link>
    </div>
    
    </>
  );
}

export default NotFound;