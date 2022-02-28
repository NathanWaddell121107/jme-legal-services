import React from 'react'
import {
	GlobeAltIcon,
	LightningBoltIcon,
	ScaleIcon
} from '@heroicons/react/outline'

const features = [
	{
		description:
			'We provide fast, dependable, and professional legal services to businesses and individuals. We understand that legal issues can be stressful and time-consuming, so we work to resolve them as quickly and efficiently as possible.',
		icon: LightningBoltIcon,
		name: 'Fast, dependable, and professional'
	},
	{
		description:
			'Certified legal process servers to help you with your legal process serving needs.',
		icon: GlobeAltIcon,
		name: 'Certified Civil Process Servers'
	},
	{
		description:
			'13 yrs combined experience in Process Service, 30 yrs in Law Enforcement',
		icon: ScaleIcon,
		name: 'Experienced professionals you can count on'
	}
]

const Features: React.FC = () => {
	return (
		<div className="py-20 md:mt-20 mt-0 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						fast, dependable, professional service
					</p>
				</div>

				<div className="mt-20">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						{features.map((feature) => (
							<div key={feature.name} className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<feature.icon className="h-6 w-6" aria-hidden="true" />
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										{feature.name}
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}

export default Features
