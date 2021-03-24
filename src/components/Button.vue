<template>
  <button class="button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: #899098;
  color: #f5f5f5;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
