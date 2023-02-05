import '../Manacube.css'
import React from 'react'

function Manacube(props) {
    const displayName = props.name;
    const itemType = props.itemType.toLowerCase().replace("_", " ");
    var newItemType = itemType[0].toUpperCase();
    for(var i = 0; i<itemType.length; i++){
        if(itemType.charAt(i)===" "){
            newItemType += itemType.charAt(i+1).toUpperCase();
        }else{
            newItemType += itemType.charAt(i+1);
        }
    }

    return (
        <>
            <div className="sva">
                <div className="displayName">{displayName}</div>
                <div className="svaContent">
                    <div className={ Object.keys(props.enchants).length>0 ? "info-wrapper" : "info-wrapper enchants"}>
                        <strong>Enchants</strong>
                        <hr></hr>
                        {
                            Object.keys(props.enchants).length>0 
                            ?   Object.entries(props.enchants).map(([key, value]) => (
                                    <div key={key+value}>{key} {value}</div>
                                ))
                            :   "No Enchants"
                        }
                    </div>
                    <div className="info-wrapper">
                        <strong>Lore</strong>
                        <hr></hr>
                        {
                        Object.entries(props.lore).map(([key, value]) => (
                            <div key={key+value}>{value}</div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Manacube;