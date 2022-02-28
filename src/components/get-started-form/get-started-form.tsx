import React, { useEffect, useState } from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { NotificationType } from '../../types/notification'

interface Props {
	notification?: NotificationType
	setNotification: (notification: NotificationType) => void
}

const GetStartedForm: React.FC<Props> = ({ notification, setNotification }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')

	useEffect(() => {
		setTimeout(() => {
			setNotification({ message: '' })
		}, 10000)
	}, [notification, setNotification])

	const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formSubmission = {
			email,
			message,
			name,
			phone
		}

		const data = await fetch(`${window.location.origin}/api/submission`, {
			body: JSON.stringify(formSubmission),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST'
		})

		const result = await data.json()
		if (!result.success)
			setNotification({
				message:
					'There was an error submitting your information, please try again later',
				type: 'error'
			})
		else {
			setName('')
			setEmail('')
			setPhone('')
			setMessage('')
			setNotification({
				message:
					'Thanks! Your information was submitted and we will contact you soon',
				type: 'success'
			})
		}
	}

	return (
		<div className="relative bg-white">
			<div className="absolute inset-0">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
			</div>
			<div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
				<div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
					<div className="max-w-lg mx-auto">
						<h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
							Get in touch
						</h2>
						<p className="mt-3 text-lg leading-6 text-gray-500">
							Submit your contact information and a short message and we&apos;ll
							be in touch soon!
						</p>
						<dl className="mt-8 text-base text-gray-500">
							<div>
								<dt className="sr-only">Postal address</dt>
								<dd>
									<p>PO Box 2654</p>
									<p>Jonesboro, AR 72402</p>
								</dd>
							</div>
							<div className="mt-6">
								<dt className="sr-only">Phone number</dt>
								<dd className="flex">
									<PhoneIcon
										className="flex-shrink-0 h-6 w-6 text-gray-400"
										aria-hidden="true"
									/>
									<a
										href="tel:8702121466"
										className="ml-3 text-blue-500 hover:text-blue-700"
									>
										(870) 212-1466
									</a>
									<a
										href="tel:8703514508"
										className="ml-3 text-blue-500 hover:text-blue-700"
									>
										(870) 351-4508
									</a>
								</dd>
							</div>
							<div className="mt-3">
								<dt className="sr-only">Email</dt>
								<dd className="flex">
									<MailIcon
										className="flex-shrink-0 h-6 w-6 text-gray-400"
										aria-hidden="true"
									/>
									<a
										href="mailto:jmelegalservices@gmail.com"
										className="ml-3 text-blue-500 hover:text-blue-700"
									>
										jmelegalservices@gmail.com
									</a>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
					<div className="max-w-lg mx-auto lg:max-w-none">
						<form onSubmit={submitForm} className="grid grid-cols-1 gap-y-6">
							<div>
								<label htmlFor="full-name" className="sr-only">
									Full name
								</label>
								<input
									type="text"
									name="full-name"
									id="full-name"
									autoComplete="name"
									onChange={(e) => setName(e.target.value)}
									className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
									placeholder="Full name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
									placeholder="Email"
								/>
							</div>
							<div>
								<label htmlFor="phone" className="sr-only">
									Phone
								</label>
								<input
									type="text"
									name="phone"
									id="phone"
									autoComplete="tel"
									onChange={(e) => setPhone(e.target.value)}
									className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
									placeholder="Phone"
								/>
							</div>
							<div>
								<label htmlFor="message" className="sr-only">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
									placeholder="Message"
									onChange={(e) => setMessage(e.target.value)}
									defaultValue={''}
								/>
							</div>
							<div>
								<button
									type="submit"
									className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GetStartedForm
