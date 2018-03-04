import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Game} from './components'


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Game} />
      </Switch>
    </div>
  )
}

export default App
