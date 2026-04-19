<script setup lang="ts">
const resume = useResumeData()
</script>

<template>
  <section id="skills" class="border-t" style="border-color: rgb(var(--border))">
    <div class="section">
      <p class="section-title">Skills</p>
      <div class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="group in resume.skills"
          :key="group.label"
          class="card"
        >
          <h3 class="mb-3 font-mono text-[9.5px] font-medium uppercase tracking-[0.2em] prose-muted">
            {{ group.label }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="cursor-default rounded-md border px-2.5 py-1 text-[12.5px] font-medium transition-colors hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark"
              style="background-color: rgb(var(--bg)); border-color: rgb(var(--border)); color: rgb(var(--fg))"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
