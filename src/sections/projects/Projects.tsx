import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { IProject, DarkModeProps } from '../../common/interfaces';

import ProjectCard from '../../components/project/card/ProjectCard';
import ProjectModal from '../../components/project/modal/ProjectModal';
import SectionDivider from '../../components/divider/Divider';
import Title from '../../components/title/Title';

const Projects = ({ isDarkMode }: DarkModeProps) => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const openModal = (project: IProject): void => {
    setSelectedProject(project);
  };

  const closeModal = (): void => {
    setSelectedProject(null);
  };

  const projects: IProject[] = [
    {
      title: 'Consulta ViaCEP',
      image: 'https://i.postimg.cc/cLTzMT5y/viacep.png',
      technologies: ['Vue', 'TypeScript', 'Vite', 'Ant Design', 'Docker'],
      description:
        'Uma simples tela para consultar informações de qualquer CEP.',
      demo: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm95MmZmd3MyMWVobGlxeTAzcXF5emE2bnRyeTBvOXVjM29mNGx4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FCp5B8KnsTa6YB6IrG/giphy.gif',
      liveLink: 'https://consulta-viacep-frontend.vercel.app/',
      githubLink: 'https://github.com/Baizch/consulta-viacep-frontend',
    },
  ];

  return (
    <section
      id='projetos'
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-12`}
    >
      <div className='max-w-5xl mx-auto px-4'>
        <SectionDivider isDarkMode={isDarkMode} />
        <Title title='Projetos' isDarkMode={isDarkMode} />

        <Row gutter={[16, 16]} justify='center'>
          {projects.map((project, key) => (
            <Col xs={24} sm={12} md={8} lg={6} key={key}>
              <ProjectCard
                project={project}
                onClick={() => openModal(project)}
                isDarkMode={isDarkMode}
              />
            </Col>
          ))}
        </Row>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isVisible={!!selectedProject}
            onClose={closeModal}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
