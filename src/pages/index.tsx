import React from 'react'
import MainImage from '../../public/assets/images/main-image.jpg'
import Features from '../components/features'
import Layout from '../layout'

const Index: React.FC = () => {
	return (
		<Layout
			title="JME Legal Services"
			description="JME Legal Services is here to help you with all your process
		serving needs. We provide fast, dependable, and professional
		service. Contact us today to get started!"
			image={MainImage}
		>
			<Features />
		</Layout>
	)
}

export default Index
