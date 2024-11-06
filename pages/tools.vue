<template>
  <div class="flex flex-col items-center p-4 justify-center">
    <div class="grid grid-cols-2 gap-4 p-2">
      <SkillBlock
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :url="item.url"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "Nuxt3",
    description: "Nuxt is an open source framework that makes web development intuitive and powerful.",
    url: "https://nuxt.com",
    image: "/logo/nuxt.png"
  },
  {
    title: "Tailwindcss",
    description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    url: "https://nuxt.com",
    image: "/logo/tailwind.png"
  },
  {
    title: "Vue3",
    description: "An approachable, performant and versatile framework for building web user interfaces.",
    url: "https://vuejs.org/",
    image: "/logo/vue.png"
  },
  {
    title: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    url: "https://expressjs.com/",
    image: "/logo/express.png"
  },
  {
    title: "MongoDB",
    description: "Document database with the scalability and flexibility that you want with the querying and indexing that you need",
    url: "https://www.mongodb.com/",
    image: "/logo/mongo.png"
  },
  {
    title: "Bun",
    description: "All-in-one toolkit for JavaScript and TypeScript apps.",
    url: "https://bun.sh/",
    image: "/logo/bun.png"
  },
]
</script>

<style scoped>
</style>
