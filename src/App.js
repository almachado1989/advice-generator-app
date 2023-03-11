import "./App.css"
import Card from "./components/Card"
import { useEffect, useState } from "react"

function App() {
  const [slipId, setSlipId] = useState(1)
  const [data, setData] = useState()
  const [className, setClassName] = useState("animate-in")

  function handleDiceClick() {
    setClassName("animate-out")
    setTimeout(() => setSlipId(Math.random() * 300), 250)
  }

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${slipId}`)
      .then((response) => {
        setClassName("animate-in")
        return response.json()
      })
      .then((result) => {
        console.log(result)
        if (result.message) {
          setSlipId(Math.random() * 200)
          return
        }
        setData(result)
      })
  }, [slipId])

  return (
    <div className="App">
      {data && (
        <Card
          data={data}
          handleDiceClick={handleDiceClick}
          className={className}
        />
      )}
    </div>
  )
}

export default App
