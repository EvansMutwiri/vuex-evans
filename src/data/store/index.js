import { createStore } from "vuex";

export default createStore({
    
    state: {
        updatedUser: {},
        users: [
            {
                id: 1,
                name: 'Evans',
                email: 'evans@kwelicapital.com',
                phone: '0722000000'
            }
        ]
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