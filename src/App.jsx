import React from "react"
import { Title } from "./components/Title"
import { Buttons } from "./components/Buttons"
import socialData from './assets/socialData'

function App() {

  const newButtons = socialData.map(social => {
    return (
      <Buttons 
        name = {social.name}
        icon = {social.iconName}
        link = {social.link}
        color = {social.backgroundColor}
      />
    )
  })

  return (
    <div className='MainScreen'>

      <main className="MainScreen-card">

        <Title />
        {newButtons}

      </main>
      

    </div>
  )
}

export default App
