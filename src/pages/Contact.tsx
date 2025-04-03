import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

interface FormData {
    name: string;
    email: string;
    message: string;
    [key: string]: unknown;
}
const Contact: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

        emailjs.send(serviceID, templateID, data, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert("Message sent!");
                reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }
    return (
        <div className="max-w-2xl w-full px-6 mx-auto bg-gray-900 text-white p-8 rounded-xl shadow-lg mt-15">
            <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <label className="block text-gray-400 mb-1">Name:</label>
                <input
                    type="text"
                    placeholder="Your Name"
                    {...register('name', { required: true })}
                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-400 mb-1">Email:</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    {...register('email', { required: true })}
                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block text-gray-400 mb-1">Message:</label>
                <textarea
                    placeholder="Your Message"
                    {...register('message', { required: true })}
                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                />

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition duration-300 cursor-pointer"
                    >
                        Send
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Contact;