
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
      headImage: "/head1.png",
      hairImage: "/hair1.png",
      topImage: "/top1.png",
      bottomImage: "/bottom1.png"
    }
  }


render() {
	return (
		<main>
			<div className="heroImage">
				<Head className="head" headImage={this.state.headImage} />
				<Hair className="hair" hairImage={this.state.hairImage} />
				<Top className="top" topImage={this.state.topImage} />
				<Bottom className="bottom" bottomImage={this.state.bottomImage}/>
				<Hero />
			</div>
			<div className="selectionImages">
            	<Heads changeHeadImage={this.changeHeadImage} />
           		<Hairs changeHairImage={this.changeHairImage} />
            	<Tops changeTopImage={this.changeTopImage} />
            	<Bottoms changeBottomImage={this.changeBottomImage} />
            </div>
        </main>
	)
}

changeHeadImage=(headImage)=>{
		this.setState({headImage:[headImage]})
	}

changeHairImage=(hairImage)=>{
		this.setState({hairImage:[hairImage]})
	}

changeTopImage=(topImage)=>{
		this.setState({topImage:[topImage]})
	}

changeBottomImage=(bottomImage)=>{
		this.setState({bottomImage:[bottomImage]})
	}

}
export default Main