import React from 'react'
// import PropTypes from 'prop-types'

function FooterAlt() {
    return (
      <div> 
      <div class="container-fluid footer-alt">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="footer-logo">foodable</h1>

            </div>

            <div class="col-lg-3">
              <h4 class="footer-heading">Who we are</h4>
              <p class="footer-list">About us</p>
              <p class="footer-list">Contact us</p>

            </div>

            <div class="col-lg-3">
              <h4 class="footer-heading">Get involved</h4>
              <p class="footer-list">Donate</p>
              <p class="footer-list">Request</p>
            </div>

            <div class="col-lg-3">
              <h4 class="footer-heading">Social</h4>
              <i class="social-icon fab fa-facebook fa-2x"></i>
              <i class="social-icon fab fa-twitter fa-2x"></i>
              <i class="social-icon fab fa-instagram fa-2x"></i>
              <i class="social-icon fas fa-envelope fa-2x"></i>
            </div>

          </div>
                <p class="copyright">© Copyright 2021 foodable</p>

        </div>
      </div>
    )
}



export default FooterAlt;

