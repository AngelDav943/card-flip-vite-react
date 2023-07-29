import React, {useState} from 'react';
import { useId } from 'react';
var count = 0

export default function(props) {
    count = count + 0.5

    console.log(document.querySelectorAll(".card").length)
    const current = useId()
    var [deg, setDeg] = useState(180)
    const spin = function(event) {
        setDeg(deg + 180)
        var card = document.getElementById(current)

        var front = card.querySelector(".face.front")
        var back = card.querySelector(".face.back")

        front.style.transform = "perspective(600px) rotateY("+deg+"deg)"
        back.style.transform = "perspective(600px) rotateY("+ (deg-180)+"deg)"
    }

    return (
        <div className="card" id={current}  onClick={spin}>
            <div className="face front">
                <div className="image">
                    <img src={"src/assets/" + props.src} alt="IMAGE" />
                </div>
                <div className="info">
                    <div className="top">
                        <p>{props.name}</p>
                    </div>
                    <div className="data">
                        <p>Strength: {props.strength}</p>
                        <p>Speed: {props.speed}</p>
                    </div>
                </div>
            </div>
            <div className="face back">
                <p>"{props.description}"</p>
                <img src={"src/assets/" + props.src} alt="IMAGE" />
            </div>
        </div>
    )
}