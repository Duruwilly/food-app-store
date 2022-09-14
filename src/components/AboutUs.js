import React from 'react'
import Title from './Title'
import AboutImg from '../assets/images/aboutus.jpg'
import { MdLocalShipping } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { FaDollarSign } from 'react-icons/fa'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <section className="section">
      <Title title="about us" />
      <div className="row">
        <div  className='img'>
          <img
            src={AboutImg}
            alt="delicacy"
            className=""
          />
        </div>

        <div className='content' >
          <h3 className="">A different level of satisfaction</h3>
          <p className="">
            Enjoy the best and different satisfaction. When it comes to customer
            satisfaction, we are the best.
          </p>
          <p className="">
            Whilst there may be competitors, we have proven to be the best. Our
            customer review says it all. lilsenfoods is here to stay!
          </p>
          
          <div className="icons-container">
            <div
              className="icons"
            >
              <MdLocalShipping className="icon" />
              <span className="span">swift delivery</span>
            </div>
            <div
              className="icons"
            >
              <FaDollarSign className="icon" />
              <span className="span">easy payments</span>
            </div>
            <div
              className="icons"
              
            >
              <RiCustomerService2Fill className="icon" />
              <span className="span">excellent delivery service</span>
            </div>
          </div>
          <Link to='/'>
          <Button title='learn more' />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUs