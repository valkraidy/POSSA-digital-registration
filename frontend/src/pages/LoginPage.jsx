import { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from "/src/stylesheets/Login.module.css";
import Emoji from "../assets/Emoji.svg"
import user from "../assets/user.svg"
import mail from "../assets/mail.svg"
import lock from "../assets/lock.svg"
import eye from "../assets/eye.svg"
import arrowright from "../assets/arrowright.svg"



const LoginPage = () => {
  	
  	return (
    		<div className={styles.loginPage}>
      			<div className={styles.loginPageChild} />
      			<div className={styles.loginPageItem} />
      			<div className={styles.loginPageInner} />
      			<div className={styles.ellipseDiv} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.welcomeStudent}>
        				<p className={styles.welcome}>
          					<span>Welcome</span>
          					<span className={styles.span}>{` `}</span>
        				</p>
        				<p className={styles.student}>
          					<span className={styles.span}>{` `}</span>
          					<span>{`Student `}</span>
        				</p>
      			</div>
      			<div className={styles.possavariant5}>
        				<div className={styles.possa}>POSSA</div>
      			</div>
      			<div className={styles.accessYourAccountContainer}>
        				<p className={styles.welcome}>{`Access your account to complete `}</p>
        				<p className={styles.welcome}>{`your registration, manage your details, `}</p>
        				<p className={styles.welcome}>and stay updated on your progress</p>
        				<p className={styles.welcome}>—all in one place.</p>
      			</div>
      			<div className={styles.enterTheRight}>Enter the right credentials to access your account</div>
      			<img className={styles.arrowRightIcon} alt="" src={arrowright} />
            
      			<b className={styles.login}>Login</b>

      			<input className={styles.loginPageChild1}   
      			placeholder  = "Student Email"
            />
           
      			<input className={styles.loginPageChild2} 
             placeholder =  "Student ID"
            />

      			<input className={styles.loginPageChild3} 
            placeholder ="PIN"
            />
      			
      			<img className={styles.eyeOffIcon} alt="" src={eye} />
      			<img className={styles.lockIcon} alt="" src={lock} />
      			<img className={styles.mailIcon} alt="" src={mail} />
      			<img className={styles.userIcon} alt="" src={user} />
      			<img className={styles.emojiWavingHand} alt="" src={Emoji} />
      			<div className={styles.forgotPin}>Forgot PIN ?</div>
        				<div className={styles.loginPageChild4} 
                // onClick={onRectangleClick}
                 />

				 <Link to="/Dashboard">

						<button className={styles.logIn}>LOG IN</button>
				 </Link>
        			
        				</div>);
      			};
      			
      			export default LoginPage;
      			









