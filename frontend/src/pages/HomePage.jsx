import { Link } from 'react-router-dom';

import styles from "/src/stylesheets/Homepage.module.css";
import Arrow from '../assets/Arrow.png'
import Arrow2 from '../assets/Arrow2.svg'
import Arrow1 from '../assets/Arrow1.png'
import Register from '../assets/Register.png'
import Line from '../assets/Line.svg'


const Homepage = () => {
  	
  	
  	return (
    		<div className={styles.homepage}>
      			<div className={styles.topEdge} />
      			<img className={styles.registerFromAnywhereIcon} alt="" src={Register} />
      			<img className={styles.funArrow2Icon} alt="" src={Arrow1} />
      			<div className={styles.home}>Home</div>
      			<div className={styles.academics}>Academics</div>
      			<div className={styles.newsEvents}>{`News & Events`}</div>
      			<div className={styles.aboutUs}>About Us</div>
      			<img className={styles.homepageChild} alt="" src={Line} />

      			
                       <Link to="/LoginPage">   
        				<div className={styles.loginBtnChild}>
						   <p style={{fontWeight:700,fontSize:'20px',marginLeft:'40px',marginTop:"6px",color:"white"}}>Login</p>

						    
                        
                            </div>
							</Link>
        				<img className={styles.arrowRightIcon} alt="" src={Arrow2} />
						

        				
      			
      			<img className={styles.funArrow1Icon} alt="" src={Arrow} />
      			<div className={styles.manualRegistrationMade}>manual registration made simple</div>
      			<div className={styles.noMoreLong}>-- no more long queues or paper work</div>
      			<div className={styles.wantMoreInfo}>Want more info about this?</div>
        				<div className={styles.streamlineYourSemesterContainer}>
          					<p className={styles.streamline}>{`Streamline `}</p>
          					<p className={styles.streamline}>{`your semester with our `}</p>
          					<p className={styles.streamline}>{`easy, secure and `}</p>
          					<p className={styles.streamline}>{`efficient digital `}</p>
          					<p className={styles.streamline}>registration system</p>
        				</div>
        				<div className={styles.possavariant3}>
          					<div className={styles.possa}>POSSA</div>
        				</div>
        				<div className={styles.learnMore}>
          					<div className={styles.learnMore1}>Learn More</div>
        				</div>
        				</div>);
      			};
      			
      			export default Homepage;
      			