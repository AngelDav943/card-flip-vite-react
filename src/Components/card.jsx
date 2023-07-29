import React, {useState} from 'react';
var count = 0

export default function(props) {
    count = count + 0.5

    const current = count
    var [deg, setDeg] = useState(180)
    const spin = function(event) {
        setDeg(deg + 180)
        console.log(deg)
        var card = document.getElementById(current)

        var front = card.querySelector(".face.front")
        var back = card.querySelector(".face.back")

        front.style.transform = "perspective(600px) rotateY("+deg+"deg)"
        back.style.transform = "perspective(600px) rotateY("+ (deg-180)+"deg)"

        //card.classList.toggle("flip")
    }

    return (
        <div className="card" id={count}  onClick={spin}>
            <div className="face front">
                <div className="image">
                    <img src={"src/assets/" + props.src} alt="IMAGE" />
                </div>
                <div className="info">
                    <div className="top">
                        <p>{props.name}</p>
                        <span>{count}</span>
                    </div>
                    <div className="data">
                        <p>Strength: {props.strength}</p>
                        <p>Speed: {props.speed}</p>
                        <p>"{props.description}"</p>
                    </div>
                </div>
            </div>
            <div className="face back">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}