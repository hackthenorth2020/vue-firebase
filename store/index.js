import axios from 'axios';
const state = () => ({
    posts: []
});

const actions = {
    async getSomething({commit}) {
        const token = await this.$fire.auth.currentUser.getIdToken()
        const config = {
            headers: {
                Authorization : 'Bearer: ' + token
            }
        }
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', config)
        console.log(response.data);
    }
};

const getters = {
    // getPosts() () => {this.posts}
};

const mutations = {
    
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