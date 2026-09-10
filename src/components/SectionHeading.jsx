import React from 'react';

const SectionHeading = ({ index, title, subtitle, align = 'center' }) => {
  const centered = align === 'center';

  return (
    <div className={centered ? 'flex flex-col items-center text-center' : 'flex flex-col items-start'}>
      <h2 className='text-4xl sm:text-5xl font-bold text-white flex items-baseline gap-3'>
        <span aria-hidden='true' className='font-mono text-base text-cyan-500'>{index}.</span>
        {title}
      </h2>
      <div className='accent-rule h-[3px] w-16 rounded-full mt-4' />
      {subtitle && (
        <p className='mt-5 text-lg text-gray-400 max-w-2xl'>{subtitle}</p>
      )}
    </div>
  );
};
export default SectionHeading;
