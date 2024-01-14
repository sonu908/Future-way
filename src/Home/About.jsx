/* eslint-disable react/no-unescaped-entities */
import { AcademicCapIcon, GlobeAltIcon, BuildingLibraryIcon, FlagIcon } from '@heroicons/react/20/solid'
import Form from './Form/Form'
import Connect from './Form/Connect'
import cover from '../assets/cover.png'


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
import Features from './Features/Features'

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

                <header className="fixed inset-x-0 top-0 z-50 sticky-header backdrop-filter backdrop-blur-sm" >
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

                            <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => scrollToSection(homeRef)}>
                                Home
                            </button>
                            <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => scrollToSection(aboutRef)}>
                                About Us
                            </button>
                            <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => scrollToSection(contactRef)}>
                                Contact
                            </button>

                        </div>

                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">THEFUTUREWAY</span>
                                    <p>THEFUTUREWAY</p>
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

                                        <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => {
                                                scrollToSection(homeRef);
                                                setMobileMenuOpen(false);
                                            }}>
                                            Home
                                        </button>
                                        <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => {
                                                scrollToSection(aboutRef)
                                                setMobileMenuOpen(false);
                                            }}>
                                            About Us
                                        </button>
                                        <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => {
                                                scrollToSection(contactRef)
                                                setMobileMenuOpen(false);
                                            }}>
                                            Contact
                                        </button>

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
                            <p className=" text-4xl font-lighter tracking-wider text-gray-900 sm:text-8xl font-tekosans">
                                THEFUTUREWAY                            </p>

                            <div className="mt-4 flex items-center justify-center gap-x-6">

                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
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
                        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl font-tekosans">About us</h1>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Welcome to Future Way Consultants, a leading immigration consultancy and services firm dedicated to guiding individuals towards pursuing higher education overseas. At Future Way, we believe in the transformative power of education and the endless possibilities it can unlock.
                        </p>
                    </div>

                    <div>

                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                            {posts.map((post) => (
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between hover:shadow-xl p-3 rounded-xl cursor-pointer">

                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 font-tekosans tracking-wider">

                                            <span className="absolute inset-0 " />
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
                        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl font-tekosans tracking-wider">
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
                                        <dt className=" tracking-wider font-semibold leading-7 text-gray-900 font-tekosans text-xl">
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
                <Features/>
            </div>



            {/* connect from */}
            <div>
                <div ref={contactRef} className="flex flex-col w-full lg:flex-row p-5">
                    <div className="grid flex-grow  card  rounded-box place-items-center"> <div
                        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        aria-hidden="true">
    
                    </div>
                        <Connect />
    
                    </div>
    
                    <div className="grid flex-grow  card  rounded-box place-items-center"> <Form /></div>
                </div>
            </div>
        </div>
    )


}

export default About