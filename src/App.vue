<script >
import { mapGetters, mapActions } from 'vuex';
import Users from './components/Users.vue';

export default {
  components: { Users },
  watch: {
    user: function () {

      this.action = 'update'

      this.form_user.id = this.user.id
      this.form_user.email = this.user.email
      this.form_user.phone = this.user.phone
      this.form_user.name = this.user.name

      // this.$refs.user_name.value=this.user.name;
      // this.$refs.user_email.value = this.user.email
      // this.$refs.user_phone.value = this.user.phone
      
  
    }
  },
  methods:{
    createUser(){
      if(this.form_user.name=='' || this.form_user.email=='' || this.form_user.phone==''){
        alert("Please fill all the fields")
      }
      else{
        if(this.action==='save'){
          this.addUser(this.form_user)
        }else{
          this.updateUserStore(this.form_user)
        }
          this.clearUserForm()
      }

    },
    clearUserForm(){
      this.form_user = {
        id:'',
        name:'',
        phone:'',
        email:''
      }
      // this.$refs.user_id.value = ''
      // this.$refs.user_email.value=''
      // this.$refs.user_phone.value=''
      // this.$refs.user_name.value=''
      this.action = 'save'
      // console.log(this.form_user)
      // this.form_user.email = ''
    },
    ...mapActions({
        addUser:"addUser",
        updateUserStore:"updateUserStore",
        toggleEditState:"toggleEditState"
    })
  },
  computed:{
    ...mapGetters({
      'users':'getUsers',
      'user':'getUser'
    })
  },

  data() {
    return {
      action:'save',
      form_user:{
        name:'',
        phone:'',
        email:''
      },
    }
  }
}

</script>

<template>

  <div class="grid place-items-center h-screen overflow-x-auto space-y-4">
    <header>

      <h1 class="font-4xl font-sans font-bold">Vuex</h1>

    </header>

    <form @submit.prevent="" class="flex flex-col bg-gray-100 border py-6 px-10 pt-10" ref="user_form">

      <div class="space-y-2 mx-auto">
         <input class="w-full p-1 ml-2 border" type="text" v-model.trim="form_user.id" placeholder="Enter Name" ref="user_id" style="display:none">

        <input class="w-full p-1 ml-2 border" type="text" v-model.trim="form_user.name" placeholder="Enter Name" ref="user_name">

        <input class="w-full p-1 ml-2 border" type="text" v-model.trim="form_user.email" ref="user_email"
          placeholder="Enter email address">

        <input class="w-full p-1 ml-2 border" type="text" v-model.trim="form_user.phone" ref="user_phone"
          placeholder="Enter Phone Number">
      </div>
      <div class="flex justify-end space-x-6 mt-6">
        

        <button class="px-6 py-2 text-sm rounded shadow bg-sky-100 hover:bg-blue-200 text-sky-500"
          @click="createUser">
        
          {{action==='save'?'Save User':'Update User'}}
          </button>
      </div>

    </form>
    <Users />
  </div>



</template>

<style>
@import './assets/tailwind.css';
</style>
