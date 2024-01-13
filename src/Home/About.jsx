/* eslint-disable react/no-unescaped-entities */
import { AcademicCapIcon, GlobeAltIcon, BuildingLibraryIcon, FlagIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Form from './Form/Form'
import logo from '../assets/logo.jpg'
import cover from '../assets/cover.jpg'
import { CheckIcon } from '@heroicons/react/20/solid'

import img1 from '../assets/img1.jpg';
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
const includedFeatures = [
    'Personalized guidance for your academic goals.',
    'Access to a global network of prestigious institutions.',
    'stress-free admissions.',
    '24x7 availability for your support and inquiries.',
]
const featuresTwo = [
    {
        name: 'Holistic Domestic and Global Network',
        description: 'Pride in our global network representing over 450 prestigious educational institutes worldwide, Future Way Consultants extends its commitment to providing holistic consultancy services domestically in India. This ensures individuals have access to a diverse range of academic programs, whether they choose to pursue education within the country or explore international opportunities.'
    },
    {
        name: 'Comprehensive Domestic and International Services',
        description: 'Beyond visa assistance, Future Way Consultants offers a comprehensive suite of services, including Student Visas, Study Permit Extensions, and Onshore Student Admissions. Recognizing the diverse needs of individuals, our services cater to both domestic and global educational goals.'
    },
    {
        name: 'Personalized Approach',
        description: 'Acknowledging the uniqueness of each individual\'s educational journey, Future Way Consultants adopts a personalized approach. Our one-on-one counseling sessions provide guidance tailored to academic goals and preferences, whether planning to study within India or explore international education options.'
    },
    {
        name: 'Commitment to Domestic and Global Success',
        description: 'Committed to the success of clients both domestically and globally, Future Way Consultants empowers individuals with knowledge and support. As a dedicated partner, we facilitate informed decisions about education and career paths, irrespective of whether the choice is domestic or international.'
    }
]

const posts = [
    {
        id: 1,
        title: 'Personalized Guidance:'
        ,
        description: 'Receive personalized counseling sessions tailored to your academic goals and preferences, ensuring a well-informed decision-making process.',
    },
    {
        id: 2,
        title: 'Global Opportunities:'
        ,
        description: 'Explore a diverse range of international educational opportunities, gaining access to renowned institutions across the globe.',
    },
    {
        id: 3,
        title: 'Efficient Application Process:'
        ,
        description: 'Streamline the application process with our expert assistance, minimizing stress and maximizing the chances of successful admissions.',
    },
    {
        id: 6,
        title: 'Global Network of Educational Institutes:'
        ,
        description: 'Gain exposure to a vast network of over 450 prestigious educational institutes worldwide, offering a wide range of academic programs.',
    },
    {
        id: 8,
        title: 'Career Advancement Opportunities:'
        ,
        description: 'Elevate your career through higher education, unlocking opportunities for professional growth and advancement.',
    },
    {
        id: 9,
        title: 'Proven Success Record:'
        ,
        description: 'Rely on our track record of successful outcomes, with a focus on ensuring flourishing results for our clients.',
    }

]

const features = [
    {
        name: 'Navigating Dreams, Connecting Futures',
        description:
            'Our commitment is to guide individuals towards their dreams, forging connections that shape successful futures through quality higher education consultancy.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Empowering Ambitions, Embracing Global Excellence',
        description:
            'Future Way Consultants empowers ambitions by embracing global excellence, ensuring that our clients receive world-class education and professional growth opportunities.',
        icon: BuildingLibraryIcon,
    },
    {
        name: 'Beyond Borders, Boundless Opportunities',
        description:
            'We transcend borders to unlock boundless opportunities, providing comprehensive consultancy services that open doors to a world of educational and career possibilities.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Your Journey, Our Expertise',
        description:
            'At Future Way Consultants, your educational journey is our expertise. We stand as dedicated partners, offering personalized guidance and unwavering support for a seamless and successful path ahead.',
        icon: FlagIcon,
    },
]
import { useState, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home' },
    { name: 'About ' },
    { name: 'Contact' },
]
function About() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (

        <div >

            {/* nav */}
            <div ref={homeRef} className="bg-cover bg-center bg-no-repeat h-screen relative" style={{ backgroundImage: `url(${cover})` }}>
                {/*  */}

                <header className="fixed inset-x-0 top-0 z-50 sticky-header backdrop-filter backdrop-blur-md" >
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5 text-4xl font-bold">
                                logo

                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">

                            <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToSection(homeRef)}>
                                Home
                            </button>
                            <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToSection(aboutRef)}>
                                About Us
                            </button>
                            <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToSection(contactRef)}>
                                Contact
                            </button>

                        </div>

                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}

                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>



                {/* head */}
                <div className="relative isolate px-6 pt-14 lg:px-8">

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <p className=" text-4xl font-bold tracking-wider text-gray-900 sm:text-8xl font-tekosans">
                                FutureWay                            </p>

                            <div className="mt-4 flex items-center justify-center gap-x-6">

                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    A bright future begins here <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            {/* about us */}

            <div ref={aboutRef} className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</h1>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Welcome to Future Way Consultants, a leading immigration consultancy and services firm dedicated to guiding individuals towards pursuing higher education overseas. At Future Way, we believe in the transformative power of education and the endless possibilities it can unlock.
                        </p>
                    </div>

                    <div>

                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                            {posts.map((post) => (
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between hover:shadow-xl p-3 rounded-xl cursor-pointer">

                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                            <span className="absolute inset-0" />
                                            {post.title}

                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>

                                </article>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


            {/* what we do */}

            <div className="bg-white py-24 sm:py-32">
              
              
              
              
              
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Motto
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Future Way Consultants, our guiding principles are encapsulated in four core mottos. These mottos encapsulate our dedication to providing unparalleled services in the realm of higher education consultancy. Each motto reflects our commitment to excellence, fostering connections, and creating boundless opportunities for our clients. Our mission is to empower ambitions and embrace global excellence, ensuring that every individual's educational journey is met with personalized guidance and unwavering support.
                        </p>
                    </div>

                    <div>

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    </div>

                </div>

              
              
              
              
            </div>



            {/* what we do with pics */}
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">                    <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Future Way?</h2>
                    <p className="mt-4 text-gray-500">
                        At Future Way Consultants, we stand out as the preferred choice for those seeking higher education due to our commitment to providing comprehensive guidance tailored to both global and local educational aspirations. Our seasoned professionals bring a wealth of expertise, ensuring a smooth and successful immigration process for those looking to study abroad or within India.                        </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {featuresTwo.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src={img1}
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100 w-full h-full object-cover"
                        />
                        <img
                            src={img3}
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100 w-full h-full object-cover"
                        />
                        <img
                            src={img4}
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100 w-full h-full object-cover"
                        />
                        <img
                            src={img5}
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>



            {/* connect from */}
            <div ref={contactRef} className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card  rounded-box place-items-center"> <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >

                </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact US</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Ready to embark on your educational journey? Contact us today, and let Future Way Consultants be your trusted partner in realizing your academic dreams.
                        </p>
                    </div>

                </div>

                <div className="grid flex-grow  card  rounded-box place-items-center"> <Form /></div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Give Us a call</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Need assistance or have questions? Feel free to reach out to us. Our team is here to help you on your educational journey.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <button className="block mx-auto w-[100px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Call us</button>
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
                </div>
            </div>
        </div>
    )


}

export default About