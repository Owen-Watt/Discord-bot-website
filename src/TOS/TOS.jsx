import '../style.css';
import './TOS.css'
import React  from 'react'
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
function TOS() {
   
  return (
    <>
    
      <Helmet>
        <title>Terms | Tokyo </title>
      </Helmet>


      <div className="main-wrapper terms">
        <div className="terms-wrapper">
        <span style={{textAlign: "center", fontSize:"1.5rem"}}>Terms Of Service & Privacy Policy</span>
        <br></br>
        <span>
        By inviting the Tokyo Bot to your server you agree that you have read, understood, and accepted these terms. You are also responsible for informing the members 
        in your discord server about these terms. If you do not agree with any of these terms, you are prohibited from using or adding the Tokyo Bot to your server.
        <br></br>
        <br></br>
        You are strictly prohibited to use the Tokyo Bot against the ToS of Discord or for illegal purposes.
        <br></br>
        <br></br>
        The Tokyo Bot stores the UUID of users along with the statistics that go along with commands, such as how many hugs you have received or given or a users cash balance. 
        This is all stored for users to view through the statistics command.
        <br></br>
        <br></br>
        Command usage is logged to make it easier to pinpoint errors within the bot, when the bot crashes, we can see what command caused it and fix it quicker.
        <br></br>
        <br></br>
        If you wish to get in contact about these terms, or wish to delete your User data, <Link to="/contact" style={{color: "lightblue"}}>click here to get in contact.</Link>
        </span>

        </div>
      </div>
    </>
  );
}

export default TOS;