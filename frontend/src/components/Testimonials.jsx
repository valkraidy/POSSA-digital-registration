import React from 'react'
import wel from './images/wel.jpg'
import u from './images/u.jpg'
import uu from './images/uu.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                {/* <h2>Latest News and Announcements </h2> */}
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={wel} alt='user1'/>
                        <p>Breaking Barriers: Miss Josephine Nti Becomes First Female POSSA President</p>
                        <p><span>The Political Science Students Association (POSSA) has made history by electing Miss Josephine Nti, a level 300 student as its first female president in over 60 year.</span></p>
                    </div>
                    <div className='card'>
                        <img src={u} alt='user1'/>
                        <p>Roundtable conference on "Electronic Technology and the Future of Elections in Ghana."</p>
                        <p><span>The Department of Political Science as part of activities marking its 60th Anniversary is organizing a roundtable conference on the topic "Electronic Technology and the Future of Elections in Ghana."</span></p>
                    </div>
                    <div className='card'>
                        <img src={uu} alt='user1'/>
                        <p>Dr Seidu Alidu : Department of Political Science gets a New Head of Department</p>
                        <p><span>Following the successful tenure of Dr Maame A. Gyekye-Jandoh on 31st July, 2022; the University has appointed Dr Seidu M. Alidu to be the new Head of Department effective 1st August 2022 for the next two years subject to renewal. Congratulations Dr Alidu and best regards. Ayekoo!!</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
