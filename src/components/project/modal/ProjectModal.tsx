import React from 'react';
import { Modal, Space } from 'antd';
import type { IProject } from '../../../common/interfaces';

import SectionDivider from '../../divider/Divider';

interface ProjectModalProps {
  project: IProject | null;
  isVisible: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isVisible,
  onClose,
  isDarkMode,
}) => {
  if (!project) return null;

  return (
    <Modal
      title={project.title}
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Space>
          <a href={project.liveLink} target='_blank' key='live'>
            <button
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } inline-flex items-center ${
                isDarkMode ? 'text-white' : 'text-black'
              } font-bold py-3 px-6 rounded-full border border-gray-300 shadow ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <span>Visitar site</span>
            </button>
          </a>
          <a key='code' href={project.githubLink} target='_blank'>
            <button
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } inline-flex items-center ${
                isDarkMode ? 'text-white' : 'text-black'
              } font-bold py-3 px-6 rounded-full border border-gray-300 shadow ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <span>Ver código no GitHub</span>
            </button>
          </a>
        </Space>,
      ]}
    >
      <SectionDivider isDarkMode={isDarkMode} />
      <p className='-mt-4 mb-4'>{project.description}</p>
      <div>
        <img
          src={project.demo}
          alt={`${project.title} Demo`}
          className='w-full h-auto mb-5 rounded-lg'
        />
      </div>
      <SectionDivider isDarkMode={isDarkMode} />
    </Modal>
  );
};

export default ProjectModal;
