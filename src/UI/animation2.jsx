import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/logotip/66.jpg';
import logo2 from '../assets/logotip/65.png';
import logo3 from '../assets/logotip/67.jpg';
import logo4 from '../assets/logotip/68.jpg';
import { LanguageContext } from '../context/LanguageContext';

const slides = [
  { icon: logo1, link: "https://www.tmsiti.uz/" },
  { icon: logo2, link: "https://search.ebscohost.com/" },
  { icon: logo3, link: "https://nbmgu.ru/" },
  { icon: logo4, link: "https://nbmgu.ru/" },
];

const SliderDesign2 = () => {
  const { t } = useContext(LanguageContext);

  // rasmni ikki marta duplication qilish seamless loop uchun
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative overflow-hidden py-10 mx-auto" style={{ width: '100%' }}>
      <h1 className="text-center text-4xl font-semibold mb-8 text-slate-950">
        {t('linksName')}
      </h1>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          style={{ width: `${duplicatedSlides.length * 280}px` }}
        >
          {duplicatedSlides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-64 h-44 m-4 rounded-lg shadow hover:shadow-xl bg-white"
            >
              <img
                src={slide.icon}
                alt={`slide-${index}`}
                className="w-full h-full object-contain p-5"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SliderDesign2;
