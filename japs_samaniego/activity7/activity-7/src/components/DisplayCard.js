function DisplayCard(props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                   <h5>{props.CardTitle}</h5>
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;