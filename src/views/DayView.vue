<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { days, getDayMarkdown } from "../data/journal";
import { markdownToHtml } from "../composables/useMarkdown";

const route = useRoute();
const dayNumber = computed(() => Number(route.params.day));
const meta = computed(() => days.find((day) => day.day === dayNumber.value));
const raw = computed(() =>
  meta.value ? getDayMarkdown(dayNumber.value) : undefined,
);
const html = computed(() =>
  raw.value ? markdownToHtml(raw.value).replace(/^<h1>.*?<\/h1>/, "") : "",
);
</script>

<template>
  <div v-if="meta && raw" class="day-page page-wrap">
    <div class="day-back">
      <RouterLink to="/">← Back to journal</RouterLink
      ><span>DAY {{ String(dayNumber).padStart(2, "0") }} / 100</span>
    </div>
    <article class="markdown-entry">
      <header>
        <p class="eyebrow">{{ meta.area }} · {{ meta.status }}</p>
        <h1>{{ meta.title }}</h1>
        <p class="entry-note">
          This entry is a template. Replace the prompts with notes from your own
          work.
        </p>
      </header>
      <div class="markdown-body" v-html="html"></div>
    </article>
  </div>
  <div v-else class="missing-entry page-wrap">
    <p class="eyebrow">ENTRY NOT FOUND</p>
    <h1>There is no day {{ dayNumber }} yet.</h1>
    <RouterLink class="button button-dark" to="/"
      >Return to the index</RouterLink
    >
  </div>
</template>
