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
      // id: users.value[users.value.length - 1].id + 1,
      name: '',
      email: '',
      phone: ''
    }

    console.log('Here is the user', updatedUser)



    function addUser(sent_user) {

      if (sent_user.name === '' || sent_user.email === '' || sent_user.phone === '') {
        alert('Please fill in all fields')
      } else {
        if (users.value.length >= 1) {
          sent_user.id = users.value[users.value.length - 1].id + 1
        } else {
          sent_user.id = 1
        }

        sent_user = { ...sent_user }

        store.dispatch('addUser', sent_user)
      }
    }

    function updateUser(sent_user) {

      if (sent_user.name === '' || sent_user.email === '' || sent_user.phone === '') {
        alert('Please fill in all fields')
      } else {
        sent_user = { ...sent_user }

        store.dispatch('editUser', sent_user)
      }
    }
    return {
      addUser,
      user,
      users,
      updatedUser,
      updateUser
    }
  }
}

</script>

<template>

  <div class="grid place-items-center h-screen overflow-x-auto border-x border-t">
    <header>

      <h1 class="font-4xl font-sans font-bold">Vuex</h1>

    </header>
    <!-- {{ updatedUser }} -->

    <form @submit.prevent="" class="flex flex-col bg-gray-100 border py-6 px-10 pt-10">

      <div class="space-y-2 mx-auto">
        <input class="w-full p-1 ml-2 border" type="text" v-model.trim="user.name" placeholder="Enter Name">

      <input class="w-full p-1 ml-2 border" type="text" v-model.trim="user.email"
        placeholder="Enter email address">

      <input class="w-full p-1 ml-2 border" type="text" v-model.trim="user.phone"
        placeholder="Enter Phone Number">
      </div>

      <div class="flex justify-end space-x-6 mt-6">
        <button class="px-6 py-2 text-sm rounded shadow bg-green-100 hover:bg-green-200 text-green-500"
        @click="updateUser(updatedUser)">Update User</button>

        <button class="px-6 py-2 text-sm rounded shadow bg-sky-100 hover:bg-blue-200 text-sky-500"
        @click="addUser(user)">Add User</button>
      </div>

    </form>
     <Users />
    <div class="invisible">{{ updatedUser }}</div>
  </div>



</template>

<style>
@import './assets/tailwind.css';
</style>
