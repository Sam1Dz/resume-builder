/* CONTENT */
import AsideContact from './Contact.tsx';
import AsideEducation from './Education.tsx';
import AsideSkill from './Skill.tsx';
import AsideSocial from './Social.tsx';

/* CONFIGS */
import ResumeBuilder from '../../configs/resume.ts';

export default function Aside() {
  const ResumeData = ResumeBuilder;

  return (
    <aside className="h-[1122px] w-56 bg-neutral-900 px-4 pt-8 text-neutral-50">
      <div className="mb-8 flex h-24 justify-center">
        <img
          src={ResumeData.profile.photo}
          alt="y Photo"
          className="size-24 rounded-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        <AsideContact contact={ResumeData.contact} />
        <AsideEducation educations={ResumeData.educations} />
        <AsideSkill skills={ResumeData.skills} />
      </div>

      {ResumeData.socials && <AsideSocial socials={ResumeData.socials} />}
    </aside>
  );
}
