function ValueCard({image, title, summary, description, value}) {
    return (
      <div className={"ValueCard " + value}>
        <div className="blob-container">
          <img src={image}></img>
        </div>
        

        <div className = "ValueCardText">
            <div className="ValueCardTitle">
                <p>{title}</p>
                <hr className="TitleHr"/>
            </div>
            <p className="ValueCardSummary">{summary}</p>
            <p className="ValueCardDescription">{description}</p>
        </div>

      </div>
    );
  }


export default ValueCard;
