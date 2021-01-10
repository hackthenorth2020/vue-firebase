import axios from 'axios';
const state = () => ({
    tokens: []
});

    const actions = {
        async getSomething({commit}) {
            var token = 'Bearer: '
            this.$fire.auth.currentUser.getIdToken().then((idToken) => (idToken))
            const config = {
                headers: {
                    Authorization : 'Bearer: ' + token
                }
            }
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', config)
            console.log(response.data);
        }
    };
    const getters = {};
    const mutations = {};
     
export {
    state,
    actions,
    mutations,
    getters
}