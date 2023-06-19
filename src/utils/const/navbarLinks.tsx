import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import type { NavLinkList } from '../../components/NavMenu/types';

export const navbarLinks: NavLinkList = [
  {
    aria: 'Github Profile',
    icon: <FaGithub />,
    href: 'https://github.com/EiffelIKE',
    description: 'Github Profile',
  },
  {
    aria: 'LinkedIn Profile',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/jos%C3%A9-carlos-p%C3%A9rez-trujillo-b88a99230',
    description: 'LinkedIn Profile',
  },
  {
    aria: 'Google EMail',
    icon: <FaEnvelope />,
    href: 'mailto:jctrujillo759@gmail.com',
    description: 'Email',
  },
];
