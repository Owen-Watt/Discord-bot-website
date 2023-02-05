import '../style.css';
import './Manacube.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SVA from './sva/sva'
import { Helmet } from "react-helmet";

function Manacube() {
    const [content, setContent] = useState(null)
    const [itemsDisplayed, setItemsDisplayed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gamemode, setGamemode] = useState("survival")
    const [error, setError] = useState(false);

    useEffect(() => {
        const nonDuplicates = []; // using to avoid duplicates
        const usedItemNames = []; // using to avoid duplicates
        axios.get(`https://api.manacube.com/api/svas/${gamemode}`).then((response) => {
            var data = response.data
            setItemsDisplayed([]) // resetting displayed for production as it stacks items on reload otherwise
            data.forEach((sva) => {
                if(!usedItemNames.includes(sva.itemType)){
                    nonDuplicates.push(sva);
                    usedItemNames.push(sva.itemType)
                    setItemsDisplayed((itemsDisplayed) => [...itemsDisplayed, sva]);
                }
            })
            setContent(nonDuplicates)
            setLoading(false)
        })
    }, [gamemode])

    const handleServer = e => {
        e.preventDefault();
        setItemsDisplayed([]);
        setLoading(true);
        const server = e.target.value;
        const allowedServers = ["survival", "kitpvp", "earth", "skyblock", "islands", "parkour"]
        // if the option selected is not in our allowed servers we end the input
        if(!allowedServers.includes(server)){
            setError(true);
            return;
        }else{
            setError(false);
        }; 

        setGamemode(server)
    }
    const handleSearch = e => {
        e.preventDefault();
        setItemsDisplayed([]);
        const query = e.target.value.toLowerCase();

        content.map((sva) => {
            var displayName = "";
            var lore = [];  
            // getting the displayname or itemtype if displayname doesnt exist
            sva.displayName ? displayName=sva.displayName : displayName = sva.itemType
            displayName = displayName
            .replace(/\u00A7[0-9A-FK-OR]/ig, "") // removing minecraft unicode color codes
            .replace(/&[a-z0-9]/ig, "")  // removing minecraft codes like '&b' pr '&4'
            .replace(/#[a-z0-9]{6}/ig, "") // removing hex code  

            //getting the sva lore and replacing color codes
            Object.entries(sva.lore).map(([key, value]) => (
                lore.push(value
                    .replace(/\u00A7[0-9A-FK-OR]/ig, "") // removing minecraft unicode color codes
                    .replace(/&[a-z0-9]/ig, "")  // removing minecraft codes like '&b' pr '&4'
                    .replace(/#[a-z0-9]{6}/ig, "") // removing hex code 
                ) 
            ))
            
            if(displayName.toLowerCase().includes(query)){
                setItemsDisplayed((itemsDisplayed) => [...itemsDisplayed, sva]);
            }
            return false;
        }, [])
    };

    return (
        <>
            <Helmet>
                <title>Manacube | Tokyo </title>
            </Helmet>
            <div className="main-wrapper gamemode">
                <div className="search-wrapper">
                    <form className='search-form'>
                        <label className="select" htmlFor="select">
                            <select id="select" required="required" onChange={handleServer} defaultValue="Survival">
                                <option value="survival">Survival</option>
                                <option value="earth">Earth</option>
                                <option value="kitpvp">KitPvP</option>
                                <option value="skyblock">Skyblock</option>
                                <option value="islands">Islands</option>
                                <option value="parkour">Parkour</option>
                            </select>
                        </label>
                        <input type="text" className="searchPlayer" name="search" placeholder="Search..." autoComplete='off' onChange={handleSearch}/>
                    </form>
                </div>
                {
                    error
                    ? <div className="noItems">That server doesn't exist.</div>
                    : null
                }
                {
                    loading && !error
                    ? <div className="loader"></div>
                    :   <>
                            <div className="noItems">Showing {itemsDisplayed.length} items</div>
                        </>
                }
                <div className='sva-container'>
                {
                    loading && !error
                    ? <div className="loader"></div>
                    : itemsDisplayed.map((sva, index) => {
                        var displayName = "";
                        var lore = [];  
                        // getting the displayname or itemtype if displayname doesnt exist
                        sva.displayName ? displayName=sva.displayName : displayName = sva.itemType
                        displayName = displayName
                        .replace(/\u00A7[0-9A-FK-OR]/ig, "") // removing minecraft unicode color codes
                        .replace(/&[a-z0-9]/ig, "")  // removing minecraft codes like '&b' pr '&4'
                        .replace(/#[a-z0-9]{6}/ig, "") // removing hex code  
            
                        //getting the sva lore and replacing color codes
                        Object.entries(sva.lore).map(([key, value]) => (
                            lore.push(value
                                .replace(/\u00A7[0-9A-FK-OR]/ig, "") // removing minecraft unicode color codes
                                .replace(/&[a-z0-9]/ig, "")  // removing minecraft codes like '&b' pr '&4'
                                .replace(/#[a-z0-9]{6}/ig, "") // removing hex code 
                            ) 
                        ))
                        return <SVA key={index} name={displayName} itemType={sva.material} unbreakable={sva.unbreakable} enchants={sva.enchants} originalOwner={sva.originalOwner} lore={lore}/>
                    })
                }
                </div>
            </div>
        </>
    );
}

export default Manacube;
