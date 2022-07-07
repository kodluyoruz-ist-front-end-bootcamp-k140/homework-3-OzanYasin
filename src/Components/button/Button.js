import React from 'react';

export function Button({ children, ...rest }) {
  return (
    <button className="btn btn-group" {...rest}>
      {children}
    </button>
  );
}
