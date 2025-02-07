<template>
  <div class="details">
    <div class="details__avatar">
      <img :src="avatarSrc" alt="Avatar" class="avatar" />
    </div>
    <div class="details__info">
      <p class="details__label ">{{ user.name }}</p>
      <p class="details__label">email: <span class="details__text">{{ user.email }}</span></p>
      <p class="details__label">phone: <span class="details__text">{{ user.phone }}</span></p>
      <p class="details__label">О себе: </p>
      <p class="details__text">{{ user.about || defaultAbout}}</p>
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

.details
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