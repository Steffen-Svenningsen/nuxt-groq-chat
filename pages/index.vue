<script setup lang="ts">
import { useChat } from 'ai/vue';

const { messages, input, handleSubmit } = useChat();
</script>

<template>
  <div class="flex flex-col w-full max-w-md py-12 px-4 mx-auto stretch box-border">
    <div v-for="m in messages" key="m.id" class="whitespace-pre-wrap my-8">
      <div class="m-header flex gap-2 items-center mb-2">
        <img class="w-8 h-8" v-if="m.role === 'assistant'" src="/pages/assets/images/chatbot.png" alt="AI">
        <img class="w-8 h-8" v-else src="/pages/assets/images/avatar.png" alt="User">
        {{ m.role === 'user' ? 'User: ' : 'AI: ' }}
      </div>
      <div>
        {{ m.content }}
      </div>
    </div>

    <form @submit="handleSubmit">
      <input
        class="fixed border-box bottom-0 w-full mx-auto max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        v-model="input"
        placeholder="Say something..."
      />
    </form>
  </div>
</template>
