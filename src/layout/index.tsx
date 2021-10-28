import React from 'react'
import { Meta } from './Meta'

const Layout: React.FC = ({ children }) => {
	return (
		<div>
			<Meta
				title="JME Legal Services"
				description="Local Arkansas Process Service. Increase your chances of a successful serve while
          receiving the professionalism and reliability you deserve"
			/>
			{children}
		</div>
	)
}

export default Layout
