/* eslint-disable no-console */
import 'dotenv/config'
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface SubmissionBody {
	name?: string
	email?: string
	phone?: string
	message?: string
}

const transporter = nodemailer.createTransport({
	auth: {
		pass: process.env.emailPassword,
		user: process.env.emailSender
	},
	service: 'gmail'
})

const submission = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	let finished = false
	let success = false
	const { name, email, phone, message }: SubmissionBody = req.body

	const mailOptions = {
		from: 'jmelegalserver@gmail.com',
		subject: 'New customer information',
		text: `Name: ${name} \nEmail: ${email} \nPhone Number: ${phone} \nMessage: ${message}`,
		to: 'waddellnathan1211@gmail.com'
	}

	console.log('env: ', process.env.emailPassword, process.env.emailSender)
	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log('something went wrong sending the email: ', err)
			finished = true
			success = false
		} else {
			console.log('success sending the email: ', info)
			finished = true
			success = true
		}

		if (finished) res.send({ success })
	})
}

export default submission
