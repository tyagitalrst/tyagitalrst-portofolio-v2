<script setup lang="ts">
const resume = useResumeData()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t" style="border-color: rgb(var(--border))">
    <div class="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row sm:px-6">
      <div>
        <p class="font-display text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-dark">tyagitalrst</p>
        <p class="mt-0.5 font-mono text-[10px]" style="color: rgb(var(--fg-muted)); opacity: 0.7">
          © {{ year }} Tyagita Larasati
        </p>
      </div>
      <div class="flex items-center gap-4 prose-muted">
        <a
          :href="`https://${resume.contact.github}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="transition-colors hover:text-accent dark:hover:text-accent-dark"
        >
          <Icon name="ph:github-logo-bold" class="h-[18px] w-[18px]" />
        </a>
        <a
          :href="`https://${resume.contact.linkedin}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="transition-colors hover:text-accent dark:hover:text-accent-dark"
        >
          <Icon name="ph:linkedin-logo-bold" class="h-[18px] w-[18px]" />
        </a>
        <a
          :href="`mailto:${resume.contact.email}`"
          aria-label="Email"
          class="transition-colors hover:text-accent dark:hover:text-accent-dark"
        >
          <Icon name="ph:envelope-bold" class="h-[18px] w-[18px]" />
        </a>
      </div>
    </div>
  </footer>
</template>
