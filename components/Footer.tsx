import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-wrapper float-left">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div>
              <div className="relative h-full w-full">
                <Image src="/images/footer-logo.png" alt="Logo" layout="responsive" width={1000} height={1000} className="object-cover"/>
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
                    <Link href="#" passHref>
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="footer-link-wrapper">
              <h5>Useful links</h5>
              <ul>
                <li>
                  <Link href="index.html" passHref>
                      <span><i className="fas fa-chevron-right"></i></span> Home
                  </Link>
                </li>
                <li>
                  <Link href="about.html" passHref>
                      <span><i className="fas fa-chevron-right"></i></span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="our-team.html" passHref>
                      <span><i className="fas fa-chevron-right"></i></span> Our Team
                  </Link>
                </li>
                <li>
                  <Link href="appointment.html" passHref>
                      <span><i className="fas fa-chevron-right"></i></span> Booking
                  </Link>
                </li>
                <li>
                  <Link href="contact.html" passHref>
                      <span><i className="fas fa-chevron-right"></i></span> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="footer-insta">
              <h5>Instagram post</h5>
              <ul>
                <li>
                  <Link href="#" passHref>
                      <Image src="/images/insta-blog1.png" alt="Instagram post" width={100} height={100} />
                      <span><i className="fab fa-instagram"></i></span>
                  </Link>
                  <Link href="#" passHref>
                      <Image src="/images/insta-blog2.png" alt="Instagram post" width={100} height={100} />
                      <span><i className="fab fa-instagram"></i></span>
                  </Link>
                  <Link href="#" passHref>
                      <Image src="/images/insta-blog3.png" alt="Instagram post" width={100} height={100} />
                      <span><i className="fab fa-instagram"></i></span>
                  </Link>
                  <Link href="#" passHref>
                      <Image src="/images/insta-blog4.png" alt="Instagram post" width={100} height={100} />
                      <span><i className="fab fa-instagram"></i></span>
                  </Link>
                  <Link href="#" passHref>
                      <Image src="/images/insta-blog5.png" alt="Instagram post" width={100} height={100} />
                      <span><i className="fab fa-instagram"></i></span>
                  </Link>
                  <Link href="#" passHref>
                      <Image src="/images/insta-blog6.png" alt="Instagram post" width={100} height={100} />
                      <span><i className="fab fa-instagram"></i></span>
                  </Link>
                </li>
                {/* Add other Instagram posts */}
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="footer-contact">
              <h5>Contact Info</h5>
              <ul>
                <li>
                  <div className="address-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="address-content">
                    <Link href="#" passHref>
                        <span>Address</span>
                        121 Waldeck Street, NY, USA
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="address-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="address-content">
                    <Link href="#" passHref>
                        <span>PHONE</span>
                        0800-123456, 0800-123489
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="address-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="address-content">
                    <Link href="#" passHref>
                        <span>EMAIL</span>
                        nailsalon@example.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>
            Copyright © {new Date().getFullYear()} Nail Salon Template Designed By{' '}
            <Link href="#" passHref>
              Webstrot
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
