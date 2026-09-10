import React from 'react';
import useReveal from '../hooks/useReveal';

const Reveal = ({ children, delay = 0, stagger = 0, className = '', itemClassName = '', ...rest }) => {
  const [ref, shown] = useReveal();
  const state = shown ? 'reveal-item is-shown' : 'reveal-item';

  if (!stagger) {
    return (
      <div
        ref={ref}
        style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        className={`${state} ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} {...rest}>
      {React.Children.map(children, (child, i) => (
        <div
          className={`${state} ${itemClassName}`}
          style={{ transitionDelay: `${delay + i * stagger}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Reveal;
