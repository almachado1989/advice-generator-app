export default function Card(props) {
  // function handleDiceClick() {
  //   props.setSlipId(Math.random() * 200)
  // }
  const className = props.className + " card"
  return (
    <div className={className}>
      <h2 className="card__title">ADVICE #{props.data.slip.id}</h2>
      <p className="card__text">{props.data.slip.advice}</p>

      <div className="divider">
        <img src="../images/pattern-divider-mobile.svg" alt="" />
      </div>
      <div onClick={props.handleDiceClick} className="dice">
        <img src="../images/icon-dice.svg" alt="" />
      </div>
    </div>
  )
}
