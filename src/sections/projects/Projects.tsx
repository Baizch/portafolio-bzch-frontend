import React, { useState } from 'react';
import { Row, Col } from 'antd';
import type { IProject } from '../../types/types';

import ProjectCard from '../../components/project/card/ProjectCard';
import ProjectModal from '../../components/project/modal/ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const openModal = (project: IProject) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
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
    <section id='projetos' className='bg-white py-12'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* TO DO: componetizar */}
        <div className='border-t-4 border-sky-200 mb-8'></div>

        {/* TO DO: componetizar */}
        <h2 className='text-3xl font-bold text-black mb-8 text-center'>
          Projetos
        </h2>

        <Row gutter={[16, 16]} justify='center'>
          {projects.map((project, key) => (
            <Col xs={24} sm={12} md={8} lg={6} key={key}>
              <ProjectCard
                project={project}
                onClick={() => openModal(project)}
              />
            </Col>
          ))}
        </Row>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isVisible={!!selectedProject}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
