/* eslint-disable react/no-unescaped-entities */
import { CheckIcon } from '@heroicons/react/20/solid'


const includedFeatures = [
    'Personalized guidance for your academic goals.',
    'Access to a global network of prestigious institutions.',
    'stress-free admissions.',
    '24x7 availability for your support and inquiries.',
]

function Connect() {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-tekosans">Contact US</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                Ready to embark on your educational journey? Contact us today, and let Future Way Consultants be your trusted partner in realizing your academic dreams.
            </p>

            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">

                <div className="p-8 sm:p-10 lg:flex-auto">
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Need assistance or have questions? Feel free to reach out to us. Our team is here to help you on your educational journey.
                    </p>
                    <button className="block mx-auto w-[100px] mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Let's Talk</button>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Why us?</h4>
                        <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                        {includedFeatures.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>)
}

export default Connect