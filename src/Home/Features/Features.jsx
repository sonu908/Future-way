import img1 from '../../assets/img1.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
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

function Features() {
    return (

        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">                    <div>
            <h2 className="text-3xl font-bold tracking-wider font-tekosans text-gray-900 sm:text-4xl">Why us?</h2>
            <p className="mt-4 text-gray-500">
                At Future Way Consultants, we stand out as the preferred choice for those seeking higher education due to our commitment to providing comprehensive guidance tailored to both global and local educational aspirations. Our seasoned professionals bring a wealth of expertise, ensuring a smooth and successful immigration process for those looking to study abroad or within India.                        </p>

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


    )
}

export default Features