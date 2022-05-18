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
            // state.users.push(user);
            state.users =  [

                ...state.users,user

            ]      
        },

        // implement updateUser(state, id)
        // upDate

        setUser(state, updatedUser) {
            // state.updatedUser = state.users.find(u=> u.id === updatedUser.id)
            state.updatedUser = updatedUser
        },

        updateUser(state, updatedUser) {
            state.updatedUser = state.users.find(u=> u.id === updatedUser.id)
            // u = updatedUser
        }


        // setAge: (state, payload) => {
        //     const { age, name } = payload
        //     const person = state.people.find(p => p.Name === name)
        //     person.age = age
        //   }

    },

    actions: {
        addUser({ commit }, user) {
            console.log('added user', user)
          commit("addUser", user);
      },

      
    }
    
})