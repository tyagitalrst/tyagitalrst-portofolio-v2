<script setup lang="ts">
import type { ExperienceItem } from '~/composables/useResumeData'

defineProps<{ item: ExperienceItem }>()
</script>

<template>
  <article class="relative pl-6">
    <!-- Timeline dot -->
    <span
      class="absolute left-0 top-[7px] h-[9px] w-[9px] rounded-full bg-accent dark:bg-accent-dark ring-[3px] ring-[rgb(var(--bg))]"
      aria-hidden="true"
    />

    <div class="mb-0.5 flex flex-wrap items-baseline gap-x-1.5">
      <h3 class="text-[15px] font-semibold" style="color: rgb(var(--fg))">
        {{ item.role }}
      </h3>
      <span v-if="item.type" class="font-mono text-[10.5px] prose-muted">({{ item.type }})</span>
    </div>
    <p class="mb-1 text-sm font-semibold text-accent dark:text-accent-dark">{{ item.company }}</p>
    <p class="mb-3.5 font-mono text-[10.5px]" style="color: rgb(var(--fg-muted)); opacity: 0.8">
      {{ item.period }} · {{ item.location }}
    </p>
    <ul class="space-y-2">
      <li
        v-for="(bullet, i) in item.bullets"
        :key="i"
        class="flex gap-3 text-[14px] leading-relaxed prose-muted"
      >
        <span class="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent opacity-50 dark:bg-accent-dark" aria-hidden="true" />
        {{ bullet }}
      </li>
    </ul>
  </article>
</template>
