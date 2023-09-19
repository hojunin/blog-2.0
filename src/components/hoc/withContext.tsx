'use client';
import React from 'react';

const withContext = (WrappedComponent: React.ReactNode) => {
  return function WithContext(props) {
    return <WrappedComponent {...props} />;
  };
};

export default withContext;
