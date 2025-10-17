"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <footer className="cs_footer cs_style_1 cs_type_1 cs_bg_filed cs_heading_bg" data-background="/assets/img/footer_bg_2.jpg">
        <div className="container">
          <div className="cs_footer_top">
            <ul className="cs_footer_contact_info_list cs_mp_0">
              <li>
                <div className="cs_accent_color">
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.5145 31.9595C38.4909 30.8937 37.2562 30.3238 35.9477 30.3238C34.6497 30.3238 33.4045 30.8831 32.3386 31.949L29.0039 35.2731C28.7295 35.1254 28.4552 34.9882 28.1914 34.851C27.8114 34.6611 27.4527 34.4817 27.1466 34.2917C24.023 32.3078 21.1843 29.7223 18.4616 26.3771C17.1425 24.7097 16.2561 23.3062 15.6124 21.8816C16.4777 21.0901 17.2797 20.267 18.0606 19.4755C18.3561 19.18 18.6516 18.874 18.9471 18.5785C21.1632 16.3624 21.1632 13.4921 18.9471 11.276L16.0661 8.39504C15.739 8.0679 15.4013 7.73021 15.0847 7.39252C14.4516 6.73824 13.7867 6.06286 13.1008 5.42969C12.0772 4.41662 10.853 3.87842 9.56559 3.87842C8.27814 3.87842 7.0329 4.41662 5.97762 5.42969L5.95651 5.45079L2.36855 9.07042C1.01778 10.4212 0.247425 12.0674 0.0785796 13.9775C-0.174689 17.0589 0.732856 19.9293 1.42934 21.8077C3.1389 26.4193 5.69269 30.6932 9.50227 35.2731C14.1244 40.7923 19.6858 45.1506 26.0386 48.2215C28.4657 49.3717 31.7055 50.733 35.3251 50.9652C35.5467 50.9758 35.7788 50.9863 35.9899 50.9863C38.4276 50.9863 40.4749 50.1104 42.0789 48.3692C42.0894 48.3481 42.1105 48.3375 42.1211 48.3164C42.6699 47.6516 43.303 47.0501 43.9678 46.4064C44.4216 45.9737 44.8859 45.5199 45.3397 45.0451C46.3845 43.9581 46.9332 42.6918 46.9332 41.3938C46.9332 40.0852 46.3739 38.8294 45.3081 37.7741L39.5145 31.9595ZM43.2925 43.0717C43.2819 43.0717 43.2819 43.0822 43.2925 43.0717C42.8809 43.5149 42.4588 43.9159 42.005 44.3591C41.3191 45.0134 40.6226 45.6993 39.9683 46.4697C38.9025 47.6094 37.6467 48.1476 36.0005 48.1476C35.8422 48.1476 35.6733 48.1476 35.515 48.137C32.3808 47.9365 29.4682 46.7124 27.2838 45.6677C21.3109 42.7762 16.0661 38.6711 11.7078 33.4686C8.10929 29.1314 5.70324 25.1213 4.10977 20.8157C3.12835 18.1881 2.76955 16.1408 2.92785 14.2097C3.03338 12.975 3.50825 11.9513 4.38414 11.0755L7.98266 7.47694C8.49975 6.99151 9.0485 6.72769 9.58669 6.72769C10.2515 6.72769 10.7897 7.1287 11.1274 7.46639L11.1591 7.49805C11.8028 8.09956 12.4149 8.72218 13.0586 9.387C13.3857 9.7247 13.7234 10.0624 14.0611 10.4106L16.942 13.2916C18.0606 14.4102 18.0606 15.4443 16.942 16.5629C16.636 16.869 16.3405 17.175 16.0345 17.4705C15.148 18.378 14.3038 19.2223 13.3857 20.0454C13.3646 20.0665 13.3435 20.077 13.3329 20.0981C12.4254 21.0057 12.5943 21.8921 12.7842 22.4936L12.8159 22.5886C13.5651 24.4037 14.6204 26.1133 16.2244 28.15L16.235 28.1605C19.1476 31.7485 22.2184 34.545 25.6059 36.6872C26.0386 36.9616 26.4818 37.1832 26.9039 37.3942C27.2838 37.5842 27.6426 37.7636 27.9486 37.9535C27.9908 37.9747 28.0331 38.0063 28.0753 38.0274C28.4341 38.2068 28.7718 38.2912 29.12 38.2912C29.9959 38.2912 30.5446 37.7425 30.724 37.5631L34.3331 33.954C34.6919 33.5952 35.2618 33.1626 35.9266 33.1626C36.5809 33.1626 37.1191 33.5741 37.4462 33.9329L37.4673 33.954L43.2819 39.7686C44.3689 40.845 44.3689 41.9531 43.2925 43.0717ZM27.02 12.88C29.7848 13.3443 32.2964 14.6529 34.3014 16.6579C36.3065 18.663 37.6045 21.1745 38.0794 23.9394C38.1954 24.6359 38.797 25.1213 39.4829 25.1213C39.5673 25.1213 39.6412 25.1107 39.7256 25.1002C40.5065 24.9736 41.0236 24.2349 40.897 23.4539C40.3271 20.1087 38.7442 17.0589 36.3276 14.6423C33.911 12.2257 30.8612 10.6428 27.516 10.0729C26.7351 9.94631 26.0069 10.4634 25.8697 11.2338C25.7325 12.0041 26.2391 12.7534 27.02 12.88ZM49.9408 23.0424C49.0016 17.5338 46.4056 12.5212 42.4166 8.53222C38.4276 4.54325 33.415 1.94725 27.9064 1.00805C27.1361 0.87086 26.4079 1.3985 26.2707 2.16886C26.1441 2.94977 26.6612 3.67792 27.4421 3.8151C32.3597 4.64878 36.8447 6.98096 40.4115 10.5373C43.9784 14.1041 46.3 18.5891 47.1337 23.5067C47.2498 24.2032 47.8513 24.6886 48.5372 24.6886C48.6217 24.6886 48.6955 24.6781 48.7799 24.6675C49.5503 24.5514 50.0779 23.8127 49.9408 23.0424Z"
                      fill="currentColor" />
                  </svg>
                </div>
                <div className="">
                  <h3 className="cs_fs_24 cs_semibold cs_white_color cs_mb_2">Call us 24/7</h3>
                  <p className="mb-0 cs_white_color"><a href="tel:+447776930794">+44 777 693 0794</a></p>
                </div>
              </li>
              <li>
                <div className="cs_accent_color">
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.966 6.03352C50.2097 4.89886 49.0973 3.94213 48.0122 4.35619L0.942346 22.3248C0.66561 22.4304 0.42741 22.6175 0.259174 22.8613C0.0909389 23.1051 0.000573882 23.3942 2.72431e-06 23.6904C-0.000568433 23.9866 0.0886811 24.2761 0.255975 24.5205C0.423269 24.765 0.660747 24.953 0.937073 25.0597L14.1599 30.1666V46.2517C14.1599 46.5813 14.271 46.9013 14.4753 47.1599C14.6797 47.4185 14.9653 47.6007 15.286 47.6769C15.6066 47.7531 15.9436 47.719 16.2425 47.58C16.5414 47.441 16.7846 47.2052 16.9329 46.9109L22.4017 36.0586L35.7477 45.9631C36.5595 46.5656 37.7264 46.1824 38.0218 45.2142C50.4825 4.35942 49.9438 6.13616 49.966 6.03352ZM38.3469 11.1817L15.4171 27.5115L5.55119 23.7012L38.3469 11.1817ZM17.0896 29.9171L37.0765 15.6831C19.878 33.8265 20.7762 32.8715 20.7012 32.9725C20.5898 33.1224 20.8951 32.5381 17.0896 40.0898V29.9171ZM35.8255 42.3726L24.078 33.6543L45.3191 11.2462L35.8255 42.3726Z"
                      fill="currentColor" />
                  </svg>
                </div>
                <div className="">
                  <h3 className="cs_fs_24 cs_semibold cs_white_color cs_mb_2">Subscribe</h3>
                  <p className="mb-0 cs_white_color">Sign Up for daily Update</p>
                </div>
              </li>
            </ul>
            <div className="cs_footer_newsletter cs_style_1">
              <form action="#" className="cs_footer_newsletter_form">
                <input type="text" placeholder="Enter Your Email" />
                <button className="cs_btn cs_style_1">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <div className="cs_text_widget">
                  <Image src="/assets/img/footer_logo_2.svg" alt="img" width={225} height={64}   />
                    <p>Phosfluorescently transform out-of-the-box paradigms whereas accurate supply chains. Continually</p>
                  </div>
                  {/* <div className="cs_social_btns cs_style_1">
                    <a href="#" className="cs_social_btn cs_center"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="cs_social_btn cs_center"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="cs_social_btn cs_center"><i className="bi bi-youtube"></i></a>
                    <a href="#" className="cs_social_btn cs_center"><i className="bi bi-facebook"></i></a>
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
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Recent Posts</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_recent_post_widget">
                    <li>
                      <div className="cs_recent_post">
                        <Link href="/blog/blog-details" className="cs_recent_post_thumb">
                        <Image src="/assets/img/recent_post_1.jpg" alt="img" width={80} height={80}   />
                        </Link>
                        <div className="cs_recent_post_right">
                          <h3 className="cs_white_color cs_fs_16 cs_medium cs_mb_5">
                            <Link href="/blog/blog-details">Your Car is Health, Our Priority</Link>
                          </h3>
                          <p className="cs_recent_posted_by cs_fs_14">
                          <i className="bi bi-calendar-fill"></i>12 May, 2024</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="cs_recent_post">
                        <Link href="/blog/blog-details" className="cs_recent_post_thumb">
                        <Image src="/assets/img/recent_post_2.jpg" alt="img" width={80} height={80}   />
                        </Link>
                        <div className="cs_recent_post_right">
                          <h3 className="cs_white_color cs_fs_16 cs_medium cs_mb_5">
                            <Link href="/blog/blog-details">The Tune-Up Your Car Deserves</Link>
                          </h3>
                          <p className="cs_recent_posted_by cs_fs_14">
                          <i className="bi bi-calendar-fill"></i>10 May, 2024</p>
                        </div>
                      </div>
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
                Copyright © 2024 <a href="#">Cripar</a>. All Rights Reserved.
              </div>
              <div>
              <Image src="/assets/img/payment_card.svg" alt="img" width={191} height={20}   />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer2;