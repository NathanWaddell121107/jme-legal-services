import React from 'react'
import { CheckCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/solid'
import { NotificationType } from '../../types/notification'
import classNames from '../../utils/classname'

interface Props extends NotificationType {
	setNotification: (notification?: NotificationType) => void
}

const Notification: React.FC<Props> = ({ message, type, setNotification }) => {
	const isError = type === 'error'

	return (
		<div className="w-full flex justify-end">
			<div
				className={classNames(
					isError ? 'bg-red-50' : 'bg-green-50',
					'rounded-md p-4 md:max-w-[300px] md:mr-8'
				)}
			>
				<div className="flex">
					<div className="flex-shrink-0">
						{isError ? (
							<XCircleIcon
								className={classNames('text-red-400', 'h-5 w-5')}
								aria-hidden="true"
							/>
						) : (
							<CheckCircleIcon
								className={classNames('text-green-400', 'h-5 w-5')}
								aria-hidden="true"
							/>
						)}
					</div>
					<div className="ml-3">
						<p
							className={classNames(
								isError ? 'text-red-800' : 'text-green-800',
								'text-sm font-medium break-words'
							)}
						>
							{message}
						</p>
					</div>
					<div className="ml-auto pl-3">
						<div className="-mx-1.5 -my-1.5">
							<button
								type="button"
								onClick={() => setNotification()}
								className={classNames(
									isError
										? 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600'
										: 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600',
									'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2'
								)}
							>
								<span className="sr-only">Dismiss</span>
								<XIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Notification
