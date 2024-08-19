import React from 'react';
import { Card, Tag, Button } from 'antd';
import type { IProject } from '../../../types/types';

const { Meta } = Card;

interface ProjectCardProps {
  project: IProject;
  onClick: () => void;
}
const ProjectCard = (React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card
      hoverable
      cover={
        <div className='overflow-hidden'>
          <img
            alt={project.title}
            src={project.image}
            style={{
              height: '200px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        </div>
      }
      style={{
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
      }}
      className='hover:scale-105'
    >
      <Meta title={project.title} />
      <div className='mt-2'>
        {project.technologies.map((tech) => (
          <Tag color='blue' key={tech} className='mt-2 py-1'>
            {tech}
          </Tag>
        ))}
      </div>
      <div className='border-t-4 border-sky-400 mb-2 mt-6'></div>
      <Button type='primary' className='mt-4 bg-sky-500 py-6' onClick={onClick}>
        Ver mais
      </Button>
    </Card>
  );
});

export default ProjectCard;
