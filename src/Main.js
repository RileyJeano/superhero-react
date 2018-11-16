import React from 'react'

import Heads from './Heads'
import Hairs from './Hairs'
import Tops from './Tops'
import Bottoms from './Bottoms'
import Hero from './Hero'
import './Main.css'


const Main = () => {
	return (
		<main>
			<div className="heroImage">
				<Hero />
			</div>
			<div className="selectionImages">
            	<Heads />
           		<Hairs />
            	<Tops />
            	<Bottoms />
            </div>
        </main>
	)
}

export default Main