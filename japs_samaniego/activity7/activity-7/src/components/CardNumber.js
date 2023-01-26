function CardNumber(props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.CardTitle}</h5>
                    <h1 className="card-subtitle mb-2 text-muted">{props.QueueNumber}</h1>
                    <p className="card-text">{props.CardText1}</p>
                    <p className="card-text">{props.CardText2}</p>
                </div>
            </div>
        </div>
    );
};

export default CardNumber;