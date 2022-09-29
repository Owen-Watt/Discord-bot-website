import '../style.css';
import './Commands.css'
import React  from 'react'

function commandPreview(props) {
   
  return (
    <>
      <div className="command">
        <div className="usage">/{props.usage}</div>
        <div className="description">{props.description}</div>
      </div>
    </>
  );
}

export default commandPreview;