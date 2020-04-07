import axios from 'axios';

const state = {
    sniperItems : []
};

const mutations = {
    UPDATE_SNIPER_ITEMS (state, payload) {
        state.sniperItems = payload;
    }
}

const actions = {
    getSniperItems ({ commit }) {
      axios.get('/api/snipers').then((response) => {
        commit('UPDATE_SNIPER_ITEMS', response.data)
      });
    }
  }

const getters = {
    sniperItems: state => state.sniperItems
};

const sniperModule = {
    state,
    mutations,
    actions,
    getters
}

export default sniperModule;