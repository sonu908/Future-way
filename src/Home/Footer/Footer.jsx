import logo from '../../assets/logo.png'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="p-4  bg-[#e6d9b6] md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="#" className="flex justify-center gap-2 items-center text-2xl font-semibold text-black font-abrill-fatface">
          <img src={logo} className='h-8' alt="" />
          myfutureway
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">SRI KUMARAN MEDICALS, NEARBY POLICE STATIONS, KOZINJAMPARA, PALAKKAD 678555.</p>
        <ul className="flex flex-wrap justify-center gap-5 items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className=" text-[#8A826D]  mr-4 hover:underline md:mr-6 "><FaInstagram /></a>
          </li>
          <li>
            <a href="#" className="mr-4 text-[#8A826D]  hover:underline md:mr-6"><FaLinkedin /></a>
          </li>
          <li>
            <a href="#" className="mr-4 text-[#8A826D]  hover:underline md:mr-6 "><FaTwitter /></a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="#" className="hover:underline">myfutureway</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
