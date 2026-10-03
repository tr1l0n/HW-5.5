import { Component } from 'react'
import {Recipe} from './components/Recipe'
import recipces from './recipces.json'
export class App extends Component {
 
  render() {
    return (
      <>
        <Recipe recipcesMass={recipces} />
      </>
    )
  }
}

