import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "../../utils/pathUtils";

const Footer1 = () => {
    return (
        <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src="assets/img/footer_bg.jpg">
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">About</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <div className="cs_text_widget">
                    <p>Zee Auto Tyres & Alignment - Your trusted local tyre specialists providing quality new & used tyres, wheel alignment, balancing and puncture repair services in Wembley.</p>
                  </div>
                  {/* <div className="cs_social_btns cs_style_1">
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
                  </div> */}
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Explore</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_menu">
                    <li>
                      <Link href="/service">New Tyres</Link>
                    </li>
                    <li>
                      <Link href="/service">Used Tyres</Link>
                    </li>
                    <li>
                      <Link href="/service">Wheel Alignment</Link>
                    </li>
                    <li>
                      <Link href="/service">Tyre Balancing</Link>
                    </li>
                    <li>
                      <Link href="/service">Puncture Repair</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contact Us</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                    <i className="bi bi-geo-alt-fill"></i>
                      416 Ealing Rd, Wembley HA0 1JQ
                    </li>
                    <li>
                    <i className="bi bi-telephone-fill"></i>
                      <a href="tel:+447776930794">+44 777 693 0794</a> <br/>
                      <a href="tel:+447578182552">+44 757 818 2552</a>
                    </li>
                    <li>
                    <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:zeeautotyres@gmail.com">zeeautotyres@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_working_hours">
                    <li>
                      <span>Mon - Sat</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright">
                Copyright © 2024 <a href="#">Zee Auto Tyres & Alignment</a>. All Rights Reserved.
              </div>
              <div>
              <Image src={getAssetPath("/assets/img/payment_card.svg")} alt="img" width={191} height={20}   />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer1;