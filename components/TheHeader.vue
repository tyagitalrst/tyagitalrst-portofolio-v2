<script setup lang="ts">
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b backdrop-blur-md"
    style="border-color: rgb(var(--border)); background-color: rgb(var(--bg) / 0.9)"
  >
    <div class="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-6">
      <a
        href="#"
        class="font-display text-sm font-bold uppercase tracking-wider text-accent dark:text-accent-dark"
        aria-label="Tyagita Larasati – back to top"
      >
        tyagitalrst
      </a>

      <nav class="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-[13px] font-medium transition-colors hover:text-accent dark:hover:text-accent-dark prose-muted"
        >
          {{ link.label }}
        </a>
        <ThemeToggle />
      </nav>

      <div class="flex items-center gap-1 md:hidden">
        <ThemeToggle />
        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[rgb(var(--bg-subtle))] prose-muted"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" class="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isMenuOpen" class="border-t md:hidden" style="border-color: rgb(var(--border))">
        <nav class="flex flex-col gap-0.5 px-5 py-3 sm:px-6" aria-label="Mobile navigation">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[rgb(var(--bg-subtle))] hover:text-accent dark:hover:text-accent-dark prose-muted"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
