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
			const newHead = this.state.heads
			newHead.push(head)
			this.setState({heads: newHead})
		})
	}


  changeImage = (image) => {
    this.setState({image})
  }


	componentDidMount() {
		//should it be this.image or this.changeImage
		this.getHead(this.changeImage)
	}

	render() {
		return (<section>
				
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



class App extends Component {
    constructor() {
    super()
    this.state = {
      isMain: true,
      location: ''
    }
  }
    toggleIsMain = () => {
    this.setState({isMain: !this.state.isMain})
  }

  changeLocation = (location) => {
    this.setState({location})
  }

  render() {
    return (
      <div className="App">
      <Header changeLocation={this.changeLocation} />
         <Container>
          {this.state.location === 'home'
   
  }       ? <Main />
          : this.state.location === 'hero'
          ? <Heroes />
          : <h2>This works now?</h2>}
        </Container>
      <Footer />
      </div>
    );
}

export default App;
