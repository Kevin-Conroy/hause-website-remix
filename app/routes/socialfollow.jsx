

import React from 'react';
import { Link } from 'remix'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { SiInstagram } from 'react-icons/si';



function SocialFollow() {
  return (
    <div>
      <h3>YO <a href="https://www.instagram.com/davehause/" target="_blank"><SiInstagram /></a></h3>
    </div>
  )
}

export default SocialFollow;
/*
function SocialFollow() {
  return (
    <div className="social-container">
      <h3 className="text-center">Follow Along</h3>
      <Link
        to="https://www.youtube.com/c/DAVEHAUSEOFFICIAL"
        className="youtube social"
        target="_blank"
      >
         <h3>YouTube</h3>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        
      </ Link>
      <Link
        to="https://www.facebook.com/DaveHauseMusic"
        className="facebook social"
        target="_blank"
      >
          <h3>Facebook</h3>
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </Link>


      <Link to="https://twitter.com/hausedave" 
      className="twitter social"
      target="_blank"
      >
          <h3>Twitter</h3>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Link>
      <Link to="https://www.instagram.com/davehause"
        className="instagram social"
        target="_blank"
      >
          <h3>Instagram</h3>
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </Link>
    </div>
  );
}

export default SocialFollow;
*/
