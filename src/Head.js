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

		changeImageForwards = () =>{
		console.log("forward Head")
		const add = 1
		this.getHead(this.headNumber + add)
	}

		changeImageBackwards = () =>{
		const add = 1
		console.log("backward Head")
		this.getHead(this.headNumber - add)
	}

	render() {
		return (<section>
				<button onClick={this.changeImageBackwards}>  &#8672; </button>
				
				{this.state.heads.map((head, index) => 
					<section key={index}>
						<img src="{head.head}"/>
					</section>
				)}
				<button onClick={this.changeImageForwards}> &#8674; </button>
			</section>
		)
	}
}

export default Head