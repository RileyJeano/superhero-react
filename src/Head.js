import React, { Component } from 'react'
import api from './api'

class Head extends Component {
	constructor(props) {
		super(props)
		this.state = {
			heads: [],
			headId: props.headId
		}
	}

	getHead = (id) => {
		api(`http://localhost:8080/api/heads/${id}`).then(head => {
			const newHead = this.state.heads
			newHead.push(head)
			this.setState({heads: newHead})
		})
	}


	componentDidMount() {
		//should it be this.image or this.changeImage
		this.getHead(this.state.headId)
	}

	render() {
		return (<section>
				<p>{this.state.headId}</p>
				{this.state.heads.map((head, index) => {
					return (<section key={index}>
						<img src={"http://localhost:8080/image" + head.head} width="500" height="500"/>
					</section>)
				})}
			</section>
		)
	}
}

export default Head


