import React from 'react'
import AllUsers from './components/UserList/AllUsers'
import {Switch ,Route ,Redirect} from 'react-router-dom'
import Userprofile from './components/Userprofile/Userprofile'
const App = () => {
  return (
      <Switch>
        <Route path="/" exact render={()=> <Redirect to="/users"/>  }/>
        <Route path="/users" exact component={AllUsers}/>
        <Route path="/users/:id"  component={Userprofile}/>
      </Switch>
  )
}

export default App
