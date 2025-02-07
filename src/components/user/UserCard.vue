<template>
  <div class="card">
    <div class="card__avatar">
      <img :src="avatarSrc" alt="Avatar" class="avatar" />
    </div>
    <div 
      class="card__info"
      :class="{ 'card__info--active': active }"
    >
      <p class="card__username">{{ user.username }}</p>
      <p class="card__email">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        default: () => ({
          username: 'noname',
          email: '',
          avatar: ''
        })
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      avatarSrc() {
        return this.user.avatar || require('@/assets/images/missing-image.svg')
      }
    }
  }
</script>

<style lang="sass" scoped>

.card
  height: 70px
  display: flex
  flex-direction: row
  align-items: center
  width: 100%
  border: 1px solid var(--color-border)
  border-radius: 10px
  overflow: hidden
  cursor: pointer

  &__info
    padding: 16px
    display: flex
    flex-direction: column
    gap: 5px
    font-size: .875rem
    width: 100%

    &--active
      background-color: var(--color-border)

  &__username
    font-weight: 600
    color: var(--color-dark)

  &__email
    color: var(--color-text)

  &__avatar
    padding: 19px
    border-right: 1px solid var(--color-border)
    
.avatar
  width: 32px
  height: 32px

</style>