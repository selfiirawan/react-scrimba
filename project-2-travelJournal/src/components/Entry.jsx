import marker from "../assets/marker.png"

export default function Entry(prop) {
    return (
        <main>
            <div className="card">
                <img src={prop.img.src} alt={prop.img.alt} />

                <div className="content">
                    <img className="marker" src={ marker } alt="point marker" />
                    <span className="country">{prop.country}</span>
                    <a href={prop.googleMapsLink} target="_blank">View on Google Maps</a>

                    <h1>{prop.title}</h1>
                    <p className="date">{prop.dates}</p>
                    <p className="description">{prop.text}</p>
                </div>
            </div>
            <hr />
        </main>
    )
}