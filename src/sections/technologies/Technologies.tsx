import React from 'react';
import { Card, Row, Col } from 'antd';

import SectionDivider from '../../components/divider/Divider';
import Title from '../../components/title/Title';

const { Meta } = Card;

const Technologies: React.FC = () => {
  interface ITechnologies {
    name: string;
    icon: string;
  }

  // TO DO: retornar do back
  const technologies: ITechnologies[] = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'React Native',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // React Native pode usar o mesmo ícone do React
    },
    {
      name: 'Redux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'TailwindCSS',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg ',
    },
    {
      name: 'SASS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'Nest.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nestjs/nestjs-original.svg',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Docker & Docker Compose',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
  ];

  return (
    <section id='tecnologias' className='bg-white py-12'>
      <div className='max-w-5xl mx-auto px-4'>
        <SectionDivider />
        <Title title='Tecnologias' />

        <Row gutter={[16, 16]} justify='center'>
          {technologies.map((tech, key) => (
            <Col xs={24} sm={12} md={8} lg={6} key={key}>
              <Card
                hoverable
                cover={
                  <img
                    alt={tech.name}
                    src={tech.icon}
                    style={{ padding: '20px', height: '100px' }}
                  />
                }
              >
                <Meta title={tech.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Technologies;
