<script setup lang="ts">
const resume = useResumeData()
const [firstName, lastName] = resume.name.split(' ')
</script>

<template>
  <section class="relative mx-auto max-w-content px-5 pb-14 pt-20 sm:px-6 md:pb-24 md:pt-32">
    <!-- Atmospheric glow -->
    <div
      class="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-accent opacity-[0.07] blur-3xl dark:opacity-[0.13]"
      aria-hidden="true"
    />

    <div class="relative">
      <!-- Role badge -->
      <div class="mb-8 flex items-center gap-3.5">
        <span class="h-px w-8 shrink-0 bg-accent dark:bg-accent-dark" />
        <p class="font-mono text-[10.5px] font-medium uppercase tracking-[0.26em] text-accent dark:text-accent-dark">
          {{ resume.title }}
        </p>
      </div>

      <!-- Name — responsive: 46px mobile → 60px sm → 72px md -->
      <h1 class="mb-8 font-display font-extrabold uppercase leading-[0.88] tracking-tight text-[2.875rem] sm:text-6xl md:text-7xl">
        <span class="block" style="color: rgb(var(--fg))">{{ firstName }}</span>
        <span class="block text-accent dark:text-accent-dark">{{ lastName }}</span>
      </h1>

      <p class="mb-9 max-w-[30rem] text-[15px] leading-relaxed prose-muted">
        {{ resume.about }}
      </p>

      <div class="flex flex-wrap gap-3">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 dark:bg-accent-dark dark:text-gray-900"
        >
          <Icon name="ph:envelope-bold" class="h-4 w-4" />
          Get in touch
        </a>
        <a
          href="/TyagitaLarasati_Resume.pdf"
          download
          class="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all hover:border-accent hover:text-accent active:scale-95 dark:hover:border-accent-dark dark:hover:text-accent-dark divider prose-muted"
        >
          <Icon name="ph:download-simple-bold" class="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>
