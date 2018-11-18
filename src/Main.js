
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
      headImage: "/head1.png"
    }
  }


render() {
	return (
		<main>
			<div className="heroImage">
				<Head className="head" headImage={this.state.headImage} />
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

changeHeadImage=(headImage)=>{
this.setState({headImage:[headImage]})
}
}
export default Main