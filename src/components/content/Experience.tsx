/* TYPES */
import type { ResumeBuilderType } from '../../configs/resume.type.ts';

interface ContentExperienceProps {
  experiences: ResumeBuilderType['experiences'];
}

export default function ContentExperience({
  experiences,
}: ContentExperienceProps) {
  return (
    <section>
      <h2 className="text-lg font-medium">Experiences</h2>
      <hr className="mt-1 mb-2 border-neutral-500" />
      <ul className="list-disc space-y-1 pl-4">
        {experiences.map((experience, index) => (
          <li key={index}>
            <h3 className="text-base font-normal">{experience.company}</h3>
            <span className="text-sm font-normal text-neutral-700">
              {experience.jobType.translate}&nbsp;&#x2022;&nbsp;
              {experience.date}
            </span>
            <p className="mt-1 ml-4 text-base font-light">
              {experience.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
