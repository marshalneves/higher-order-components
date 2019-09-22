import React, { useEffect } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withPageLogging = WrappedComponent => props => {
  useEffect(() => {
    console.log(`logger: ${getDisplayName(WrappedComponent)}`);
  }, []);
  return <WrappedComponent {...props } />;
};
export default withPageLogging;