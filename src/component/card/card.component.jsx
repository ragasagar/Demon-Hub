import React from "react"
import "./card.style.css"

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.demon.id}?set=set2&size=180x180`} alt="demon" />
        <h2>{props.demon.name}</h2>
        <p>{props.demon.email}</p>
    </div>
)