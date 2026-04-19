<script setup lang="ts">
const resume = useResumeData()
</script>

<template>
  <section id="about" class="border-t" style="border-color: rgb(var(--border))">
    <div class="section">
      <p class="section-title">About</p>
      <div class="grid gap-10 md:grid-cols-[1fr_13rem]">
        <p class="text-[15px] leading-relaxed prose-muted">
          {{ resume.about }}
        </p>
        <div>
          <h3 class="mb-3 font-mono text-[9.5px] font-medium uppercase tracking-[0.2em] prose-muted">Education</h3>
          <div class="card border-l-[3px] border-l-accent dark:border-l-accent-dark" style="padding-left: 1rem">
            <p class="text-sm font-semibold" style="color: rgb(var(--fg))">
              {{ resume.education.institution }}
            </p>
            <p class="mt-1 text-xs leading-relaxed prose-muted">
              {{ resume.education.degree }}
            </p>
            <p class="mt-2 font-mono text-[10px]" style="color: rgb(var(--fg-muted)); opacity: 0.75">
              {{ resume.education.period }}<br>{{ resume.education.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
