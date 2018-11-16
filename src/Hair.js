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


	render() {
		return (<section>
				{this.state.hairs.map((hair, index) => {
					return	<section key={index}>
						<img src={"http://localhost:8080/image" + hair.hairStyle}width="500" height="500"/>
					
					</section>
				})}


			</section>
		)
	}
}

export default Hair

