import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import SplashScreen from './SplashScreen';

function Auth({ children }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any
};

export default Auth;
