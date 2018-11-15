import React, { Component } from 'react'
import api from './api'

class Hair extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hairs: []
		}
	}

	getHair = (hairNumber) => {
		api(`http://localhost:8080/api/hairs/${hairNumber}`).then(hair => {
			const newHair = this.state.hairs
			newHair.push(hair)
			this.setState({hairs: newHair})
		})
	}

	getHairs = () => {
		api(`http://localhost:8080/api/hairs`).then(hairs => {
			const newHairs = this.state.hairs
			hairs.forEach(hair => newHairs.push(hair))
			this.setState({hairs: newHairs})
		})
	}

	componentDidMount() {
		this.getHair()
	}

		changeImageForwards = () =>{
		const add = 1
		this.getHair(this.hairNumber + add)
	}

		changeImageBackwards = () =>{
		const add = 1
		this.getHair(this.hairNumber - add)
	}

	render() {
		return (<section>
			<button onClick={this.changeImageBackwards}>  &#8672; </button>
				{this.state.hairs.map((hair, index) => 
					<section key={index}>
						<img src="{hair.hairStyle}"/>
					
					</section>
				)}
			<button onClick={this.changeImageForwards}> &#8674; </button>

			</section>
		)
	}
}

export default Hair