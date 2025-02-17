/* TYPES */
import type { EducationType } from '../../configs/resume.type.ts';

interface AsideEducationProps {
  educations: EducationType[];
}

export default function AsideEducation({ educations }: AsideEducationProps) {
  return (
    <section>
      <h2 className="mb-2 text-lg font-medium">Education</h2>
      <ul className="relative ml-2 border-s border-neutral-50">
        {educations.map((education, index) => (
          <li key={index} className="ms-4 mb-2">
            <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-neutral-50" />
            <p className="text-base">{education.school}</p>
            <p className="text-sm font-light">{education.degree}</p>
            <p className="text-xs font-light text-neutral-300">
              {education.date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
