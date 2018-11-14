import React, { Component } from 'react'
import api from './api'

class Top extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tops: []
		}
	}

	getTop = (id) => {
		api(`http://localhost:8080/api/tops/${id}`).then(top => {
			const newTops = this.state.tops
			newTops.push(top)
			this.setState({tops: newTops})
		})
	}

	getTops = () => {
		api(`http://localhost:8080/api/tops`).then(tops => {
			const newTops = this.state.tops
			tops.forEach(top => newTops.push(top))
			this.setState({tops: newTops})
		})
	}

	componentDidMount() {
		this.getTops()
	}

	render() {
		return (<section>
				{this.state.tops.map((top, index) => 
					<section key={index}>
						<h2>{top.top}</h2>
					
					</section>
				)}
			</section>
		)
	}
}

export default Top