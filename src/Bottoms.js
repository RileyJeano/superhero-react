import React, { Component } from 'react'
import api from './api'

class Bottom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bottoms: []
		}
	}


	getBottoms = () => {
		api(`http://localhost:8080/api/bottoms`).then(bottoms => {
			const newBottoms = this.state.bottoms
			bottoms.forEach(bottom => newBottoms.push(bottom))
			this.setState({bottoms: newBottoms})
		})
	}

	componentDidMount() {
		this.getBottoms()
	}



	render() {
		return (<section>
			
				{this.state.bottoms.map((bottom, index) => {
					return <section key={index}>
						<img src={"http://localhost:8080/image" + bottom.bottom}width="150" height="150" onClick={() => this.props.changeBottomImage(bottom.bottom)}/>
					
					</section>
				})}
	
			</section>
		)
	}
}

export default Bottom

