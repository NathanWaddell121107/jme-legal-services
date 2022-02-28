import React from 'react'
import Footer from '../components/footer'
import Hero from '../components/hero'
import { Meta } from './Meta'

interface Props {
	title?: string
	description?: string
	image?: StaticImageData
}

const Layout: React.FC<Props> = ({ children, title, description, image }) => {
	return (
		<div>
			<Meta
				title="JME Legal Services, LLC"
				description="Local Arkansas Process Service. Increase your chances of a successful serve while
          receiving the professionalism and reliability you deserve"
			/>
			<Hero title={title} description={description} image={image} />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
