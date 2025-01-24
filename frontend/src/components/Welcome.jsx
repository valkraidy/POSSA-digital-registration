import React from 'react';
import '../styles/Welcome.css';
import wel from '../images/wel.jpg';


const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>PRESIDENTIAL REMARKS</p>
                    <p> Welcome To POSSA!!!</p>
                    <p>"Welcome to the Political Science family at the University of Ghana! 
                        As we embark on this journey, let us embrace the opportunities to 
                        learn, grow, and challenge ourselves. Together, we can foster 
                        meaningful discussions, build strong networks, and make lasting 
                                impacts within and beyond our community.

                        Wishing you all a successful and enriching academic year ahead!"</p>
                 
                     <p> Miss Josephine Nti</p>
                      <p> President, POSSA</p>
                </div>
                <div className='col-2'>
                    <img className="iframe" src={wel} alt='john' />
                </div>
            </div>
        </div>
    )
}

export default Demo
