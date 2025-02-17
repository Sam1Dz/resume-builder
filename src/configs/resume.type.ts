import type { ListIcons } from '../components/SocialIcon.type.ts';

export type TelType = 'whatsapp' | 'mobile';
export interface JobType {
  type: 'freelance' | 'internship' | 'contract' | 'full-time' | 'part-time';
  translate: string;
}
export interface EducationType {
  school: string;
  degree: string;
  date: string;
}
export interface SocialType {
  icon: ListIcons;
  href: string;
}

export interface ResumeBuilderType {
  profile: {
    name: string;
    role: string;
    photo: string;
    summary: string;
  };
  contact: {
    mail: string;
    tel: {
      number: string;
      type: TelType;
    };
    address: string;
  };
  educations: EducationType[];
  skills: string[];
  experiences: {
    company: string;
    jobType: JobType;
    date: string;
    description?: string;
  }[];
  socials?: SocialType[];
}
