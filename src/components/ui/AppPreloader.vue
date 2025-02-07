<template>
  <div class="preloader-wrapper">
    <div class="preloader"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="sass" scoped>
.preloader-wrapper
  position: relative
  height: 60px

.preloader
  display: block
  position: absolute
  top: 50%
  left: 50%
  height: 50px
  width: 50px
  margin: -25px 0 0 -25px
  border: 2px solid transparent
  border-top-color: #000000
  border-radius: 50%
  animation: spin 1.5s ease infinite

  &:before
    content: ""
    position: absolute
    top: 7px
    right: 7px
    bottom: 7px
    left: 7px
    border: 2px solid transparent
    border-radius: 50%
    border-top-color: #000000
    animation: spin 3s linear infinite

  &:after
    content: ""
    position: absolute
    top: 15px
    right: 15px
    bottom: 15px
    left: 15px
    border: 2px solid transparent
    border-radius: 50%
    border-top-color: #000000
    animation: spin 1.5s ease infinite

@keyframes spin
  from
    transform: rotate(0deg)
    transform: rotate(0deg)
  to
    transform: rotate(359deg)
    transform: rotate(359deg)
</style>