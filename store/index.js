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
    
    }
};

const getters = {
    // getPosts() () => {this.posts}
    getItems: (state) => state.items
    
};

const mutations = {
    setItems: (state, items) => (state.items = items)
    
};


const setters = {
    //set posts
}
     
export {
    state,
    actions,
    mutations,
    getters,
    setters,
}
