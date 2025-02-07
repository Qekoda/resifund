<template>
  <div class="users">
    <div class="users__sidebar">
      <div class="users__section">
        <p class="users__title">Поиск сотрудников</p>
        <app-input 
          placeholder="Введите id или username"
          v-model.trim="search"
        />
      </div>
      <div class="users__section users__section--hidden">
        <p class="users__title">Список сотрудников</p>
        <app-preloader 
          class="users__preloader" 
          v-if="loading" 
        />
        <ul 
          class="list list--scroll"
          v-else-if="users.length"
        >
          <li 
            v-for="user in visibleUsers" 
            :key="user.id"
          >
            <user-card 
              :user="user"
              :active="selectedUser?.id === user.id"
              @click.native="selectUser(user)"
            />
          </li>
          <li v-if="visibleCount < users.length">
            <button 
              class="users__show-more"
              type="button"
              @click="loadMore" 
            >
              Показать еще
            </button>
          </li>
        </ul>
        <p 
          class="list__empty"
          v-else
        >
          Ничего не найдено
        </p>
      </div>
    </div>
    <div class="users__content">
      <user-detail 
        v-if="selectedUser"
        :user="selectedUser"
      />
      <div
        class="users__empty-content"
        v-else
      >
        Выберите сотрудника, чтобы посмотреть его профиль
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'debounce'
import { mapState, mapActions } from 'vuex';

const AppInput = () => import('../components/ui/AppInput')
const UserCard = () => import('../components/user/UserCard')
const UserDetail = () => import('../components/user/UserDetail')
const AppPreloader = () => import('../components/ui/AppPreloader')

export default {
  components: {
    AppInput,
    UserCard,
    UserDetail,
    AppPreloader
  },
  data() {
    return {
      search: '',
      visibleCount: 5,
      selectedUser: null,
      loading: false
    }
  },
  computed: {
    ...mapState('users', [
      'users'
    ]),
    visibleUsers() {
      return this.users.slice(0, this.visibleCount)
    },
  },
  watch: {
    search: debounce(function(newValue) {
      this.getUsersLink(newValue)
    }, 300)
  },
  methods: {
    ...mapActions('users', [
      'getUsers',
      'clearUsers'
    ]),
    getUsersLink(value) {
      if (!value) {
        this.clearUsers()
        this.selectedUser = null
        return
      }
      
      const params = new URLSearchParams()
      
      value.split(',')
        .map(item => item.trim())
        .filter(item => item)
        .forEach(item => {
          if (/^\d+$/.test(item)) { //только цифры
            params.append('id', item);
          } else if (/^[a-zA-Z]+$/.test(item)) { // Только буквы
            params.append('username', item)
          }
        })
        
      this.loading = true
      this.getUsers(params)
        .catch((error) => {
        this.$toast.error('Произошла ошибка при поиске сотрудников')
        })
        .finally(() => {
          this.loading = false
        })
    },
    loadMore() {
      this.visibleCount += 5
    },
    selectUser(user) {
      this.selectedUser = user
    } 
  }
}
</script>

<style lang="sass" scoped>

.users
  height: 100%
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1)
  border-radius: 10px
  display: flex
  flex-direction: row
  
  &__sidebar
    min-width: 300px
    border-right: 1px solid var(--color-border)
    padding: 30px 20px 
    display: flex
    flex-direction: column
    gap: 30px

  &__content
    padding: 30px 20px
    width: 100%
    position: relative
    
  &__empty-content
    font-size: .875rem
    color: var(--color-text)
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  &__preloader
    margin-top: 50px

  &__section
    display: flex
    flex-direction: column
    gap: 15px
    position: relative

    &--hidden
      overflow: hidden

  &__title
    font-weight: bold

  &__show-more
    width: 100%
    padding: 14px 7px
    border-radius: 10px
    border: 1px solid var(--color-border)
    background-color: mediumspringgreen
    display: block
    cursor: pointer
    
    &:hover,
    &:focus,
    &:active
      background-color: mediumseagreen

.list
  display: flex
  flex-direction: column
  gap: 18px
  padding-right: 20px

  &__empty
    font-size: .875rem
    color: var(--color-text)

  &--scroll
    overflow-y: scroll

</style>