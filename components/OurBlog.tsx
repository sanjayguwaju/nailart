import Image from 'next/image';
import Link from 'next/link';

const OurBlog = () => {
  return (
    <div className="bg-white text-black">
      <div className="container">
            <div className="blog-head">
              <h3 className="text-lg uppercase font-bold" >OUR BLOG</h3>
            </div>
          </div>
        <div className="flex space-x-4">
          <div className="col-span-1 bg-gradient-to-r from-purple-500 to-pink-500 px-2">
            <div>
              <div>
                <Image src="/images/staff-1.png" alt="img" width={200} height={200}/>
              </div>
              <div className="blog-name">
                <div className="blog-content">
                  <p>27 April 2023</p>
                  <h5>
                    <Link href="blog-detail.html">Ultra Glam Gold Nail Polishes for Holiday.</Link>
                  </h5>
                  <a href="blog-detail.html" className="read-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-red-500">
            <div className="blog-box-wrapper animated wow fade-box">
              <div className="blog-img">
                <Image src="/images/staff-2-next.png" alt="img" width={200} height={200}/>
              </div>
              <div className="blog-name">
                <div className="blog-content">
                  <p>22 April 2023</p>
                  <h5>
                    <Link href="blog-detail.html">Coronavirus: Confused picture over beauty salon openings</Link>
                  </h5>
                  <Link href="blog-detail.html" className="read-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="blog-box-wrapper animated wow fade-box">
              <div className="blog-img">
                <Image src="/images/staff-3.png" alt="img" width={200} height={200}/>
              </div>
              <div className="blog-name">
                <div className="blog-content">
                  <p>24 April 2023</p>
                  <h5>
                    <Link href="blog-detail.html">Hair salon meets clothing boutique at new Lehigh</Link>
                  </h5>
                  <Link href="blog-detail.html" className="read-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default OurBlog;
