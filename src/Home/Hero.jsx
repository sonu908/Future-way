/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

function Hero({ scrollToContact }) {
    return (
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            <div className='flex flex-col justify-start gap-4'>
                <p className="text-5xl font-lighter text-gray-900 sm:text-8xl mt-24 font-abrill-fatface">
                    my<span className='text-[#20B486] font-abrill-fatface'>future</span>way
                </p>
                <p className='py-2 mt-9 text-xl text-[#20B486] font-medium'>"A bright future begins here"</p>
                <p className='py-2 text-[12px] text-gray-600'>Welcome to myFutureWay Consultants! We specialize in guiding individuals toward higher education. 
                <br />
                <span className="text-[#20B486] text-sm">Connect with us and embark on a journey where your educational dreams become a reality.
                <br /> A bright future begins here at myFutureWay.</span>
                </p>
                <div className='bg-white'>

                    <button className='rounded-md border p-4 hover:bg-[#20B486] hover:text-white' onClick={scrollToContact}>
                        Contact us
                    </button>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1528980917907-8df7f48f6f2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="md:order-last order-first rounded-xl border border-[#20B486]" />
        </div>
    );
}

Hero.propTypes = {
    scrollToContact: PropTypes.func.isRequired,
};

export default Hero;
