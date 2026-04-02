import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import React from 'react'

const Footer = () => {
    const links = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Contact', href: '/contact' },
    ];

    const socials = [
      {
        href: "https://www.facebook.com/pgjoe",
        icon: IconBrandFacebook,
        extraClass: "",
      },
      {
        href: "https://www.twitter.com/pgjoe",
        icon: IconBrandTwitter,
      },
      {
        href: "https://www.instagram.com/pgjoe",
        icon: IconBrandInstagram,
      },
      {
        href: "https://www.linkedin.com/company/pgjoe",
        icon: IconBrandLinkedin,
      },
    ];
  return (
    <div className="h-fit w-full mr-4 border rounded-xl border-gray-200 backdrop-blur-md bg-white/75 bg-red-50">
      <div className="flex flex-row justify-between items-center h-fit p-4">
        <div className=" w-[50%]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 font-extrabold hover:text-gray-900 mr-8"
            >
              {link.name}
            </a>
          ))}
          <p className="text-gray-600">© 2023 PG Joe. All rights reserved.</p>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-row">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`hover:text-gray-900 mx-2 bg-black text-white rounded-full p-2`}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Footer