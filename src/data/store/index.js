import { createStore } from "vuex";

export default createStore({
    strict: true,
    state: {
        users: [
            {
                id: 1,
                name: 'Evans',
                email: 'evans@kwelicapital.com',
                phone: '0722000000'
            },
            {
                id: 2,
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

        // editUser(state, id) {
        //     let users = state.users;

        //     let index = users.findIndex((user) => user.id === id);
            
        // },

        // updateProject(state, project) {

        //     var index = state.projects.findIndex(function(item, i) {
        //       return item.id === project.id;
        //     });
          
        //     state.projects = [
        //       ...state.projects.slice(0, index),
        //       project,
        //       ...state.projects.slice(index + 1)
        //     ]
        //   },

        editUser (state, user) {
            let users = state.users;

            const index = users.findIndex(item => item.id === user.id);
            
            state.users = [
                
                ...state.users.slice(0, index), user,...state.users.slice(index + 1)
            
            ]
          },

        addUser(state, user){
            // state.users.push(user);
            state.users =  [

                ...state.users,user

            ]      
        },

        // implement updateUser(state, id)
        // upDate

    },

    actions: {
        addUser({ commit }, user) {
            console.log('added user', user)
          commit("addUser", user);
      }
    },
    strict: true
    
})