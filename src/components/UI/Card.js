import "./Card.css";

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div> //props.children -> used to wrap the data
}

export default Card;