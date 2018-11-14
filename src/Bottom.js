import React, { Component } from 'react'
import api from './api'

class Bottom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bottoms: []
		}
	}

	getBottom = (id) => {
		api(`http://localhost:8080/api/bottoms/${id}`).then(bottom => {
			const newBottoms = this.state.bottoms
			newBottoms.push(bottom)
			this.setState({bottoms: newBottoms})
		})
	}

	getBottoms = () => {
		api(`http://localhost:8080/api/bottoms`).then(bottoms => {
			const newBottoms = this.state.bottoms
			bottoms.forEach(bottom => newBottoms.push(bottom))
			this.setState({bottoms: newBottoms})
		})
	}

	componentDidMount() {
		this.getBottoms()
	}

	render() {
		return (<section>
				{this.state.bottoms.map((bottom, index) => 
					<section key={index}>
						<h2>{bottom.bottom}</h2>
					
					</section>
				)}
			</section>
		)
	}
}

export default Bottom