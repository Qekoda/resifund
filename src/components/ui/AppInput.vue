<template>
  <div class="input-wrapper">
    <input 
      type="text"
      class="input"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    >
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Введите текст'
      }
    },
    methods: {
      onInput(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style lang="sass" scoped>
.input-wrapper
  width: 100%

.input
  width: 100%
  padding: 1rem 1.5rem
  font-size: .875rem
  color: var(--color-text)
  border-radius: .5rem
  border: 1px solid var(--color-border)
  
  
</style>