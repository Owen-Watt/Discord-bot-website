import '../style.css';
import React, { useEffect } from 'react'

function Home() {
   const inviteLink = 'https://discord.com/oauth2/authorize?client_id=795289659579957268&permissions=0&scope=applications.commands%20bot'
   /* 'https://discord.com/oauth2/authorize?client_id=795289659579957268&redirect_uri=https%3A%2F%2Ftokyobot.xyz%2&permissions=0&scope=applications.commands%20bot' */
   useEffect(() => {
    window.location.href = inviteLink;
   })
  return (
    <>
        <div className="main-wrapper">

        </div>
    </>
  );
}

export default Home;
