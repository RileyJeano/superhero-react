import React, { Component } from 'react'
import api from './api'

class Top extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tops: []
		}
	}

	getTop = (topNumber) => {
		api(`http://localhost:8080/api/tops/${topNumber}`).then(top => {
			const newTop = this.state.tops
			newTop.push(top)
			this.setState({tops: newTop})
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
		this.getTop()
	}

	changeImageForwards = () =>{
		const add = 1
		this.getTop(this.topNumber + add)
	}

		changeImageBackwards = () =>{
		const add = 1
		this.getTop(this.topNumber - add)
	}

	render() {
		return (<section>
			<button onClick={this.changeImageBackwards}>  &#8672; </button>
				{this.state.tops.map((top, index) => 
					<section key={index}>
						<img src="{top.top}"/>
					
					</section>
				)}
				<button onClick={this.changeImageForwards}> &#8674; </button>
			</section>
		)
	}
}

export default Top