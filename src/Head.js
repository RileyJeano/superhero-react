import React, { Component } from 'react'
import api from './api'

class Head extends Component {
	constructor(props) {
		super(props)
		this.state = {
			heads: []
		}
	}

	getHead = (headNumber) => {
		api(`http://localhost:8080/api/heads/${headNumber}`).then(head => {
			const newHead = this.state.heads
			newHead.push(head)
			this.setState({heads: newHead})
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
				
				{this.state.heads.map((head, index) => {
					return (<section key={index}>
						<img src="{head.head}"/>
					</section>)
				})}
			</section>
		)
	}
}

export default Head