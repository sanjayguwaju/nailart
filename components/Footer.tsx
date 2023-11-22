import Image from 'next/image';
import Link from 'next/link';
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
      <div className="bg-[#222222] text-white">
        <div className="px-20 py-20 grid grid-cols-4 gap-3">
          <div className="col-span-1 px-2">
            <div>
              <div>
                <Image src="/images/footer-logo.png" alt="Logo"  width={200} height={200} />
              </div>
              <div className="footer-pera">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry standard dummy text ever since.
                </p>
              </div>
              <div className="footer-icon">
                <ul className="flex space-x-4">
                  <li>
                    <br />
                    <Link href="#" passHref>
                      <SiFacebook />
                    </Link>
                  </li>
                  <li>
                    <br />
                    <Link href="#" passHref>
                    <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <br />
                    <Link href="#" passHref>
                    <FaWhatsapp />
                    </Link>
                  </li>
                  <li>
                    <br />
                    <Link href="#" passHref>
                      <FaTiktok/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h5 className='text-lg uppercase font-bold'>Useful links</h5>
              <ul>
                <li>
                  <Link href="index.html" passHref>
                    <span className="flex items-center"><IoIosArrowForward />Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="about.html" passHref>
                    <span className="flex items-center"><IoIosArrowForward />About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="our-team.html" passHref>
                    <span className="flex items-center"><IoIosArrowForward />Our Team</span>
                  </Link>
                </li>
                <li>
                  <Link href="appointment.html" passHref>
                    <span className="flex items-center"><IoIosArrowForward />Booking</span>
                  </Link>
                </li>
                <li>
                  <Link href="contact.html" passHref>
                    <span className="flex items-center"><IoIosArrowForward />Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="container mx-auto">
            <h5 className="text-lg uppercase font-bold">Instagram Post</h5>
              <ul className="grid grid-cols-3 gap-4">
                <li>
                  <Link href="#" className="block">
                    <Image src="/images/insta-blog1.png" alt="Instagram post" width={200} height={200} className="w-full h-auto" />
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block">
                    <Image src="/images/insta-blog2.png" alt="Instagram post" width={200} height={200}  className="w-full h-auto" />
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block">
                    <Image src="/images/insta-blog3.png" alt="Instagram post" width={200} height={200}  className="w-full h-auto" />
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block">
                    <Image src="/images/insta-blog4.png" alt="Instagram post" width={200} height={200}  className="w-full h-auto" />
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block">
                    <Image src="/images/insta-blog5.png" alt="Instagram post" width={200} height={200}  className="w-full h-auto" />
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block">
                    <Image src="/images/insta-blog6.png" alt="Instagram post" width={200} height={200}  className="w-full h-auto" />
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h5 className="text-lg uppercase font-bold">Contact Info</h5>
              <ul>
                <li>
                  <Link href="#" passHref>
                    <div className="flex items-center space-x-2">
                      <MdLocationOn /><span>Address:</span>
                    </div>
                    <p className='ml-5'>121 Waldeck Street, NY, USA</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <div className="flex items-center space-x-2">
                      <FaPhoneFlip /><span>Phone:</span>
                    </div>
                    <p className='ml-5'>0800-123456, 0800-123489</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <div className="flex items-center space-x-2">
                      <MdEmail /><span>Email:</span>
                    </div>
                    <p className='ml-5'>nailatasuki@example.com</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-gray-500 dark:text-gray-400 w-64 h-1" />
        <div className="flex justify-center">
          <p>
            Copyright © {new Date().getFullYear()} Nail Salon Template Designed By{' '}
            <Link href="#" passHref>
              Webstrot
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Footer;
