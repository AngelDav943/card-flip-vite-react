var count = 0

export default function(props) {
    count = count + 0.5
    return (
        <div className="card">
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
    )
}