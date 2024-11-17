<template>
  <div class="text-white flex items-center justify-center flex-col">
    <p class="font text-2xl mb-8 ">Leave a message for the internet</p>
    <div class="flex items-center flex-col mb-16">
      <UInput v-model="name" placeholder="Name" variant="outline" class="mb-3"  color="black" :ui="{ variant: { outline: 'dark:ring-gray-800'}}"></UInput>
      <UTextarea v-model="text" placeholder="Text" variant="outline" class="mb-3" size="xl" autoresize color="black" :ui="{ variant: { outline: 'dark:ring-gray-800'}}" ></UTextarea>
      <UButton :loading="isSubmitDisabled" @click="sendMessage">Submit</UButton>
    </div>
  </div>
  <div class="flex gap-4 flex-col items-center">
    <div v-for="post in posts" class="flex flex-col border-b rounded-2xl border-gray-200 dark:border-gray-800 w-1/3 px-4 pt-4 pb-1 text-center">
      <p class="text-3xl mb-2"> {{ post.name }} </p>
      <div class="quotes pl-4 mb-4 border-l-2 text-left">
        <p class="text-l"> {{ post.text }}</p>
      </div>
      <p class="text-xs text-right"> {{ post.timestamp }}</p>
    </div>
  </div>
  <title>Internet Thoughts </title>
</template>

<script lang="ts" setup>
import type { Post } from '~/types';
const isSubmitDisabled = ref(false)
const name = ref("")
const text = ref("")
const toast = useToast()
const posts = ref<Array<Post>>()
function sendMessage() {
  if (!name.value || !text.value) {
    toast.add({
      title: "Error",
      description: "Fields can't be empty",
      icon: "i-heroicons:no-symbol",

    })
    return
  }
  isSubmitDisabled.value = true; // Disable button
  $fetch('/api/message', {
    method: "POST",
    body: {
      'name': name.value,
      'text': text.value,
      'timestamp': new Date()
    }
  }).then(() => {
    // Clear input fields after successful request
    name.value = "";
    text.value = "";

    // Re-enable button after 5 seconds
    setTimeout(() => {
      isSubmitDisabled.value = false;
    }, 5000); // 5000ms = 5 seconds
  });
  fetchData()
}
onMounted(async () => {
  await fetchData()
});

async function fetchData() {
  // @ts-ignore
  posts.value = await $fetch('/api/message', {
    method: "GET"
  })
  posts.value = posts.value?.reverse()
}
</script>
<style>
.font {
  font-family: 'DM Sans';
}
</style>