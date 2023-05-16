import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ContactDep1 from "./contactDep1"
import ContactDep2 from "./contactDep2"

const Contacts = () => {
  return (<>
    <h2>Contacts</h2>
    <ul>
      <li><Link to='/contacts/dep1'>Contact Dep 1</Link></li>
      <li><Link to='/contacts/dep2'>Contact Dep 2</Link></li>
    </ul>
    <Route path="/contacts/dep1" component={ContactDep1} />
    <Route path="/contacts/dep2" component={ContactDep2} />
  </>)
}
 
export default Contacts