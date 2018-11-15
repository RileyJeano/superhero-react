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
		this.getBottom()
	}

		changeImageForwards = () =>{
		const add = 1
		this.getBottom(this.bottomNumber + add)
	}

		changeImageBackwards = () =>{
		const add = 1
		this.getBottom(this.bottomNumber - add)
	}

	render() {
		return (<section>
			<button onClick={this.changeImageBackwards}>  &#8672; </button>
				{this.state.bottoms.map((bottom, index) => 
					<section key={index}>
						<img src="{bottom.bottom}"/>
					
					</section>
				)}
			<button onClick={this.changeImageForwards}> &#8674; </button>
			</section>
		)
	}
}

export default Bottom