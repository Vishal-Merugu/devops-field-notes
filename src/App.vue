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
      ><a
        class="playground-link"
        href="https://webvm.io/"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Linux playground in a new tab"
        ><svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          focusable="false"
          class="terminal-icon"
        >
          <path d="M2 3.5h12v9H2z" />
          <path d="m4.5 6 2 2-2 2M8.5 10h3" />
        </svg>
        <span>Playground ↗</span></a
      >
    </nav>
  </header>
  <main><RouterView /></main>
  <footer class="site-footer">
    <span>Markdown-first learning journal.</span
    ><span>Edit <code>days/day-01.md</code> → commit → publish.</span>
  </footer>
</template>
