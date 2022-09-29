import '../style.css';
import './Commands.css'
import React, { useState } from 'react'
import {Helmet} from "react-helmet";
import CommandPreview from "./CommandPreview"

function Commands() {
    const [sectionToShow, setSectionToShow] = useState("Affection")
    const changeSection = (e) => {
        setSectionToShow(e.currentTarget.textContent);
    }

    return (
    <>
      <Helmet>
        <title>Commands | Tokyo </title>
      </Helmet>

        <div className="main-wrapper commands">
            <div className="selector-wrapper">
                <div className={(sectionToShow==="Affection")? "category selected-category" : "category"} onClick={changeSection}>Affection</div>
                <div className={(sectionToShow==="Economy")? "category selected-category" : "category"} onClick={changeSection}>Economy</div>
                <div className={(sectionToShow==="Statistics")? "category selected-category" : "category"} onClick={changeSection}>Statistics</div>
{/*                 <div className={(sectionToShow==="Logs")? "category selected-category" : "category"} onClick={changeSection}>Logs</div> */}
                <div className={(sectionToShow==="Manacube")? "category selected-category" : "category"} onClick={changeSection}>Manacube</div>
            </div>

            <div className="command-wrapper">
                {
                    ((sectionToShow==="Affection") && 
                    <>
                    <CommandPreview usage="hug [user]" description="Hug a user!"/>
                    <CommandPreview usage="stab [user]" description="Stab a user!"/>
                    <CommandPreview usage="punch [user]" description="Punch a user!"/>
                    <CommandPreview usage="slap [user]" description="Slap a user!"/>
                    <CommandPreview usage="kiss [user]" description="Kiss a user!"/>
                    </>
                    )
                    ||
                    ((sectionToShow==="Economy") && 
                    <>
                    <CommandPreview usage="balance" description="View your cash balance"/>
                    <CommandPreview usage="daily " description="Claim daily cash reward"/>
                    <CommandPreview usage="coinflip [bet]" description="Flip a coin"/>
                    <CommandPreview usage="tip [amount] [user]" description="Tip a user"/>
                    </>
                    )
                    ||
                    ((sectionToShow==="Statistics") && 
                    <>
                    <CommandPreview usage="leaderboard" description="View your servers cash leaderboard"/>
                    <CommandPreview usage="stats [category] [user]" description="View a users statistics"/>
                    </>
                    )
                    ||
                    ((sectionToShow==="Manacube") && 
                    <>
                    <CommandPreview usage="cubits [name]" description="View a users cubits balance"/>
                    <CommandPreview usage="manalevel [name]" description="View a users ManaLevel"/>
                    <CommandPreview usage="guild [name]" description="View a users guild info"/>
                    <CommandPreview usage="guildtop" description="View the top guilds"/>
                    </>
                    )
                }
            </div>
        </div>
    </>
  );
}

export default Commands;