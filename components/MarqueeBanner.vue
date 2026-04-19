<script setup lang="ts">
const items = [
  'Vue', 'TypeScript', 'Golang', 'React', 'Frontend', 'Backend',
  'REST APIs', 'Pinia', 'Nuxt', 'Python', 'PostgreSQL', 'Open to Work',
]
</script>

<template>
  <div
    class="overflow-hidden border-y"
    style="border-color: rgb(var(--border)); background-color: rgb(var(--bg-subtle))"
    aria-hidden="true"
  >
    <div class="marquee-run flex w-max items-center py-3">
      <template v-for="pass in 2" :key="pass">
        <span
          v-for="item in items"
          :key="`${pass}-${item}`"
          class="flex shrink-0 items-center gap-5 px-5"
        >
          <span class="font-mono text-[10.5px] uppercase tracking-[0.22em] prose-muted whitespace-nowrap">{{ item }}</span>
          <span class="h-1 w-1 rounded-full bg-accent opacity-50 dark:bg-accent-dark" />
        </span>
      </template>
    </div>
  </div>
</template>
