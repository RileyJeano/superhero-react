
import React, { Component } from 'react';
import Heads from './Heads'
import Hairs from './Hairs'
import Tops from './Tops'
import Bottoms from './Bottoms'
import Hero from './Hero'
import './Main.css'
import Head from './Head'
import Hair from './Hair'
import Top from './Top'
import Bottom from './Bottom'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      headId: 5
    }
  }


render() {
	return (
		<main>
			<div className="heroImage">
				<Head className="head" headId={this.state.headId} />
				<Hair className="hair" />
				<Top className="top" />
				<Bottom className="bottom" />
				<Hero />
			</div>
			<div className="selectionImages">
            	<Heads changeHeadImage={this.changeHeadImage} />
           		<Hairs />
            	<Tops />
            	<Bottoms />
            </div>
        </main>
	)
}

changeHeadImage=(headId)=>{
this.setState({headId})
}
}
export default Main