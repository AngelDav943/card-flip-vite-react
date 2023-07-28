export default function(arg) {
    return <div className="testimony">
        <img src={arg.src}/>
        <div className="info">
            <p>{arg.name}</p>
            <p>{arg.job}</p>
            <p className="content">"{arg.content}"</p>
        </div>
    </div>
}