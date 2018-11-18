import React, { Component } from 'react'
import api from './api'

class Head extends Component {
	constructor(props) {
		super(props)
	
	}

	// getHead = (id) => {
	// 	api(`http://localhost:8080/api/heads/${id}`)
	// 		.then(head => {
	// 		const newHead = this.state.heads
	// 		newHead.push(head)
	// 		this.setState({heads: newHead})
	// 	})
	// }
	// componentDidMount() {
	// 	//should it be this.image or this.changeImage
	// 	this.getHead(this.props.headId)
	// }


	// componentDidUpdate() {
	// 	this.getHead(this.props.headId)
	// }


	// shouldComponentUpdate() {
	// 	this.getHead(this.props.headId)
	// }

	render() {
		return (<section>
						<img src={"http://localhost:8080/image/" + this.props.headImage} width="500" height="500"/>
				</section>
		)
	}
}

export default Head


