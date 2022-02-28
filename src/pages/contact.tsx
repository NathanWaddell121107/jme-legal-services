import React from 'react'
import MainImage from '../../public/assets/images/contact-image.jpg'
import Layout from '../layout'

const Contact: React.FC = () => {
	return (
		<Layout
			title="Contact us"
			description="Contact JME Legal Services today to get started!"
			image={MainImage}
		></Layout>
	)
}

export default Contact
