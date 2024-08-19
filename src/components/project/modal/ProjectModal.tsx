import React from 'react';
import { Modal, Button } from 'antd';
import type { IProject } from '../../../types/types';

interface ProjectModalProps {
  project: IProject | null;
  isVisible: boolean;
  onClose: () => void;
}

const ProjectModal = (React.FC<ProjectModalProps> = ({
  project,
  isVisible,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal
      title={project.title}
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Button
          key='live'
          href={project.liveLink}
          target='_blank'
          className='bg-sky-500 text-white py-6 mt-2'
        >
          Visitar Site
        </Button>,
        <Button
          key='code'
          href={project.githubLink}
          target='_blank'
          className='bg-sky-500 text-white py-6'
        >
          Ver Código no GitHub
        </Button>,
      ]}
    >
      <p className='mb-4'>{project.description}</p>
      <div>
        <img
          src={project.demo}
          alt={`${project.title} Demo`}
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>
    </Modal>
  );
});

export default ProjectModal;
