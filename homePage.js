
import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import '../index.css';
import '../css/homepage.css';
import '../css/ourstory.css';
import '../css/campaign.css';
import '../css/challenges.css';
import '../css/other.css';
import '../css/contactus.css';
import '../css/hamburgermenu.css';

import OurStory from './ourStory.js';
import Campaign from './campaign.js';
import Agenda from './agenda.js';
import Contactus from './contactus.js';

import Challenges from './challenges.js';
import ChallengesPartTwo from './challengepartThree.js';
import ChallengesPartThree from './challengepartTwo.js';
import ChallengesPartFour from './challengepartFour.js';

import logo from '../SDGwheel.png';
import Campaignlogo from '../Monochrome.svg';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  render() {

    return (
      <div>
        <header className="homepage-background-image">

          <div className="nav nav-hamburger">
            <label className="hamburger-icon" htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"/>
            <div className="menu-hamburger">
              <Link to="/ourstory">Our Story</Link>
              <Link to="/campaign">Join Campaign</Link>
              <Link to="/challenges">Challenges</Link>
              <Link to="/agenda">Hackathon Agenda</Link>
              <Link to="/contactus">Contact us</Link>
            </div>
          </div>

          <div className="container-fluid">
            <div className="col-12 spacing">
            </div>
            <div className="col-12">
              <div>
                <img src={Campaignlogo} className="App-logo" alt="logo" />
              </div>
              <img src={logo} className="SDG-wheel" alt="logo" />
              <div className="heading">
                <h1 className="sustainable-development-goals">Sustainable Development Goals</h1>
              </div>
              <div className="subheading">
                <h1 className="global-hackathon">GLOBAL ONLINE HACKATHON 2018</h1>
              </div>
              <div>
                <p className="date">November 23th-24th</p>
              </div>
              <div className="container-fluid">
                <div className="col-md-12 spacing">
                  <div className="row">
                    <a href="https://james1794.typeform.com/to/bqGMQe" className="button-homepage">
                      {/* <div className="apply-now">APPLY NOW</div> */}
                      <div className="apply-now">
                        <div className="apply-now-homepage-title">APPLY NOW</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">

                <div className="menu-wrapper">

                  <div onClick={() => scrollToComponent(this.ourstory, {
                    offset: 0, align: 'top', duration: 500, ease: 'inExpo'
                  })}><h2 className="menu ourstory-menu">Our Story</h2></div>

                  <div onClick={() => scrollToComponent(this.campaign, {
                    offset: 0, align: 'top', duration: 500, ease: 'inExpo'
                  })}><h2 className="menu about-us-menu">Join Campaign</h2></div>

                  <div onClick={() => scrollToComponent(this.challenges, {
                    offset: 0, align: 'top', duration: 500, ease: 'inExpo'
                  })}><h2 className="menu challenges-menu">Challenges</h2></div>

                  <div onClick={() => scrollToComponent(this.agenda, {
                    offset: 0, align: 'top', duration: 500, ease: 'inExpo'
                  })}><h2 className="menu agenda-menu">Hackathon Agenda</h2></div>

                  <div onClick={() => scrollToComponent(this.contactus, {
                    offset: 0, align: 'top', duration: 500, ease: 'inExpo'
                  })}><h2 className="menu contactUs-menu">Contact Us</h2></div>

                </div>

              </div>
            </div>
          </div>
        </header>

        <div className="parallax"></div>

        <section ref= {(section) => {
          this.ourstory = section;
        }}>
          <OurStory />
        </section>

        <section ref= {(section) => {
          this.campaign = section;
        }}>
          <Campaign />
        </section>

        <div className="parallax2"></div>

        <section ref= {(section) => {
          this.challenges = section;
        }}>
          <div className="challenges">
            <Challenges />
            <ChallengesPartThree />
            <ChallengesPartTwo />
            <ChallengesPartFour />

            <div className="parallax-whitebackground"></div>
          </div>
        </section>

        <section ref= {(section) => {
          this.agenda = section;
        }}>
          <Agenda />
        </section>

        <section ref= {(section) => {
          this.contactus = section;
        }}>
          {/* <div className="contact-us-background"> */}
            <Contactus />
          {/* </div> */}
        </section>

        <footer className="footer">
          <div className="design_by">
          </div>
        </footer>
      </div>
    );
  }
}

export default Homepage;
