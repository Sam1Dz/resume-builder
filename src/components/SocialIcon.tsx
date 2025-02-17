/* REACT ICONS */
import { FaGithub, FaGitlab, FaLinkedinIn } from 'react-icons/fa6';

/* TYPES */
import type { ListIcons } from './SocialIcon.type.ts';
import type { IconBaseProps } from 'react-icons';

interface SocialIconProps extends IconBaseProps {
  icon: ListIcons;
}

export default function SocialIcon(props: SocialIconProps) {
  const { icon } = props;

  switch (icon) {
    case 'Github':
      return <FaGithub {...props} />;
    case 'Gitlab':
      return <FaGitlab {...props} />;
    case 'LinkedinIn':
      return <FaLinkedinIn {...props} />;
  }
}
