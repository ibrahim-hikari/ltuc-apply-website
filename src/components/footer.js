/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ModelContext } from './context.js';

function Footer() {
    const context = useContext(ModelContext);


    return (
        <footer id="footer" className="footer">
            <div className="ifram-div">
                {context.footerData.iframe.map((iframeSrc, idx) => (
                    <iframe className="ifram"
                        src={iframeSrc}
                        frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" title='LTUC'>
                    </iframe>
                ))}
            </div>

            <div className="contact-div">
                <img src={context.footerData.logo} className="footer-logo" alt="" />
                <h4 className="contact-text">{context.footerData.contactUs.header}</h4>
                <a target='_blank' rel="noopener noreferrer" className="contact-info" href={context.footerData.contactUs.phone.directPhone}><i className="phone fa fa-phone">&nbsp;&nbsp;{context.footerData.contactUs.phone.number}</i></a>
                <a target='_blank' rel="noopener noreferrer" className="contact-info" href={context.footerData.contactUs.info.directEmail}><i className="send fa fa-send contact-info-email">&nbsp;&nbsp;{context.footerData.contactUs.info.email}</i></a>
                <a target='_blank' rel="noopener noreferrer" className="contact-info location-amman" href="https://goo.gl/maps/GpQATPheZgoCggT18">
                    <i className="map fa fa-map-marker">&nbsp;&nbsp;{context.footerData.contactUs.locationAmman.map((string, i) => (
                        <>
                            <span key={i}>{string}</span><br />
                        </>
                    ))}
                    </i>
                </a>
                <a target='_blank' rel="noopener noreferrer" className="contact-info location-irbid" href="https://goo.gl/maps/BVovFJ29J7aqHHUE6">
                    <i className="map fa fa-map-marker">&nbsp;&nbsp;{context.footerData.contactUs.locationIrbid.map((string, i) => (
                        <>
                            <span key={i}>{string}</span><br />
                        </>
                    ))}
                    </i>
                </a>
                <div className="complaints-section">
                    <div className="social">
                        <a target='_blank' rel="noopener noreferrer" href={context.footerData.contactUs.twitter}><i className="twitter fa fa2 fa-twitter"></i></a>
                        <a target='_blank' rel="noopener noreferrer" href={context.footerData.contactUs.instagram}><i className="instagram fa fa2 fa-instagram"></i></a>
                        <a target='_blank' rel="noopener noreferrer" href={context.footerData.contactUs.facebook}><i className="facebook fa fa2 fa-facebook-f"></i></a>
                    </div>
                    <p className="complaints-p">{context.footerData.complaints.note}</p>
                    <a target='_blank' rel="noopener noreferrer" className="complaints-a" href={context.footerData.complaints.email.href}>{context.footerData.complaints.email.email}</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;