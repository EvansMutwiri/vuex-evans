import { createStore } from "vuex";

export default createStore({
    
    state: {
        updatedUser: {},
        users: [
            {
                name: 'Evans',
                email: 'evans@kwelicapital.com',
                phone: '+2348090878888',
                id: 1
            }
        ],
        editingUser: false,
    },

    mutations: {

        removeUser(state, id){

            let users = state.users;

            let index = users.findIndex((user) => user.id === id);

            if (index !== -1) {

                users.splice(index, 1);

                state.users = users;
            };
        },

        addUser(state, user){
            state.users.push(user);   
        },

        setUser(state, updatedUser) {
            state.updatedUser = updatedUser            
        },

        editState(state) {
            state.editingUser = true
        },

        toggleEditState(state) {
            state.editingUser = !state.editingUser
        }
    },

    actions: {
        addUser({ commit }, user) {
            console.log('added user', user)
          commit("addUser", user);
      },

      editUser({ commit }, updatedUser) {
        commit("setUser", updatedUser);
      }

      
    }
    
})