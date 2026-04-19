<script setup lang="ts">
const resume = useResumeData()
</script>

<template>
  <section id="experience" class="border-t" style="border-color: rgb(var(--border))">
    <div class="section">
      <p class="section-title">Experience</p>
      <div class="relative space-y-10 before:absolute before:bottom-0 before:left-[4px] before:top-2 before:w-px before:bg-[rgb(var(--border))]">
        <ExperienceCard
          v-for="(item, i) in resume.experience"
          :key="i"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
