const featuresTwo = [
    {
        name: 'Global Network',
        description: 'Representing 450+ institutes worldwide, offering diverse academic programs for both local and international education.'
    },
    {
        name: 'Tailored Services',
        description: 'MyFutureWay provides personalized services, including visa assistance, extensions, and admissions, catering to individual needs.'
    },
    {
        name: 'Customized Counseling',
        description: 'Adopting a personalized approach, our one-on-one counseling sessions guide academic decisions for both national and international studies.'
    },
    {
        name: 'Empowering Success',
        description: 'Dedicated to domestic and global success, MyFutureWay empowers individuals with knowledge, support, and informed decision-making.'
    },
    {
        name: 'Inclusive Opportunities',
        description: 'MyFutureWay facilitates academic and career paths, fostering growth locally and internationally.'
    },
    {
        name: 'Expert Guidance',
        description: 'Expert counseling and support for navigating educational journeys, fostering success both nationally and internationally.'
    }
];
function Features() {
    return (

        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">                    <div>
            <h2 className="text-3xl font-bold tracking-wider font-tekosans  text-[#20B486] sm:text-4xl">Why us?</h2>
            <p className="mt-4 text-gray-500">
                At MyFutureWay Consultants, we stand out as the preferred choice for those seeking higher education due to our commitment to providing comprehensive guidance tailored to both global and local educational aspirations. Our seasoned professionals bring a wealth of expertise, ensuring a smooth and successful immigration process for those looking to study abroad or within India.                        </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {featuresTwo.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4 ">
                        <dt className="font-bold tracking-tighter text-gray-900 font-tekosan">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                    src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D'
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100 w-full h-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                    className="rounded-lg bg-gray-100 w-full h-full object-cover"
                />
                <img
                    src='https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2UlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D'
                    alt="Side of walnut card tray with card groove and recessed card area."
                    className="rounded-lg bg-gray-100 w-full h-full object-cover"
                />
                <img
                    src='https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGxlZ2UlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D'
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="rounded-lg bg-gray-100 w-full h-full object-cover"
                />
            </div>
        </div>


    )
}

export default Features