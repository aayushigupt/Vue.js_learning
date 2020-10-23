<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="submitTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['submitTopic'],
  props: ['id', 'topicName', 'description'],
  emits: ['selectTopic'],
};
</script>