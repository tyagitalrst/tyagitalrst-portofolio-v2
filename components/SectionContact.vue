<script setup lang="ts">
const resume = useResumeData()

const links = computed(() => [
  {
    label: 'Email',
    value: resume.contact.email,
    href: `mailto:${resume.contact.email}`,
    icon: 'ph:envelope-bold',
  },
  {
    label: 'LinkedIn',
    value: resume.contact.linkedin,
    href: `https://${resume.contact.linkedin}`,
    icon: 'ph:linkedin-logo-bold',
    external: true,
  },
  {
    label: 'GitHub',
    value: resume.contact.github,
    href: `https://${resume.contact.github}`,
    icon: 'ph:github-logo-bold',
    external: true,
  },
  {
    label: 'Phone',
    value: resume.contact.phone,
    href: `tel:${resume.contact.phone.replace(/\s/g, '')}`,
    icon: 'ph:phone-bold',
  },
])
</script>

<template>
  <section id="contact" class="border-t" style="border-color: rgb(var(--border))">
    <div class="section">
      <p class="section-title">Contact</p>
      <p class="mb-8 max-w-xs text-[15px] leading-relaxed prose-muted">
        Available for new opportunities. Feel free to reach out via any channel below.
      </p>
      <div class="grid gap-3 sm:grid-cols-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="group flex items-center gap-3.5 rounded-xl border p-4 transition-all hover:border-accent/50 hover:bg-accent/5 dark:hover:border-accent-dark/40 dark:hover:bg-[rgba(181,242,61,0.05)]"
          style="border-color: rgb(var(--border)); background-color: rgb(var(--bg-subtle))"
        >
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-accent/10 dark:group-hover:bg-[rgba(181,242,61,0.1)]"
            style="background-color: rgb(var(--bg))"
          >
            <Icon :name="link.icon" class="h-[18px] w-[18px] text-accent dark:text-accent-dark" />
          </span>
          <div class="min-w-0">
            <p class="font-mono text-[9.5px] uppercase tracking-[0.16em] prose-muted">{{ link.label }}</p>
            <p class="mt-0.5 truncate text-sm font-medium" style="color: rgb(var(--fg))">{{ link.value }}</p>
          </div>
          <Icon
            name="ph:arrow-up-right-bold"
            class="ml-auto h-3.5 w-3.5 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100 dark:text-accent-dark"
          />
        </a>
      </div>
    </div>
  </section>
</template>
