<template>
  <div>
      <!-- component -->
<div class="bg-white">

<div class="overflow-x-auto border-x border-t">
   <table class="table-auto w-full">
      <thead class="border-b">
         <tr class="bg-gray-100">
             <th class="text-left p-4 font-bold">
               ID
            </th>
            <th class="text-left p-4 font-bold">
               Name
            </th>
            <th class="text-left p-4 font-bold">
               Email
            </th>
            <th class="text-left p-4 font-bold">
               Phone
            </th>
            <th class="text-left p-4 font-bold">

            </th>
         </tr>
      </thead>
      <tbody>
         <tr class="border-b hover:bg-gray-50" v-for="user in users" :key="user.id">
            <td class="p-4">
               {{user.id}} 
            </td>
            <td class="p-4">
               {{user.name}} 
            </td>
            <td class="p-4">
               {{user.email}} 
            </td>
            <td class="p-4">
               {{user.phone}}
            </td>
            <td class="p-4">
                <button @click="deleteUser(user.id)" class="px-6 py-2 text-sm rounded shadow bg-rose-100 hover:bg-rose-200 text-rose-500">Delete</button>
            </td>
         </tr>
      </tbody>
   </table>
</div>
</div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"


export default {
    
    name: 'users',

    setup() {

        const store = useStore()

        let users = computed( function () {

            return store.state.users

        })

        function deleteUser(id) {

            store.commit('removeUser', id)

        }

        return{

            users,
            deleteUser

        }
    }
}
</script>