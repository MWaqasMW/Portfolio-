'use client'

import './footer.css';

const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',

  });

  return (
    <div className="footer_main">
      <div className="container footer_inner">
        &copy; Copy All Rights Reserved {formattedDate}
      </div>
    </div>
  );
};

export default Footer;
