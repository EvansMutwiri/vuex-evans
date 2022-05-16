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
                        {{ user.id }}
                     </td>
                     <td class="p-4">
                        {{ user.name }}
                     </td>
                     <td class="p-4">
                        {{ user.email }}
                     </td>
                     <td class="p-4">
                        {{ user.phone }}
                     </td>
                     <td class="p-4 flex items-center space-x-2">
                        <button @click="deleteUser(user.id)"
                           class="px-6 py-2 text-sm rounded shadow bg-rose-100 hover:bg-rose-200 text-rose-500">Delete</button>

                        <button @click="editUser(user.id)"
                           class="px-6 py-2 text-sm rounded shadow bg-sky-500 hover:bg-sky-200 text-white items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                 d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                           </svg>
                        </button>
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

      let users = computed(function () {

         return store.state.users

      })

      function deleteUser(id) {

         store.commit('removeUser', id)

      }

      function editUser(id) {

         console.log("edit User", id)
         
      }

      return {

         users,
         deleteUser,
         editUser

      }
   }
}
</script>