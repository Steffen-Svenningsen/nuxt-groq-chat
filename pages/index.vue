<script setup lang="ts">
import { useChat } from 'ai/vue';
import { ref, onMounted } from 'vue';

const { messages, input, handleSubmit } = useChat();
const textarea = ref(null);

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && event.shiftKey) {
    event.preventDefault();
    input.value += '\n'; // Append a newline character
    adjustTextareaHeight();
  } else if (event.key === 'Enter' && !event.shiftKey) {
    handleSubmit;
    resetTextareaHeight();
  }
};

const clickSubmit = (event: any) => {
  handleSubmit;
  resetTextareaHeight();
}

const adjustTextareaHeight = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto';
    textarea.value.style.height = `${textarea.value.scrollHeight}px`;
    textarea.scrollTop = textarea.scrollHeight;
  }
};

const resetTextareaHeight = () => {
  textarea.value.style.height = '40px';
}

onMounted(() => {
  adjustTextareaHeight();
});
</script>

<template>
  <div class="flex flex-col w-full max-w-2xl pb-20 pt-12 px-4 mx-auto stretch box-border relative">
    <div v-for="m in messages" key="m.id" class="whitespace-pre-wrap my-8">
      <div class="m-header flex gap-2 items-center mb-2">
        <img class="w-8 h-8" v-if="m.role === 'assistant'" src="/pages/assets/images/chatbot.png" alt="AI">
        <img class="w-8 h-8" v-else src="/pages/assets/images/avatar.png" alt="User">
        {{ m.role === 'user' ? 'You: ' : 'AI: ' }}
      </div>
      <div>
        {{ m.content }}
      </div>
    </div>
    <form class="fixed bottom-6 pr-8 w-full mx-auto max-w-2xl items-end flex mt-auto gap-2 box-border" @submit.prevent="handleSubmit">
      <textarea
        ref="textarea"
        class="overflow-hidden border-box w-full resize-none flex-1 p-2 border border-gray-300 rounded shadow-xl"
        v-model="input"
        placeholder="Ask me something.."
        name="userInput"
        id="userInput"
        rows="1"
        wrap="soft"
        @input="adjustTextareaHeight"
        @keypress.enter="handleSubmit"
        @keydown="handleKeyDown"
      ></textarea>
      <button
        class="h-10 w-10 grid place-items-center rounded bg-green-400" 
        @click="clickSubmit"
      ><img class="h-6 w-6" src="/pages/assets/images/send.png" alt="Submit"></button>
    </form>
  </div>
</template>