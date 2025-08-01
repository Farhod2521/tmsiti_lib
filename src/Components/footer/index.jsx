import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import { IoLogoYoutube } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdAlternateEmail, MdCopyright, MdLocationPin } from 'react-icons/md';

import 'react-international-phone/style.css';
import logo from '../../assets/logotip.png';
import { LanguageContext } from '../../context/LanguageContext';
import MapLink from './MapLink';
import YandexMap from './yandexMap';
import { Map, YMaps } from '@pbe/react-yandex-maps';


const Footer = () => {
    const { t, language, setLanguage } = useContext(LanguageContext);

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <div className='max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  p-5 2xl:px-36 border-slate-500 border-t-2 max-xl:border-slate-500 mt-3 max-md:px-3'>

            <img className='w-16 h-16 mx-auto hidden max-md:flex' src={logo} alt="" />

            <div className='flex justify-between max-md:justify-center max-md:flex-col'>
                <div className='flex flex-col'>
                

                <ul className='flex flex-wrap wrap max-md:justify-around text-start'>
                    {t('navLinks').map((nav) => (
                        <li key={nav.id} className="flex justify-around   hover:scale-105 duration-1000 my-2">
                            <NavLink
                                to={nav.path}
                                className='mr-5 max-md:mx-1 text-xl max-md:text-lg max-sm:text-md font-be-vietnam text-slate-700 hover:text-blue-600 '
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                    document.title = nav.title;
                                }}
                            >
                                {nav.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="   flex mt-5    max-md:flex-col ">


                    <div className='flex  items-center mr-10'>
                        <Link to="/" className="bg-transparent border border-slate-800 hover:bg-slate-200 mr-4 max-md:mr-1  rounded-full  p-2 textblack">
                            <BsInstagram size={20} />
                        </Link>
                        <Link to="/" className="bg-transparent border border-slate-800 hover:bg-slate-200 mr-4 max-md:mr-1 rounded-full  p-2 text-slate-800">
                            <BsTelegram size={20} />
                        </Link>
                        <Link to="/" className="bg-transparent hover:bg-slate-200 border border-slate-800 mr-4 max-md:mr-1  rounded-full p-2 text-slate-800">
                            <BsTwitter size={20} />
                        </Link>
                        <Link to="/" className="bg-transparent hover:bg-slate-200 border border-slate-800 mr-4 max-md:mr-1  rounded-full p-2 text-slate-800">
                            <IoLogoYoutube size={20} />
                        </Link>
                        <Link to="=/" className="bg-transparent hover:bg-slate-200 border border-slate-800 mr-4 max-md:mr-1  rounded-full p-2 text-slate-800">
                            <GrFacebookOption size={20} />
                        </Link>
                    </div>
                    <div className='flex flex-wrap  gap-5 w-full md:text-center mt-4'>
                        <Link to="/" className=" flex      gap-2 items-center text-lg hover:text-blue-700 p-1 text-slate-800">
                            <MdAlternateEmail className='border p-1 w-8 h-8 rounded-full' /> <span>info@tmsiti.uz</span>
                        </Link>
                        <Link to="/" className=" flex      gap-2 items-center text-lg hover:text-blue-700 p-1 text-slate-800">
                            <FaPhone className='border p-1 w-8 h-8 rounded-full' /> <span>+998 71 209 79 00</span>
                        </Link>
                    </div>

                </div>

            </div>
            <div>
    <iframe 
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11981.905928438486!2d69.341948!3d41.341996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef466b1d2a92d%3A0x1fa3714a97987c89!2z0JjQvdGB0YLQuNGC0YPRgiDQs9C10L7Qu9C-0LPQuNC4INC4INCz0LXQvtGE0LjQt9C40LrQuCDQuNC8LiDQpS7QnC7QkNCx0LTRg9C70LvQsNC10LLQsCDQkNC60LDQtNC10LzQuNGPINCd0LDRg9C6INCg0KPQtw!5e0!3m2!1sru!2s!4v1723698012396!5m2!1sru!2s" 
  width="300" 
  height="200" 
  className='border border-2-blue-600' 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

</div>
            </div>
            <br />
            <br />
            <hr />
        
           

        </div>
    )
}

export default Footer