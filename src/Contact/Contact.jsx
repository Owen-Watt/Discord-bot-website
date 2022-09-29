import '../style.css';
import './Contact.css'
import React, { useState } from 'react'
import {Helmet} from "react-helmet";

function Contact() {
    const [inputName, setInputName] = useState("default");
    const [messagePlaceholder, setMessagePlaceholder] = useState("Comments...");
    const [titlePlacehodler, setTitlePlaceholder] = useState("Title...")

   function handleSelection(e){
    const deleteUserPlaceholder = "Discord ID (eg. 795289659579957268)"
    const deleteServerPlaceholder = "Discord Server ID (eg. 968516326681374743)"
    const suggestionPlaceholder = "Suggestion Title"

    const deleteServerName = "DeleteServerData"
    const deleteUserName = "DeleteUserData"
    const suggestionName = "Suggestion"

    const suggestionMessage = "Suggestion..."
    const deleteMessage = "Reasons for deletion..."

    let choice = e.target.value;
    if(choice === "Suggestion"){
        setInputName(suggestionName);
        setTitlePlaceholder(suggestionPlaceholder);
        setMessagePlaceholder(suggestionMessage)
    }
    if(choice === "Delete User Data"){
        setInputName(deleteUserName);
        setTitlePlaceholder(deleteUserPlaceholder);
        setMessagePlaceholder(deleteMessage)
    }
    if(choice === "Delete Server Data"){
        setInputName(deleteServerName);
        setTitlePlaceholder(deleteServerPlaceholder);
        setMessagePlaceholder(deleteMessage)
    }
   }

    return (
        <>
            <Helmet>
                <title>Contact | Tokyo </title>
            </Helmet>

            <div className="main-wrapper">
                <form name="contact" method="POST" data-netlify="true">      
                <input type="hidden" name="form-name" value="contact"></input>
                    <select id="Subject" name="Subject" className="feedback-input" required onChange={handleSelection} >
                        <option value="" selected disabled>Select Topic</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Delete User Data">Delete User Data</option>
                        <option value="Delete Server Data">Delete Server Data</option>
                    </select>
                    <input name={inputName} className="feedback-input" placeholder={titlePlacehodler} required></input>
                    <textarea name="Message" className="feedback-input" placeholder={messagePlaceholder}></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </>
    );
}

export default Contact;
