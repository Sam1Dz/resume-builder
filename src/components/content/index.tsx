/* CONTENT */
import ContentExperience from './Experience.tsx';

/* CONFIGS */
import ResumeBuilder from '../../configs/resume.ts';

export default function Content() {
  const ResumeData = ResumeBuilder;

  return (
    <main className="flex-1 px-4 pt-4">
      <header className="mb-8 flex h-24 flex-col justify-center">
        <h1 className="text-5xl font-bold">{ResumeData.profile.name}</h1>
        <p className="text-xl text-neutral-700">{ResumeData.profile.role}</p>
      </header>

      <section className="mb-4">
        <h2 className="text-lg font-medium">About Me</h2>
        <hr className="mt-1 mb-2 border-neutral-500" />
        <p className="text-base font-light">{ResumeData.profile.summary}</p>
      </section>

      <ContentExperience experiences={ResumeData.experiences} />
    </main>
  );
}
