import axios from 'axios';
const state = () => ({
    items: []
});

/*
get item,
create item
delete item 
update item
read item
*/
/*
build page with text, take id, name, owner to pass to post method
*/
const actions = {
    async getItems({commit}) {
        const token = await this.$fire.auth.currentUser.getIdToken()
        const config = {
            headers: {
                Authorization : 'Bearer ' + token
            }
        }
        const response = await axios.get('https://htn-backend-clkzwj32zq-nn.a.run.app/items', config)
        console.log(response.data);
        commit('setItems', response.data);
    
    },

    async getItem({commit}, id) {
        const token = await this.$fire.auth.currentUser.getIdToken()
        const config = {
            headers: {
                Authorization : 'Bearer ' + token
            }
        }
        const response = await axios.get('https://htn-backend-clkzwj32zq-nn.a.run.app/items/' + id, config)
        console.log(response.data);
    },

    async createItem({commit}, todo) {
        const token = await this.$fire.auth.currentUser.getIdToken()
        const config = {
            headers: {
                Authorization : 'Bearer ' + token
            }
        }
        todo = {
            name : todo.name,
            owner : todo.owner
          };
        const response = await axios.post('https://htn-backend-clkzwj32zq-nn.a.run.app/items', todo, config)
        console.log(response.data);
    },

    async deleteItem({commit}, id) {
        const token = await this.$fire.auth.currentUser.getIdToken()
        const config = {
            headers: {
                Authorization : 'Bearer ' + token
            }
        }
        const response = await axios.delete('https://htn-backend-clkzwj32zq-nn.a.run.app/items')

    },


    async updateItem({commit}, todo) {
        const token = await this.$fire.auth.currentUser.getIdToken()
        const config = {
            headers: {
                Authorization : 'Bearer ' + token
            }
        }
        todo = {
            id : Number(todo.id),
            name : todo.name,
            owner : todo.owner
          };
        const response = await axios.put('https://htn-backend-clkzwj32zq-nn.a.run.app/items', todo, config)
        console.log(response.data);
    },





};

const getters = {
    // getPosts() () => {this.posts}
    getItems: (state) => state.items
    
    
};

const mutations = {
    setItems: (state, items) => (state.items = items),
    deleteItems: (state, id) =>  (state.items = state.items.filter((i) => i.id != id)),
    updateItem: (state, item) => {
        for (var i in state.items) {
          if (state.items[i].id == item.id) {
            Vue.set(state.items, i, item);
            break;
          }
        }
      },

    
};



     
export {
    state,
    actions,
    mutations,
    getters,
}
