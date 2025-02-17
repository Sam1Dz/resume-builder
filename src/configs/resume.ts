import ProfilePhoto from '/photo.png';

/* TYPES */
import type { ResumeBuilderType } from './resume.type.ts';

const ResumeBuilder: ResumeBuilderType = {
  profile: {
    name: 'John Doe',
    role: 'Programmer',
    photo: ProfilePhoto,
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor metus odio, eget viverra magna condimentum in. Vestibulum dignissim arcu rhoncus, vehicula leo a, vulputate dui. Etiam lobortis congue pellentesque. Proin vitae tellus risus. Nunc sit amet malesuada neque, ut fermentum nulla. Cras dapibus eu massa consequat faucibus. Etiam lobortis dolor eget nibh iaculis, a tempus massa suscipit. ',
  },
  contact: {
    mail: 'mail@example.com',
    address: 'Indonesia',
    tel: {
      number: '+6282361459558',
      type: 'whatsapp',
    },
  },
  educations: [
    {
      school: 'Dummy 1',
      degree: 'School Degree 1',
      date: '2024',
    },
    {
      school: 'Dummy 2',
      degree: 'School Degree 2',
      date: '2021 - 2024',
    },
  ],
  skills: [
    'JavaScript',
    'ReactJS',
    'Tailwind CSS',
    'Front-End Developer',
    'Dummy Skill',
  ],
  socials: [
    {
      href: 'https://github.com/Sam1Dz',
      icon: 'Github',
    },
    {
      href: 'https://gitlab.com/Sam1Dz',
      icon: 'Gitlab',
    },
    {
      href: 'https://www.linkedin.com/in/pratama-d-59b0ba128/',
      icon: 'LinkedinIn',
    },
  ],
  experiences: [
    {
      company: 'Freelancer Job',
      jobType: {
        type: 'freelance',
        translate: 'Freelance',
      },
      date: 'Feb 2024 - Feb 2025',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor metus odio, eget viverra magna condimentum in. Vestibulum dignissim arcu rhoncus, vehicula leo a, vulputate dui.',
    },
    {
      company: 'Contract Job',
      jobType: {
        type: 'contract',
        translate: 'Contract',
      },
      date: 'Feb 2023 - Feb 2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor metus odio, eget viverra magna condimentum in. Vestibulum dignissim arcu rhoncus, vehicula leo a, vulputate dui.',
    },
    {
      company: 'Internship Job',
      jobType: {
        type: 'internship',
        translate: 'Internship',
      },
      date: 'Feb 2022 - Feb 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor metus odio, eget viverra magna condimentum in. Vestibulum dignissim arcu rhoncus, vehicula leo a, vulputate dui.',
    },
  ],
};

export default ResumeBuilder;
