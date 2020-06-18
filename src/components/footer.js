/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ModelContext } from './context.js';

function Footer() {
    const context = useContext(ModelContext);


    return (
        <footer id="footer" className="footer">
            <div className="ifram-div">
                <iframe className="ifram"
                    src={context.footerData.iframe}
                    frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" title='LTUC'>
                </iframe>
            </div>

            <div className="contact-div">
                <img src={context.footerData.logo} className="footer-logo" alt="" />
                <h4 className="contact-text">{context.footerData.contactUs.header}</h4>
                <a className="contact-info" href='tel:+962(6)4000700'><i className="phone fa fa-phone">&nbsp;&nbsp;{context.footerData.contactUs.phone.number}</i></a>
                <a className="contact-info" href='mailto:info@ltuc.com'><i className="send fa fa-send">&nbsp;&nbsp;{context.footerData.contactUs.info.email}</i></a>
                <a className="contact-info" href="#"><i className="map fa fa-map-marker">&nbsp;&nbsp;{context.footerData.contactUs.location}</i></a>
                <div className="complaints-section">
                    <div className="social">
                        <a href='https://www.facebook.com/LTUC.JO/'><i className="facebook fa fa2 fa-facebook-f"></i></a>
                        <a href='https://www.instagram.com/ltuc.jo/'><i className="instagram fa fa2 fa-instagram"></i></a>
                        <a href='https://twitter.com/LTUCJO'><i className="twitter fa fa2 fa-twitter"></i></a>
                    </div>
                    <p className="complaints-p">{context.footerData.complaints.note}</p>
                    <a className="complaints-a" href='mailto:complaints@ltuc.com'>{context.footerData.complaints.email.email}</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;