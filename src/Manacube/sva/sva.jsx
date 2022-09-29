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
                    <div className="info-wrapper">
                        <strong>Info</strong>
                        <hr></hr>
                        <div className="manacube-info">{newItemType}</div>
                        <div className="manacube-info"></div>
                        <div className="manacube-info"></div>
                        <div className="manacube-info"></div>
                    </div>
                    <div className="info-wrapper">
                        <strong>Enchants</strong>
                        <hr></hr>
                    {
                        Object.entries(props.enchants).map(([key, value]) => (
                            <div>{key} {value}</div>
                        ))
                    }
                    </div>
                    <div className="info-wrapper">
                        <strong>Lore</strong>
                        <hr></hr>
                        {
                        Object.entries(props.lore).map(([key, value]) => (
                            <div>{value}</div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Manacube;