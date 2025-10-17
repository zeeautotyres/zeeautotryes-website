"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div className='header-area2 header_nav_03'>
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_top_header">
        <div className="container-fluid">
          <div className="cs_top_header_in">

          <div className="cs_top_header_left">
              <ul className="cs_header_contact_list cs_mp_0">
                <li>
                <i className="bi bi-telephone-fill"></i>
                  <a href="tel:+447776930794">+44 777 693 0794</a>
                </li>
                <li>
                <i className="bi bi-envelope-fill"></i>
                  <a href="mailto:zeeautotyres@gmail.com">zeeautotyres@gmail.com</a>
                </li>
                <li>
                <i className="bi bi-geo-alt-fill"></i>
                  <span>416 Ealing Rd, Wembley HA0 1JQ</span>
                </li>
              </ul>
            </div>

            {/* <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links">
                  <a href="#" className="cs_social_btn cs_center">
                  <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                  <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                  <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                  <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">

            <div className="cs_main_header_left">
            <div className="cs_logo_wrap">
              <Link className="cs_site_branding" href="/">
                <Image src="/assets/img/logo.svg" alt="img" width={225} height={65}   />
              </Link>
              <div className="cs_logo_bg_shape cs_accent_color">
                  <svg width="509" height="141" viewBox="0 0 509 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74 0H487L508.5 70.5L473.5 141H74V0Z" fill="currentColor"/>
                    <path d="M54 141H472.5L488.5 70.5L443.5 0H54V141Z" fill="white"/>
                    <path d="M0 0H443L464.5 70.5L443 141H0V0Z" fill="currentColor"/>
                  </svg>
                  <Image src="/assets/img/logo_shape_pattern.svg" alt="img" width={412} height={141}   />
                </div>             
              </div>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_fs_18 cs_semibold cs_heading_color cs_heading_font">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
            <div className="solutek-btn2">
            <Link href="/contact" className="cs_btn cs_style_1">
                <span>Get a Quote</span>
                <i className="bi bi-arrow-right"></i>
                </Link>             
					  </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="cs_site_header_spacing_140"></div>
    </div>
    
  );
}
