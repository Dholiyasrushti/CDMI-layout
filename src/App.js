import './App.css';
import logoimg from './image/mainlogo.svg';
import footerlogo from './image/footerlogo.svg';
import { FaHandPointRight, FaUniversity  } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaCertificate,FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp,FaStar,FaRegStarHalfStroke, FaArrowRightLong } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { FiYoutube } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
function App() {
  return(
    <div>
      <header>
        <div className='top_h'>
          <div className="container">
            <div className="flex hd">
              <div className="flex h_left">
                <div className='hd1'>
                  <a><CgMail className='icon i_size'></CgMail><span>info@cdmi.in </span></a>
                </div>
                <div className='hd1'>
                  <a><FaCertificate className='icon'></FaCertificate><span>Verify Certificate </span></a>
                </div>
              </div>
              <div>HAVE ANY QUESTION ? +91 90333 16003</div>
              <div className="flex h_right">
                <a><FaFacebookF className='icon'></FaFacebookF></a>
                <a><FaTwitter className='icon'></FaTwitter></a>
                <a><TfiGoogle className='icon'></TfiGoogle></a>
                <a><FaLinkedin className='icon'></FaLinkedin></a>
                <a><ImInstagram className='icon'></ImInstagram></a>
                <a><FiYoutube className='icon i_size'></FiYoutube></a>
                <a><FaWhatsapp className='icon i_size'></FaWhatsapp></a>
              </div>
            </div>
          </div>
        </div>
        <div className="last_h container">
          <div className='flex'>
            <div>
              <img src={logoimg} className='logo' alt=''></img>
            </div>
            <div>
              <ul className='flex mainmenu'>
                <li className='active'><a>HOME</a></li>
                <li><a>COURSES<span className='drop_i'><RiArrowDropDownLine></RiArrowDropDownLine></span></a></li>
                <li><a>ACTIVITY<span className='drop_i'><RiArrowDropDownLine></RiArrowDropDownLine></span></a></li>
                <li><a>BLOG</a></li>
                <li><a>KNOW US<span className='drop_i'><RiArrowDropDownLine></RiArrowDropDownLine></span></a></li>
                <li><a>GET IN THOCH</a></li>
                <li><a>STUDENT ZONE<span className='drop_i'><RiArrowDropDownLine></RiArrowDropDownLine></span></a></li>
              </ul>
            </div>
          </div>
        </div>
         
      </header>
      <main>
        <div>
          <img src={require(`./image/img1.jpeg`)}></img>
        </div>
        {/* =============================Start section 1============================================ */}
        <div className='spacer'>
          <div className='sec_header'>
            <div className='container'>
              <div className='flex sec_title'>
                  <div className='line'></div>
                  <div>CREATIVE COURSE</div>
              </div>
              <div className='sec_title'><h1>OFFERED COURSES</h1></div>
              <div className='flex sec1'>
                <div className='off'>
                  <div className='img'><img src={require(`./image/img2.webp`)}></img></div>
                  <div className='img_info'>
                    <div><h2>Development Courses</h2></div>
                    <div className='text_info flex'>
                      <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaRegStarHalfStroke></FaRegStarHalfStroke>
                      </div>
                      <div className='btn'>Know More..!</div>
                    </div>
                  </div>
                </div>
                <div className='off'>
                  <div className='img'><img src={require(`./image/img3.webp`)}></img></div>
                  <div className='img_info'>
                    <div><h2>Design Courses</h2></div>
                    <div className='text_info flex'>
                      <div className='star'> 
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaRegStarHalfStroke></FaRegStarHalfStroke>
                      </div>
                      <div className='btn'>Know More..!</div>
                    </div>
                  </div>
                </div>
                <div className='off'>
                  <div className='img'><img src={require(`./image/img4.jpg`)}></img></div>
                  <div className='img_info'>
                    <div><h2>Programming IT</h2></div>
                    <div className='flex text_info'>
                      <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaRegStarHalfStroke></FaRegStarHalfStroke>
                      </div>
                      <div className='btn'>Know More..!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex sec1'>
                <div className='off'>
                  <div className='img'><img src={require(`./image/img5.webp`)}></img></div>
                  <div className='img_info'>
                    <div><h2>Trendy Courses</h2></div>
                    <div className='text_info flex'>
                      <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaRegStarHalfStroke></FaRegStarHalfStroke>
                      </div>
                      <div className='btn'>Know More..!</div>
                    </div>
                  </div>
                </div>
                <div className='off'>
                  <div className='img'><img src={require(`./image/img6.webp`)}></img></div>
                  <div className='img_info'>
                    <div><h2>Civil-Mech. Engineering</h2></div>
                    <div className='text_info flex'>
                      <div className='star'> 
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaRegStarHalfStroke></FaRegStarHalfStroke>
                      </div>
                      <div className='btn'>Know More..!</div>
                    </div>
                  </div>
                </div>
                <div className='off'>
                  <div className='img'><img src={require(`./image/img2.webp`)}></img></div>
                  <div className='img_info'>
                    <div><h2>Business Development</h2></div>
                    <div className='flex text_info'>
                      <div className='star'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaRegStarHalfStroke></FaRegStarHalfStroke>
                      </div>
                      <div className='btn'>Know More..!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='btn1 sec_title'>View All Courses<FaArrowRightLong></FaArrowRightLong></div>
            </div>
          </div>
        </div>
        {/* =======================================Start section 2========================================== */}
        <div className='spacer'>
          <div className='section2 flex'>
            <div className='sec_2'>
              <div className='flex aboutus'>
                <div className='line'></div>
                <div>ABOUT US</div>
              </div>
              <div className='aboutus'><h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4></div>             
              <div className='about_text'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</div>
              <div className='btn2'>Enroll Now..!<FaArrowRightLong></FaArrowRightLong></div>
            </div>
            <div className='sec_2_1'>
                <img src={require(`./image/img8.webp`)}></img>
            </div>
          </div>
        </div>
        {/* ====================================Start secton 3============================================ */}
        <div className='spacer'>
          <div className='sec3_img'>
          </div>
          <div className='back-color'>
            <div className='container'>
              <div className='flex'>
                <div className='i_info1'>
                  <div  className='i_info'><img src={require(`./image/18.png`)}></img></div>
                  <div>
                    <h1>18000+</h1>
                    <h4>HAPPY STUDENTS</h4>
                  </div> 
                </div> 
                <div className='i_info1'>
                  <div className='i_info'><img src={require(`./image/15.png`)}></img></div>
                  <div>
                    <h1>10+</h1>
                    <h4>CERTIFICATION APPROVAL</h4>
                  </div> 
                </div> 
                <div className='i_info1'>
                  <div  className='i_info'><img src={require(`./image/16.png`)}></img></div>
                  <div>
                    <h1>100+</h1>
                    <h4>CERTIFIED TEACHERS</h4>
                  </div> 
                </div> 
                <div className='i_info1'>
                  <div  className='i_info'><img src={require(`./image/17.png`)}></img></div>
                  <div>
                    <h1>12000+</h1>
                    <h4>STUDENTS PLACED</h4>
                  </div> 
                </div> 
              </div>
            </div>
          </div>
        </div>
        {/* ========================================Start section 4================================================= */}
        <div className='spacer'>
          <div className='container'>
            <div className='flex'>
              <div className='student_info '>
                <div className='flex sec_title'>
                    <div className='line'></div>
                    <div>HAPPY STUDENTS</div>
                </div>
                <div className='sec_title'><h1>ALUMNI SPEAK</h1></div>
                <div className='quote'><h1><FaQuoteRight></FaQuoteRight></h1></div>
                <div className='std_info'><p>Good teaching. Well nature staff.. Good education they provide for every student in the institution... Staff's are very quite,decent ,multi talented and well matured to........ Thank you creative multimedia!!!!</p></div>
                <div className='student_img flex'>
                  <img src={require(`./image/s_info.jpg`)}></img>
                  <div className='s_img_info'>
                    <h3>Ishita Chopada</h3>
                    <p>Flutter Developer<span>@samp Technology</span></p>
                  </div>
                </div>
              </div>
            <div className='shape1_img'>
              <div className='img_shape'>
                <img src={require(`./image/sec_3.PNG`)}></img>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* ==========================================Start Section 5============================================= */}
        <div className='spacer sec5_b_color'>
          <div className='container'>
            <div className='section_5'>
            <div className='flex sec_title'>
                  <div className='line'></div>
                  <div>WHY CHOOSE CREATIVE</div>
              </div>
              <div className='sec_title'><h1>OFFERED COURSES</h1></div>
              <div className='flex'>
                <div className='sec5_icon'>
                  <div className='icon_back back1'>
                    <img src={require(`./image/1.png`)}></img>
                  </div>
                  <div className='sec5_info'>
                      <h3>Industry Experts As Trainers</h3>
                      <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                  </div>
                </div>
                <div className='sec5_icon'>
                  <div className='icon_back back2'>
                    <img src={require(`./image/2.png`)}></img>
                  </div>
                  <div className='sec5_info'>
                      <h3>Latest Curriculum</h3>
                      <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                  </div>
                </div>
                <div className='sec5_icon'>
                  <div className='icon_back back3'>
                    <img src={require(`./image/3.png`)}></img>
                  </div>
                  <div className='sec5_info'>
                      <h3>Latest Technology</h3>
                      <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='sec5_icon'>
                  <div className='icon_back back4'>
                    <img src={require(`./image/5.png`)}></img>
                  </div>
                  <div className='sec5_info'>
                      <h3>Interview Assistance</h3>
                      <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                  </div>
                </div>
                <div className='sec5_icon'>
                  <div className='icon_back back5'>
                    <img src={require(`./image/6.png`)}></img>
                  </div>
                  <div className='sec5_info'>
                      <h3>Free Upgradation</h3>
                      <p>We will be provided free upgradation for any newer version of the course you have.</p>
                  </div>
                </div>
                <div className='sec5_icon'>
                  <div className='icon_back back6'>
                    <img src={require(`./image/7.png`)}></img>
                  </div>
                  <div className='sec5_info'>
                      <h3>Lifetime Support</h3>
                      <p>We will provide you lifetime support on all the courses you learned from us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================start section 6================================ */}
        <div className='spacer'>
          <div className='container'>
            <div className='flex sec_title'>
              <div className='line'></div>
              <div>STUDENT PLACRMENT</div>
            </div>
            <div className='sec_title'><h1>OUR RECRUITMENT PARTANERS</h1></div>
            <div className='flex'>
              <div className='sec_logo'><img src={require('./image/logo1.png')}></img></div>
              <div className='sec_logo'><img src={require('./image/logo2.png')}></img></div>
              <div className='sec_logo'><img src={require('./image/logo3.png')}></img></div>
              <div className='sec_logo'><img src={require('./image/logo4.png')}></img></div>
              <div className='sec_logo'><img src={require('./image/logo5.png')}></img></div>
              <div className='sec_logo'><img src={require('./image/logo6.png')}></img></div>
            </div>
          </div>
        </div>
        {/* ================================Start section 7=================================== */}
        <div className='container'>
          <div className='demand'>
            <p className='our_d'>Our Demanded Course -</p>
            <div className='parent_btn'>
              <div className='btn3'>
                <p className='multi'>Multimedia Training Institute In Varachha</p>
                <p className='multi'>spoken english class in katargam</p>
                <p className='multi'>Web development training in katargam</p>
                <p className='multi'>Best animation training course</p>
              </div>
              <div className='btn3'>
                <p className='multi'>C++ Programming Language Training Institute In Varachha</p>
                <p className='multi'>Python Training Institute In Varachha</p>
                <p className='multi'>Adobe illustrator design</p>
                <p className='multi'>Adobe xd design training institute in varachha</p>
              </div>
              <div className='btn3'>
                <p className='multi'>Multimedia Training Institute In Varachha</p>
                <p className='multi'>spoken english class in katargam</p>
                <p className='multi'>Web development training in katargam</p>
                <p className='multi'>Best animation training course</p>
              </div>
              <p className='show'>Show more</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='spacer'>
          <div className='container'>
          <ul className='flex mainfooter'>
            <li className='first'>
              <div className='footer_logo'>
                <img src={footerlogo}></img>
              </div>
              <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <h2>FOLLOW US ON</h2>
              <div>
                <a><FaFacebookF></FaFacebookF></a>
                <a><FaTwitter></FaTwitter></a>
                <a><TfiGoogle></TfiGoogle></a>
                <a>< FaLinkedin></FaLinkedin></a>
                <a><ImInstagram></ImInstagram></a>
                <a><FiYoutube></FiYoutube></a>
                <a><FaWhatsapp></FaWhatsapp></a>
              </div>
            </li>
            <li className='second'>
              <div>FEATURE LINKS</div>
              <div><a><FaHandPointRight></FaHandPointRight><span>About Us</span></a></div>
              <div><a><FaHandPointRight></FaHandPointRight><span>Blogs</span></a></div>
              <div><a><FaHandPointRight></FaHandPointRight><span>Join Us</span></a></div>
              <div><a><FaHandPointRight></FaHandPointRight><span>Company Login</span></a></div>
              <div><a><FaHandPointRight></FaHandPointRight><span>Company Login</span></a></div>
            </li>
            <li className='third'>
              <div><h3>CONTACT US</h3></div>
              <div><a>HEAD OFFICE - YOGICHOWK</a>
                <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.
                   Mo : +91 90333 16003</p>
                  <div><a>OTHER BRANCHES</a></div>
                  <div>
                  <ul className='lastul'>
                    <li><a><FaUniversity></FaUniversity><span>Katargam</span></a></li>
                    <li><a><FaUniversity></FaUniversity><span>Mota Varachha</span></a></li>
                    <li><a><FaUniversity></FaUniversity><span>Adajan</span></a></li>
                    <li><a><FaUniversity></FaUniversity><span>Navsari</span></a></li>
                  </ul>
                  </div>
              </div>
            </li>
          </ul>
          
          </div>
        </div>
      </footer>
      <div className='lastFooter'>
        <div className='container'></div>
        <p>&copy; 2023 All Rights Reserved by Creative Design & Multimedia Institute.&</p></div>
  </div>
  );
}

export default App;
