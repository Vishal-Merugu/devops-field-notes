<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/"
      ><span class="brand-mark">100</span
      ><span>Days <span class="slash">/</span> DevOps</span></RouterLink
    >
    <nav aria-label="Primary navigation">
      <RouterLink to="/">Journal index</RouterLink
      ><a
        href="https://github.com/Vishal-Merugu/devops-field-notes"
        target="_blank"
        rel="noreferrer"
        >Source ↗</a
      >
    </nav>
  </header>
  <main><RouterView /></main>
  <footer class="site-footer">
    <span>Markdown-first learning journal.</span
    ><span>Edit <code>days/day-01.md</code> → commit → publish.</span>
  </footer>
</template>
