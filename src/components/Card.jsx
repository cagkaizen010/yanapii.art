import React from "react"

function redirectToImage(props) {

}

function Card(props) {
return (
<div className="card">
    <a  href={props.imgSrc}><img src={props.imgSrc}/></a>
     {/* <a  href={props.imgSrc}>faggot</a> */}
</div>
);
}

export default Card