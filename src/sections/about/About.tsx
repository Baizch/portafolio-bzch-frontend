import React from 'react';
import { Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { DarkModeProps } from '../../common/interfaces';

import { scrollToSection } from '../../utils/scrollToSection';

import Title from '../../components/title/Title';

const About = ({ isDarkMode }: DarkModeProps) => (
  <section
    id='sobre'
    className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-12`}
  >
    <div className='max-w-full mx-auto px-4'>
      <Title title='Sobre mim' isDarkMode={isDarkMode} />
      <p
        className={`text-lg ${
          isDarkMode ? 'text-white' : 'text-black'
        } leading-relaxed mb-6`}
      >
        Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
        busca de novos conhecimentos e desafios. Sou formado em{' '}
        <strong>Análise e Desenvolvimento de Sistemas</strong> e conto com 3
        anos de experiência profissional.
      </p>
      <p
        className={`text-lg ${
          isDarkMode ? 'text-white' : 'text-black'
        } leading-relaxed mb-6`}
      >
        Se você tem uma ideia ou projeto em mente, entre em contato! Vamos bater
        um papo e transformar essa ideia em realidade.
      </p>
      <Space>
        <a
          href='/CV_Franco_Baisch.pdf'
          download='Franco-Baisch-Full-Stack-Developer-2024.pdf'
        >
          <button
            className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } inline-flex items-center ${
              isDarkMode ? 'text-white' : 'text-black'
            } font-bold py-3 px-6 rounded-full border border-gray-300 shadow 
            ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
             `}
          >
            <Space>
              <DownloadOutlined />
              <span>Baixar CV</span>
            </Space>
          </button>
        </a>
        <button
          onClick={() => scrollToSection('contato', 80)}
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
            isDarkMode ? 'text-white' : 'text-black'
          } font-bold py-3 px-4 rounded-full border border-gray-300 shadow ${
            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <span>Entrar em contato</span>
        </button>
      </Space>
    </div>
  </section>
);

export default About;
