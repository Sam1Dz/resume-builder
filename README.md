<div align="center">
  <br />
  <img src="https://i.imgur.com/5UAIpbQ.png" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/react.js-006879?style=for-the-badge&logo=react&logoColor=white" alt="react.js" />
    <img src="https://img.shields.io/badge/tailwind_css-1c6586?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="tailwind_css" />
    <img src="https://img.shields.io/badge/-typescript-3b608f?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </div>

  <h3 align="center">Resume Builder</h3>

  <div align="center">
    Build resume automatically via config. (This project created to showcase about using React.js Framework with Typescript and Tailwind CSS) 
  </div>
</div>

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [bun](https://bun.sh/)

**Cloning the Repository**

```bash
git clone https://github.com/Sam1Dz/resume-builder.git
cd resume-builder
```

**Installation**

Install the project dependencies using bun:

```bash
bun install
```

**Running the Project**

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Making your own resume

Make sure you're already Cloning and Running the Project on your machine. you can follow [Quick Start](#quick-start) if you haven't.

**Open Config**

Navigate to `src/configs/resume.ts` and modify it with your profile

**Snippets**

```typescript
const ResumeBuilder: ResumeBuilderType = {
  profile: {
    // Your name
    name: '',

    // Your job role
    role: '',

    // Your Profile Photo
    // You can use link to an image or import it from "/public" folder
    photo: '',

    // Your Summary or About Me
    summary: '',
  },
  contact: {
    // Your Email Address
    mail: '',

    // Your Current Location
    // ex. East Jakarta, Indonesia
    address: '',

    // Your Phone Number
    tel: {
      number: '', // Phone Number
      type: '', // 'whatsapp' or 'phone'
    },
  },

  // Your Education History
  educations: [
    {
      school: '', // School Name
      degree: '', // ex. Universitas Brawijaya
      date: '', // ex. 2019 or 2016-2019
    },
  ],

  // Your Skillsets
  // ex. ['Typescript', 'ReactJS', 'Tailwind CSS']
  skills: [],

  // Your Social Media
  socials: [
    {
      href: '', // Link

      // Social Icon
      // List of icons can be found at "/src/components/SocialIcon.type.ts"
      icon: '',
    },
  ],

  // Your Work Experience
  experiences: [
    {
      company: '', // Company name
      jobType: {
        // Job Tyoe
        // Type is 'freelance' | 'internship' | 'contract' | 'full-time' | 'part-time'
        type: '',

        // Naming translate of "jobType.type"
        // Ex. "Freelance" (English) >> "Pekerja Lepas" (Bahasa Indonesia)
        translate: '',
      },
      date: '', // ex. Feb 2024 - Feb 2025
      description: '', // Job description
    },
  ],
};
```

## License

The content of this repository is provided
under the [MIT](LICENSE) license by Sam1Dz.
