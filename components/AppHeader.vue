<template>
  <div class="flex items-center justify-center m-auto">
    <UHorizontalNavigation :links="items" :ui="{active: 'text-primary',icon: {active: 'text-primary'},}" class="w-fit border-b rounded-2xl border-gray-200 dark:border-gray-800 px-4 mb-14">
    </UHorizontalNavigation>
  </div>
</template>

<script lang="ts" setup>
const items = [{
  label: 'FearArt',
  avatar: {
    src: 'https://i.pinimg.com/originals/dc/ac/de/dcacde0288776fa7e6e0ece50633bfc4.gif',
    size: 'md'
  }
}, {
  label: 'Projects',
  icon: 'i-heroicons:folder-16-solid',
  to: '/projects',
}, {
  label: 'Tools',
  icon: 'i-heroicons:wrench-screwdriver-20-solid',
  to: '/tools'
}, {
  label: 'Expierience',
  icon: 'i-heroicons:cube-16-solid',
  to: '/expierience'
},{
  label: "Internet says",
  icon: "i-heroicons:globe-alt-20-solid",
  to: '/thoughts'
},]
</script>

<style scoped> 
</style>