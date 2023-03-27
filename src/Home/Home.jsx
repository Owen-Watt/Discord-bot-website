import '../style.css';
import './Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import hugImage from '../images/hug.PNG'
import coinflipImage from '../images/coinflip.PNG'
import welcomeImage from '../images/Welcome.PNG'
import statsImage from '../images/stats.PNG'
import Feature from './Feature/Feature'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSackDollar, faChartLine, faCube, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const [statistics, setStatistics] = useState([{}]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://tokyobackend.fly.dev/api").then((response) =>{
      setStatistics(response.data.stats)
      setLoading(false)
    }).catch(err => {
      
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>Home | Tokyo </title>
      </Helmet>
      <div className="Home-wrapper">
          <div className="index-title">The Tokyo Discord Bot</div>
          <div className="index-description">
            Affection, economy and statistics and logs for your Discord server.
          </div>
          <section className="stats-wrapper">
            <div className="stat-box" >
                <i className=""></i>
                <span className="stats-num">{loading ? <div className="loader"></div> : statistics.guildCounter}</span>
                <span className="stats-text">Servers</span>
            </div>
            <div className="vertical-divider"></div>
            <div className="stat-box">
                <i className=""></i>
                <span className="stats-num">{loading ? <div className="loader"></div> : statistics.userCounter}</span>
                <span className="stats-text">Users</span>
            </div>
            <div className="vertical-divider"></div>
            <div className="stat-box">
                <i className=""></i>
                <span className="stats-num">{loading ? <div className="loader"></div> : statistics.commandCounter}</span>
                <span className="stats-text">Interactions</span>
            </div>
          </section>

          <div className="dashboard-button-wrapper">
            <Link to="/invite" className="dashboard-button discord-btn"><i className="fa-solid fa-plus link-logo"></i>Invite bot</Link>
            <a href='https://discord.gg/mACacV4eG8' className="dashboard-button support-btn"><i className="fa-brands fa-discord link-logo"></i>Support Server</a>
          </div>
          <FontAwesomeIcon icon={faChevronDown} style={{color: "White"}}  className="scroll-button"/>
      </div>
      <div className="feature-wrapper">
        <Feature 
          icon= {<FontAwesomeIcon icon={faHeart} style={{color: "red"}}/>}
          title="Affection" 
          text="Tokyo's simple slash commands allow you to easily show affection through Discord."
          image={hugImage}
        ></Feature>
        <Feature 
          icon= {<FontAwesomeIcon icon={faSackDollar} style={{color: "green"}}/>}
          title="Economy" 
          text="Tokyo has a simple economy that allows players to compete to be the richest. A daily cash reward and games like /coinflip, with more to come."
          image={coinflipImage}
          row="row-reverse"
        ></Feature>
        <Feature 
          icon= {<FontAwesomeIcon icon={faChartLine} style={{color: "white"}}/>}
          title="Statistics" 
          text="Tokyo keeps track of how well you're doing in games and how many times you give or receive a hug for example. You can view other users stats aswell."
          image={statsImage}
        ></Feature>
        <Feature 
          icon= {<FontAwesomeIcon icon={faCube} style={{color: "lightblue"}}/>}
          title="Logs" 
          text="Tokyo allows you to send Welcome and Leave messages on your server, you can add roles or send messages for either event!"
          image={welcomeImage}
          row="row-reverse"
        ></Feature>
      </div>
    </>
  );
}

export default Home;
