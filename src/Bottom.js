import React, { Component } from 'react'
import api from './api'

class Bottom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bottoms: []
		}
	}

	getBottom = (bottomNumber) => {
		api(`http://localhost:8080/api/bottoms/${bottomNumber}`).then(bottom => {
			const newBottom = this.state.bottoms
			newBottom.push(bottom)
			this.setState({bottoms: newBottom})
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
			
				{this.state.bottoms.map((bottom, index) => {
					return <section key={index}>
						<img src="{bottom.bottom}"/>
					
					</section>
				})}
	
			</section>
		)
	}
}

export default Bottom