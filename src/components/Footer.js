import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div>
      <div class="container my-5">
      <footer
class="text-center text-white"

sx={{ backgroundColor : 'red' }}
>
<div class="container">
  {/* <section class="mt-5">
    <div class="row text-center d-flex justify-content-center pt-5">
      <div class="col-md-2">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!" class="text-white">
            About us
          </a>
        </h6>
      </div>


      <div class="col-md-2">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!" class="text-white">
            Help
          </a>
        </h6>
      </div>

      <div class="col-md-2">
        <h6 class="text-uppercase font-weight-bold">
          <a href="#!" class="text-white">
            Contact
          </a>
        </h6>
      </div>
    </div>
  </section> */}

  <hr class="my-5" />

  <section class="mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-8">
        <p>
          Thanks you for visiting our website!
        </p>
      </div>
    </div>
  </section>

  <section class="text-center mb-5">
    <a href="/" class="text-primary me-4">
      <FacebookIcon sx={{ fontSize: 40 }}/>
    </a>
    <a href="/" class="text-primary me-4">
      <TwitterIcon sx={{ fontSize: 40 }}/>
    </a>
    <a href="/" class="text-primary me-4">
      <GoogleIcon sx={{ fontSize: 40 }}/>
    </a>
    <a href="/" class="text-primary me-4">
     <InstagramIcon sx={{ fontSize: 40 }}/>
    </a>
    <a href="/" class="text-primary me-4">
     <LinkedInIcon sx={{ fontSize: 40 }}/>
    </a>
    <a href="/" class="text-primary me-4">
     <GitHubIcon sx={{ fontSize: 40 }}/>
    </a>
  </section>
</div>

<div
  class="text-center p-3"

>
  © 2022 Copyright: All the rights reserved.
  
</div>
</footer>
       
      </div>
    </div>
  );
};

export default Footer;
