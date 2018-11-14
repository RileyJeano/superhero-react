import React, { Component } from 'react'
import api from './api'

class Head extends Component {
	constructor(props) {
		super(props)
		this.state = {
			heads: []
		}
	}

	getHead = (id) => {
		api(`http://localhost:8080/api/heads/${id}`).then(head => {
			const newHeads = this.state.heads
			newHeads.push(head)
			this.setState({heads: newHeads})
		})
	}

	getHeads = () => {
		api(`http://localhost:8080/api/heads`).then(heads => {
			const newHeads = this.state.heads
			heads.forEach(head => newHeads.push(head))
			this.setState({heads: newHeads})
		})
	}

	componentDidMount() {
		this.getHeads()
	}

	render() {
		return (<section>
				{this.state.heads.map((head, index) => 
					<section key={index}>
						<h2>{head.head}</h2>
					
					</section>
				)}
			</section>
		)
	}
}

export default Head