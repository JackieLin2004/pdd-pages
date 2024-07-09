<script setup lang="ts">
import ChatHead from "@/components/chat/ChatHead.vue";
import ChatMessage from "@/components/chat/ChatMessage.vue";
import AllProducts from "@/components/chat/AllProducts.vue";
</script>

<template>
  <div class="chat-wrapper">
    <ChatHead/>
    <ChatMessage/>
    <div class="separate"></div>
    <AllProducts/>
  </div>
</template>

<style scoped>
.chat-wrapper {
  width: 100vw;
  background-color: #dee2e6;
}

.chat-wrapper .separate {
  width: 100%;
  height: 3vw;
}
</style>