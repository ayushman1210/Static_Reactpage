export default  function Game({name,img,type,company}) {
    return (
        <article className="contact-card">
            <img  src={img} />
            <h3>{name}</h3>
            <div className="info-group">
                <h1>🕹</h1>
                <p>{type}</p>
            </div>
            <div className="info-group">
               <h1>♠</h1>
                <p>{company}</p>
            </div>
        </article>
    )
}