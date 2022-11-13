import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className='container my-5'>
    <main className="header-offset content-wrapper about-wrapper">
        <div className="terms-container">
            <div className="row">
                <div className="col-sm-11 m-auto ">
                    <section className="terms-title">
                        <h1>Privacy Policy</h1>
                        <hr />
                    </section>
                    <div className="terms-body">
                        <h2>Who we are</h2>
                        <hr />
                        <h3 className='mb-3'>Our website address is: <Link to="https://rvwala.com"> https://rvwala.com.</Link>
                        </h3>
                        <p>
                        RV Wala is a brand located in Canada to provide you with a whole new experience. We offer well-maintained rental services at a pretty affordable price to our customers. RV Wala has its focus fixed on providing the best holidays and vacations.
                        </p>
                        <hr />
                        <h2>Comments</h2>
                        <hr />
                        <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                        <p className='mt-3'>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                        <hr />
                        <h2>Media</h2>
                        <hr />

                        <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website. </p>
                        <hr />
                        <h2>Cookies</h2>
                        <hr />
                        
                        <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                        <p className='mt-3'>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                        <p className='mt-3'>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                        <p className='mt-3'>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
                        <hr />
                        <h2>Embedded content from other websites</h2>
                        <hr />
                        <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                        <p className='mt-3'>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                        <hr />
                        <h2>Who we share your data with</h2>
                        <hr />
                        <p>If you request a password reset, your IP address will be included in the reset email.</p>
                        <hr />
                        <h2>How long we retain your data</h2>
                        <hr />
                        <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                        <p className='mt-3'>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
                        <hr />
                        <h2>What rights you have over your data</h2>
                        <hr />
                        <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                        <hr />
                        <h2>Where your data is sent</h2>
                        <hr />
                        <p>Visitor comments may be checked through an automated spam detection service.</p>


                    </div>
                </div>
            </div>
        </div>
        {/* /.row */}
        {/* /.container */}
    </main>
</div>
  )
}

export default PrivacyPolicy