'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer p-10 bg-white text-base-content flex flex-wrap justify-between">
        <div className="max-w-sm">
          <p className="mt-4">
            Vertrouwd door elke klant. Heeft u een vraag? Neem contact met ons op, wij staan voor u klaar.
          </p>
          <div className="flex gap-4 mt-4">
            <a className="btn btn-circle btn-outline" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.379 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.556 4.897 4.897 0 0 1-2.229-.616v.06a4.916 4.916 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54 13.945 13.945 0 0 0 7.548 21c9.056 0 14.01-7.496 14.01-13.986 0-.213-.004-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a className="btn btn-circle btn-outline" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM4 7.75A3.75 3.75 0 0 1 7.75 4h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5zm8 1.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm4.75-2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
              </svg>
            </a>
            <a className="btn btn-circle btn-outline" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.2 0 1 1.2 1 2.6v18.8C1 22.8 2.2 24 4 24h16c1.8 0 3-1.2 3-2.6V2.6C23 1.2 21.8 0 20 0zM7.8 20H4.6V9h3.2v11zM6.2 7.5c-1 0-1.8-.8-1.8-1.8S5.2 3.9 6.2 3.9s1.8.8 1.8 1.8c0 1-.8 1.8-1.8 1.8zM20 20h-3.2v-5.7c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.8 1.4-.1.2-.1.5-.1.8V20H10v-11h3.2v1.5c.4-.7 1.3-1.7 3-1.7 2.2 0 3.8 1.5 3.8 4.6V20z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h6 className="footer-title">Get In Touch</h6>
          <p className="link link-hover">info@letstech.nl</p>
          <p className="link link-hover">+31 6 19114370</p>
          <p className="link link-hover">Rembrandtstraat 8, Venlo</p>
        </div>

        <div>
          <h6 className="footer-title">Snelle links</h6>
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/faq">FAQs</a>
          <a className="link link-hover" href="/prijzen">Prijzen</a>
        </div>

        <div>
          <h6 className="footer-title">Bedrijf</h6>
          <a className="link link-hover" href="/vacatures">Vacatures</a>
          <a className="link link-hover" href="/over-ons">Over ons</a>
          <a className="link link-hover" href="/contact">Contact</a>
        </div>

        <div>
          <h6 className="footer-title">Nieuwsbrief</h6>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Meld je aan op onze nieuwsbrief</span>
            </label>
            <div className="join">
              <input type="email" placeholder="Enter email..." className="input input-bordered join-item" />
              <button className="btn bg-black hover:bg-gray-800 text-white join-item">Meld me aan</button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-white text-base-content">
        <div>
          <p>Copyright © 2024 - All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
