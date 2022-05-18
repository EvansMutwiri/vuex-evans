<script >
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Users from './components/Users.vue';

export default {
  components: { Users },

  watch: {
    updatedUser: function () {
      this.user = this.updatedUser
    }
  },

  setup() {

    const store = useStore()

    let users = computed(function () {

      return store.state.users

    })

    let updatedUser = computed(function () {
      return store.state.updatedUser
    })


    let user = {
      id: users.value[users.value.length - 1].id + 1,
      name: '',
      email: '',
      phone: ''
    }

    console.log('Here is the user', updatedUser)



    function addUser(sent_user) {

      if (!sent_user.name || !sent_user.email || !sent_user.phone) {

        return;

      }

      console.log('Console log users value', users.value.length, sent_user)

      if (users.value.length >= 1) {
        sent_user.id = users.value[users.value.length - 1].id + 1
      } else {
        sent_user.id = 1
      }

      sent_user = { ...sent_user }

      store.dispatch('addUser', sent_user)

      console.log(users.value)

      updatedUser = {}

    }
    return {
      addUser,
      user,
      users,
      updatedUser
    }
  }
}

</script>

<template>

  <div class="grid place-items-center h-screen">
    <header>

      <h1 class="font-4xl font-sans font-bold">Vuex</h1>

    </header>
    <!-- {{ updatedUser }} -->

    <form @submit.prevent="addUser(user)">

      <input class="border-lime-200 border-2 p-1 ml-2" type="text" v-model.trim="user.name" placeholder="Enter Name">

      <input class="border-lime-200 border-2 p-1 ml-2" type="text" v-model.trim="user.email"
        placeholder="Enter email address">

      <input class="border-lime-200 border-2 p-1 ml-2" type="text" v-model.trim="user.phone"
        placeholder="Enter Phone Number">

      <button class="px-6 py-2 text-sm rounded shadow bg-sky-100 hover:bg-rose-200 text-sky-500">Add User</button>

    </form>

    <div class="invisible">{{ updatedUser }}</div>

    <main>

      <Users />

    </main>
  </div>



</template>

<style>
@import './assets/tailwind.css';
</style>
