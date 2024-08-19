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
      <div style={{ padding: '47.69% 0 0 0', position: 'relative' }}>
        <iframe
          src='https://player.vimeo.com/video/997800635?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          title='viacep-demo'
        ></iframe>
      </div>
      <script src='https://player.vimeo.com/api/player.js'></script>
    </Modal>
  );
});

export default ProjectModal;
