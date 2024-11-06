<template>
  <div
    class="w-96 text-center flex flex-col justify-center m-auto p-[2px] bg-gray-900 h-full  relative card cursor-pointer overflow-hidden rounded-lg" 
    :style="{
      '--x' : `${x - (el?.offsetLeft ?? 0)}px`,
      '--y' : `${y - (el?.offsetTop ?? 0)}px`
    }"
    ref="el"
    @click="openUrl"
  >
    <div class="bg-black relative p-4 rounded-lg h-full" id="inner-card">
      <div class="flex flex-col">
        <div class="flex h-16 flex-grow-0 items-center align-middle justify-center mb-4">
          <img :src="image" class="m-auto" alt="none" />
        </div>
        <p class="text-gray-200 text-2xl">{{ title }}</p>
        <p class="break-words text-gray-200 text-left">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMouse } from '@vueuse/core';
import { ref } from 'vue';

// Access mouse position
const { x, y } = useMouse();
const el = ref<HTMLElement | null>(null);

// Define props
const props = defineProps<{
  title?: string,
  description?: string,
  url?: string,
  image?: string,
}>();

// Open URL in a new tab
const openUrl = () => {
  if (props.url) {
    window.open(props.url, '_blank');
  }
};
</script>

<style scoped>
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    200px circle at var(--x) var(--y),
    theme('colors.primary.DEFAULT'),
    transparent
  );
  pointer-events: none;
  border-radius: inherit;
}
.card, .card:hover {
  transition: 0.5s;
}
.card:hover {
 background: theme('colors.primary.DEFAULT');
}
</style>
