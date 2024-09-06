import React from 'react';
import { Card, Tag, Button } from 'antd';
import { IProject, DarkModeProps } from '../../../common/interfaces';

import SectionDivider from '../../divider/Divider';

const { Meta } = Card;

interface ProjectCardProps extends DarkModeProps {
  project: IProject;
  onClick: () => void;
}
const ProjectCard = ({ project, onClick, isDarkMode }: ProjectCardProps) => {
  return (
    <Card
      hoverable
      cover={
        <div className='overflow-hidden'>
          <img alt={project.title} src={project.image} />
        </div>
      }
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
        isDarkMode ? 'border-gray-600' : 'border-gray-300'
      } transition ease-in-out duration-300 hover:scale-105 border ${
        isDarkMode ? 'border-gray-600' : 'border-gray-300'
      }`}
    >
      <Meta title={project.title} />
      <div className='mt-2 mb-6'>
        {project.technologies.map((tech) => (
          <Tag
            color={`${isDarkMode ? '#374151' : '#0284c7'}`}
            key={tech}
            className='mt-2 py-1'
          >
            {tech}
          </Tag>
        ))}
      </div>
      <SectionDivider isDarkMode={isDarkMode} />
      <button
        className={`${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } inline-flex items-center ${
          isDarkMode ? 'text-white' : 'text-black'
        } font-bold py-3 px-6 rounded-full border border-gray-300 shadow ${
          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
        }`}
        onClick={onClick}
      >
        <span>Ver mais</span>
      </button>
    </Card>
  );
};

export default ProjectCard;
