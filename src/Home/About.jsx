/* eslint-disable react/no-unescaped-entities */
import { AcademicCapIcon, GlobeAltIcon, BuildingLibraryIcon, FlagIcon } from '@heroicons/react/20/solid'
import Form from './Form/Form'
import logo from '../assets/logo.png'


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
            'myFutureWay Consultants empowers ambitions by embracing global excellence, ensuring that our clients receive world-class education and professional growth opportunities.',
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
            'At myFutureWay Consultants, your educational journey is our expertise. We stand as dedicated partners, offering personalized guidance and unwavering support for a seamless and successful path ahead.',
        icon: FlagIcon,
    },
]
import { useState, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Features from './Features/Features'
import Hero from './Hero'

function About() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const Formref = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (

        <div >

            {/* nav */}
            <div ref={homeRef} className="bg-cover bg-center bg-no-repeat h-screen relative" >
                {/*  */}

                <header className="fixed inset-x-0 top-0 z-50 sticky-header backdrop-filter backdrop-blur-sm " >
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1 ">
                            <div className='h-12 flex items-center bg-[#e6d9b6] p-2 rounded-2xl'>
                                <img src={logo} alt="" className="h-full" />
                                <p className='font-abrill-fatface'>myfutureway</p>
                            </div>
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
                            <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#20B486] hover:"
                                onClick={() => scrollToSection(homeRef)}>
                                Home
                            </button>
                            <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#20B486] hover:"
                                onClick={() => scrollToSection(aboutRef)}>
                                About Us
                            </button>
                            <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#20B486] hover:"
                                onClick={() => scrollToSection(contactRef)}>
                                Contact
                            </button>
                        </div>

                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#e6d9b6] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="" className="-m-1.5 p-1.5 ">
                                    <span className="sr-only">MYFUTUREWAY</span>
                                    <p><img className='h-14' src={logo} alt="" /></p>
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
                                <div className="-my-6 divide-y divide-[#20B486] hover:0/10">
                                    <div className="space-y-2 py-6">

                                        <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#20B486] hover:"
                                            onClick={() => {
                                                scrollToSection(homeRef);
                                                setMobileMenuOpen(false);
                                            }}>
                                            Home
                                        </button>
                                        <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#20B486] hover:"
                                            onClick={() => {
                                                scrollToSection(aboutRef)
                                                setMobileMenuOpen(false);
                                            }}>
                                            About Us
                                        </button>
                                        <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#20B486] hover:"
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


                {/* hero */}

                <div className='w-full bg-white py-24 mt-24 mx-auto max-w-7xl px-6 lg:px-8' >
                    <Hero scrollToContact={scrollToContact} />
                </div>
            </div>


            {/* about us */}

            <div ref={aboutRef} className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <h1 className="text-5xl font-bold tracking-tight text-[#20B486] sm:text-4xl font-tekosans">About us</h1>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Welcome to MyFutureWay Consultants, a leading immigration consultancy and services firm dedicated to guiding individuals towards pursuing higher education overseas. At Future Way, we believe in the transformative power of education and the endless possibilities it can unlock.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.map((post) => (
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between hover:shadow-xl p-3 rounded-xl cursor-pointer">
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 font-tekosans tracking-wider ">

                                            <span className="absolute inset-0  " />
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
                        <p className="mt-2 text-3xl font-bold  text-[#20B486] sm:text-4xl font-tekosans tracking-wider">
                            Our Motto
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At MyFutureWay Consultants, our guiding principles are encapsulated in four core mottos. These mottos encapsulate our dedication to providing unparalleled services in the realm of higher education consultancy. Each motto reflects our commitment to excellence, fostering connections, and creating boundless opportunities for our clients. Our mission is to empower ambitions and embrace global excellence, ensuring that every individual's educational journey is met with personalized guidance and unwavering support.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-16">
                                        <dt className=" tracking-wider font-semibold leading-7 text-gray-900 font-tekosans text-xl">
                                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                                                <feature.icon className="h-6 w-6  text-[#20B486] " aria-hidden="true" />
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
                <Features />
            </div>

            {/* connect from */}
            <div ref={contactRef} className='w-full bg-white py-24 mt-24 mx-auto max-w-7xl px-6 lg:px-8' >

                <div className='w-full py-24'>
                    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                        <img src='https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="w-[650px] mx-auto rounded-3xl" />
                        <div>
                            <h1 className='py-2  text-3xl font-semibold'> <span className='text-[#20B486]'>Get in </span> Touch </h1>
                            <p className='py-2 text-lg text-gray-600'> Have questions or need assistance? We're here to help!<br></br> Reach out to us for personalized support and information about our consultancy services. <span className='text-[#20B486] font-bold'>Your future journey begins with a simple message.</span></p>
                            <button onClick={() => {
                                scrollToSection(Formref)

                            }} className='max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Connect</button>
                        </div>
                    </div>
                </div>
                <div ref={Formref} className="grid flex-grow  card  rounded-box place-items-center"> <Form /></div>
            </div>
        </div>
    )


}

export default About
