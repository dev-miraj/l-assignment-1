import React from 'react';
import AirbnbIcon from '../icons/AirbnbIcon';
import GoogleIcon from '../icons/GoogleIcon';
import MailchimpIcon from '../icons/MailchimpIcon';
import MicrosoftIcon from '../icons/MicrosoftIcon';
import SpotifyIcon from '../icons/SpotifyIcon';
import WikipediaIcon from '../icons/WikipediaIcon';

const Companies = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex items-center lg:justify-center">
            <AirbnbIcon className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <GoogleIcon className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MicrosoftIcon className="h-8 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <SpotifyIcon className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MailchimpIcon className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <WikipediaIcon className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;