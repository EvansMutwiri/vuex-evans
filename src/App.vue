<script >
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Users from './components/Users.vue';

export default {
    components: { Users },

    setup() {

      const store = useStore()

      // const users = [store.state.users];

      let users = computed( function () {

            return store.state.users

        })

      console.log('HERE XXX',users.value.length, users.value[0])

      let user = {
          id: users.value[users.value.length-1].id + 1,
          name: '',
          email: '',
          phone: ''
        }

        console.log('Here is the user', user)

      

      function addUser(sent_user) {
        if(sent_user.name === "" || sent_user.email === "" || sent_user.phone === "") {

          return;

          }

        console.log('Console log users value', users.value.length, sent_user)
        sent_user.id =  users.value[users.value.length-1].id + 1
        // users.push(user)
        // console.log(users.length)

        
        // store.commit('addUser', sent_user)
        sent_user = {...sent_user}
        store.dispatch('addUser', sent_user)

        console.log(users.value)
        
      }
      return{
        addUser,
        user,
        users 
      }
    }
}

</script>

<template>

  <header>

    <h1 class="font-4xl">Vuex</h1>
    
  </header>

  <form @submit.prevent="addUser(user)">

    <input type="text" v-model.trim="user.name" placeholder="Enter Name">

    <input type="text" v-model.trim="user.email" placeholder="Enter email address">

    <input type="text" v-model.trim="user.phone" placeholder="Enter Phone Number">

    <button class="px-6 py-2 text-sm rounded shadow bg-sky-100 hover:bg-rose-200 text-sky-500">Add User</button>

  </form>

  <main>

    <Users/>

  </main>

</template>

<style>

@import './assets/tailwind.css';

</style>
