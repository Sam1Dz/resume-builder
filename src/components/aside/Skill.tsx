/* TYPES */
import type { ResumeBuilderType } from '../../configs/resume.type.ts';

interface AsideSkillProps {
  skills: ResumeBuilderType['skills'];
}

export default function AsideSkill({ skills }: AsideSkillProps) {
  return (
    <section>
      <h2 className="mb-2 text-lg font-medium">Skill</h2>
      <ul className="list-inside list-disc space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm font-light">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
