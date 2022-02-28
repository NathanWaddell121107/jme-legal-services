import React, { useState } from 'react'
import GetStartedForm from '../components/get-started-form'
import Notification from '../components/notification'
import Layout from '../layout'
import { NotificationType } from '../types/notification'

const GetStarted: React.FC = () => {
	// TODO: Might make sense to have this in context if we ever reuse it elsewhere
	const [notification, setNotification] = useState<NotificationType>()
	return (
		<Layout>
			{notification && notification.message && (
				<Notification
					type={notification.type}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}
			<GetStartedForm
				notification={notification}
				setNotification={setNotification}
			/>
		</Layout>
	)
}

export default GetStarted
