import React, { Component } from 'react'
import api from './api'

class Hair extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (<section>
						<img src={"http://localhost:8080/image/" + this.props.hairImage} width="500" height="500"/>
				</section>
		)
	}
}
export default Hair

