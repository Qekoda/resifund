<template>
  <div class="user-detail">
    <div class="user-detail__avatar">
      <img :src="avatarSrc" alt="Avatar" class="avatar" />
    </div>
    <div class="user-detail__info">
      <p class="user-detail__label ">{{ user.name }}</p>
      <p class="user-detail__label">email: <span class="user-detail__text">{{ user.email }}</span></p>
      <p class="user-detail__label">phone: <span class="user-detail__text">{{ user.phone }}</span></p>
      <p class="user-detail__label">О себе: </p>
      <p class="user-detail__text">{{ user.about || defaultAbout}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        defaultAbout: 'Нет информации'
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
.user-detail 
  display: flex
  flex-direction: row
  gap: 6%
  &__avatar
    width: 47%
    border: 1px solid var(--color-border)
    text-align: center
    align-content: center
    aspect-ratio: 3/2

  &__info
    display: flex
    flex-direction: column
    gap: 10px

  &__text
    color: var(--color-text)
    font-size: .875rem

  &__label
    color: var(--color-dark)
    font-weight: 600


.avatar
  width: 30%

</style>