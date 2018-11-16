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
		this.getTops()
	}


	render() {
		return (<section>

				{this.state.tops.map((top, index) => {
					return <section key={index}>
						<img src={"http://localhost:8080/image" + top.top} width="150" height="150"/>
					
					</section>
				})}
			
			</section>
		)
	}
}

export default Top