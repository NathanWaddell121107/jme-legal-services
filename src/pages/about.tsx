import React from 'react'
import MainImage from '../../public/assets/images/about-image.jpg'
import Layout from '../layout'

const About: React.FC = () => {
	return (
		<Layout
			title="About us"
			description="JME Legal Services is here to help you with all your process
            serving needs. We provide fast, dependable, and professional
            service. Contact us today to get started!"
			image={MainImage}
		></Layout>
	)
}

export default About
