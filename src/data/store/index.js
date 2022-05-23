import { createStore } from "vuex";

export default createStore({
    
    state: {
        updatedUser: {},
        users: [
            // {
            //     name: 'Evans',
            //     email: 'evans@kwelicapital.com',
            //     phone: '+2348090878888',
            //     id: 1
            // }
        ],
        editingUser: false,
    },
    getters:{
        getUsers: state => state.users,

        getUser: state => state.updatedUser,
    },
    mutations: {

        removeUser(state, id){

            let conf = confirm('Are you sure you want to delete this user?');
            if(conf === false) return;

            let users = state.users;

            let index = users.findIndex((user) => user.id === id);

            if (index !== -1) {

                users.splice(index, 1);

                state.users = users;
            };
        },

        addUser(state, user){

            // let length = state.users.length;

            // user.id = length + 1;
            state.users.length >= 1 ? user.id = state.users[state.users.length - 1].id + 1 : user.id = 1;

            state.users.push({...state.users, ...user}); 

            localStorage.setItem('users', JSON.stringify(state.users));  
        },

        setUser(state, updatedUser) {
            state.updatedUser = updatedUser            
        },

        editState(state) {
            state.editingUser = true
        },

        toggleEditState(state) {
            state.editingUser = !state.editingUser
        },

        updateUser(state, user){
            state.users.forEach((item, index) => {
                if (item.id === user.id) {
                    state.users[index] = user
                }
            });
        },

        initializeUsers(state) {
            if(localStorage.getItem('users')) {
                state.users = JSON.parse(localStorage.getItem('users'));
            }
        }
    },

    actions: {
        addUser({ commit }, user) {
            // console.log('added user', user)
          commit("addUser", user);
      },

      editUser({ commit }, updatedUser) {
        commit("setUser", updatedUser);
      },
      updateUserStore({commit},user){
          console.log("User from form that we want to update is ", user)
          commit('updateUser',user)
      },

      deleteUser({commit},id){
            commit('removeUser',id)
      } 
    }
    
})