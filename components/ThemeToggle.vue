<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    :aria-label="`Switch to ${colorMode.value === 'dark' ? 'light' : 'dark'} mode`"
    class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[rgb(var(--bg-subtle))] hover:text-accent dark:hover:text-accent-dark prose-muted"
    @click="toggle"
  >
    <Icon v-if="colorMode.value === 'dark'" name="ph:sun-bold" class="h-5 w-5" />
    <Icon v-else name="ph:moon-bold" class="h-5 w-5" />
  </button>
</template>
