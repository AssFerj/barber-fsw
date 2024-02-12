import React from 'react';

interface FooterProps {
  property?: string;
}

const Footer: React.FC<FooterProps> = ({ property }) => {
  return (
    <React.Fragment>
      <div className='w-full bg-secondary py-6 px-5 flex gap-3 justify-evenly items-center'>
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()}
          {' '}All rights reserved.
        </p>
        <p className='text-gray-400'>
          Made with ❤️ by{' '}
          <a className='text-gray-300' href='https://assisjuniorwm.com.br' target='_blank' rel='noopener noreferrer'>
            Assis Junior W&M
          </a>
        </p>
        <p className='text-gray-400'>
          <a className='text-gray-300' href='https://github.com/AssFerj' target='_blank' rel='noopener noreferrer'>
            View on GitHub
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
