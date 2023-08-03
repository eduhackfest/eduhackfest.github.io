import './style.scss';

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      <div className="PrizeIcon">
        {props.icon}
      </div>
      <h2 style={{textAlign: 'center'}}>{props.type}</h2>
      <p style={{textAlign: 'center'}}>{props.content}</p>
    </div>
  );
}

export {FirstPrize, PrizeHeading};
