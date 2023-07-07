import React from 'react';

const Footer = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="box1">
          <p className="move">Move</p>
          <br></br>
          <p className="p">
            Move - Multipurpose Design<br></br>Template will help you<br></br> develop your website design.
          </p>
          <img className="icon1" src="src\assets\Dribbble.png" width="49.69px" height="46.725px" />
          <img className="icon2" src="src\assets\Facebook.png" width="49.69px" height="46.725px" />
          <img className="icon3" src="src\assets\Twitter.png" width="49.69px" height="46.725px" />
          <img className="icon4" src="src\assets\YouTube.png" width="49.69px" height="46.725px" />
        </div>
        <div className="box2">
          <p className="home">Home</p>
          <p className="desktop">
            Desktop App<br></br> Mobile App<br></br>SaaS<br></br>Event<br></br>Software<br></br>
          </p>
        </div>
        <div className="box3">
          <p className="pages">Pages</p>
          <p className="about">
            About Us<br></br>Careers<br></br>Case Studies<br></br>Pricing
          </p>
        </div>
        <div className="box4">
          <p className="blog">Blog</p>
          <p className="bloglisten">
            Blog Listing<br></br>Blog Article<br></br>Newsroom
          </p>
        </div>
        <div className="box5">
          <p className="portfolio">Portfolio</p>
          <p className="portfo">
            Portfolio<br></br>Single Case
          </p>
        </div>
      </div>
      <div className="content">© 2019-2020 Wave Multipurpose Design Template.</div>
    </div>
  );
};

export default Footer;
