import React, { Component } from 'react'
import api from './api'

class Hair extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hairs: []
		}
	}

	getHair = (id) => {
		api(`http://localhost:8080/api/hairs/${id}`).then(hair => {
			const newHairs = this.state.hairs
			newHairs.push(hair)
			this.setState({hairs: newHairs})
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
		this.getHairs()
	}

	render() {
		return (<section>
				{this.state.hairs.map((hair, index) => 
					<section key={index}>
						<h2>{hair.hairStyle}</h2>
					
					</section>
				)}
			</section>
		)
	}
}

export default Hair