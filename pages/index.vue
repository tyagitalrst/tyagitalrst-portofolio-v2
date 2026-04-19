<script setup lang="ts">
const resume = useResumeData()

useSeoMeta({
  title: `${resume.name} — ${resume.title}`,
  description: `Portfolio of ${resume.name}, a ${resume.title} specializing in Vue, TypeScript, and Golang. Based in Jakarta, Indonesia.`,
  ogTitle: `${resume.name} — ${resume.title}`,
  ogDescription: `Portfolio of ${resume.name}, a ${resume.title} specializing in Vue, TypeScript, and Golang.`,
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: `${resume.name} — ${resume.title}`,
  twitterDescription: `Portfolio of ${resume.name}, a ${resume.title} specializing in Vue, TypeScript, and Golang.`,
})

useSchemaOrg([
  definePerson({
    name: resume.name,
    jobTitle: resume.title,
    email: resume.contact.email,
    telephone: resume.contact.phone,
    sameAs: [
      `https://${resume.contact.linkedin}`,
      `https://${resume.contact.github}`,
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: resume.education.institution,
    },
  }),
])
</script>

<template>
  <main>
    <SectionHero />
    <SectionAbout />
    <SectionExperience />
    <SectionSkills />
    <SectionContact />
  </main>
</template>
