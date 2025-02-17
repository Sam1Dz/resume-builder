import React from 'react';
import SocialIcon from '../SocialIcon.tsx';

/* TYPES */
import type { SocialType } from '../../configs/resume.type.ts';

interface AsideSocialProps {
  socials: SocialType[];
}

export default function AsideSocial({ socials }: AsideSocialProps) {
  return (
    <React.Fragment>
      <hr className="mt-4 mb-2 border-neutral-500" />
      <section className="flex flex-row justify-center gap-2">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            className="rounded-full bg-neutral-50 p-1.5"
          >
            <SocialIcon icon={social.icon} className="text-neutral-950" />
          </a>
        ))}
      </section>
    </React.Fragment>
  );
}
