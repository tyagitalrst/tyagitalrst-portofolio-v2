export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  type?: string
  bullets: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface ResumeData {
  name: string
  title: string
  contact: {
    email: string
    phone: string
    linkedin: string
    github: string
  }
  about: string
  education: {
    institution: string
    degree: string
    location: string
    period: string
  }
  experience: ExperienceItem[]
  skills: SkillGroup[]
}

export function useResumeData(): ResumeData {
  return {
    name: 'Tyagita Larasati',
    title: 'Software Engineer',
    contact: {
      email: 'tyagitalarasati@gmail.com',
      phone: '+62 859-4659-5470',
      linkedin: 'linkedin.com/in/tyagitalrst',
      github: 'github.com/tyagitalrst',
    },
    about:
      "I'm a Software Engineer with 6+ years of experience building performant, scalable web applications. I specialize in frontend development with Vue and TypeScript, and I'm equally comfortable working on backend systems with Golang. I enjoy writing clean, maintainable code and collaborating closely with cross-functional teams to ship great products.",
    education: {
      institution: 'University of Indonesia',
      degree: 'Bachelor of Computer Science',
      location: 'Depok, Indonesia',
      period: 'Aug 2016 – Aug 2020',
    },
    experience: [
      {
        role: 'Software Engineer',
        type: 'Part-time',
        company: 'AssetFindr',
        location: 'Jakarta, Indonesia',
        period: 'Jun 2024 – Present',
        bullets: [
          'Designed and developed RESTful APIs using Golang, ensuring high performance, scalability, and maintainability.',
          'Built responsive and performant UI features using TypeScript, Vue, Pinia, HTML, and (S)CSS.',
          'Conducted debugging and bug fixes across both backend and frontend codebases.',
          'Collaborated closely with the team leader on a daily basis to identify, manage, and mitigate risks and issues across features.',
        ],
      },
      {
        role: 'Front-end Engineer',
        company: 'Advotics – Supply Chain SaaS',
        location: 'Jakarta, Indonesia',
        period: 'Aug 2020 – Present',
        bullets: [
          'Developed and maintained performant, scalable UI features using JavaScript (ES6), Vue, Vuex, HTML, and (S)CSS.',
          'Performed thorough debugging, bug fixes, and code reviews to uphold code quality standards.',
          'Worked cross-functionally with engineers, designers, and product managers to deliver features on time while proactively managing risks and opportunities.',
        ],
      },
      {
        role: 'Front-end Engineer Intern',
        company: 'Urbanhire',
        location: 'Jakarta, Indonesia',
        period: 'Jun 2019 – Aug 2019',
        bullets: [
          'Revamped the Urbanhire website and developed new WordPress templates, implementing UI/UX design mock-ups into responsive code for mobile and desktop.',
          'Worked closely with designers using HTML, SASS, LESS, Jade, JavaScript, and PHP.',
        ],
      },
    ],
    skills: [
      {
        label: 'Languages',
        items: ['JavaScript (ES6)', 'TypeScript', 'HTML / (S)CSS', 'Golang', 'Python', 'Java', 'Kotlin', 'SQL (Postgres)'],
      },
      {
        label: 'Frameworks',
        items: ['Vue', 'React', 'Django REST', 'Django Web'],
      },
      {
        label: 'Developer Tools',
        items: ['Git', 'VS Code', 'GoLand', 'IntelliJ', 'Android Studio'],
      },
      {
        label: 'Design & PM',
        items: ['Figma', 'Jira', 'ClickUp'],
      },
    ],
  }
}
