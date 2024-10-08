import { useContext } from 'react';

import { LastCheckedContext } from '@/context/LastCheckedContext';

const Footer = () => {
  const { lastCheckedOn } = useContext(LastCheckedContext);

  return (
    <footer className="footer">
      <small>&copy; Copyright by Word Analytics. All Rights Reserved.</small>
      <small>
        Last checked limits on: {lastCheckedOn ? `${lastCheckedOn}` : 'Never'}
      </small>
    </footer>
  );
};

export default Footer;
