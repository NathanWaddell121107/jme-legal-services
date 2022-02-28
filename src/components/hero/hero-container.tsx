import React from 'react'
import Hero from './hero'

interface Props {
	title?: string
	description?: string
	image?: StaticImageData
}

const HeroContainer: React.FC<Props> = ({ title, description, image }) => {
	return <Hero title={title} description={description} image={image} />
}

export default HeroContainer
