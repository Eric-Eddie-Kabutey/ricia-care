"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinkGroups, socialLinks } from "@/data/footer";


const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-gray-700"
    >
      <div className="container mx-auto px-4 md:px-0 pt-16 pb-8  lg:max-w-5xl xl:max-w-6xl">
        {/* --- Top Section: Logo and Links --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/assets/logo/site-logo.png" alt="Ricia Care Logo" width={150} height={40} />
            </Link>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center gap-4 text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-gray-900 mb-4">{group.title}</h3>
              <ul className="space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            Copyright &copy; {currentYear}, Ricia Care
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;