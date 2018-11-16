import React, { Component } from 'react'
import api from './api'

class Heads extends Component {
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
						<img src={"http://localhost:8080/image" + head.head} width="150" height="150"/>
					</section>)
				})}
			</section>
		)
	}
}

export default Heads

