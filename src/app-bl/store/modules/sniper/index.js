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
    },
  }

const getters = {
    sniperItemsTrofei: state => state.sniperItems.sort((a,b) => b.trofei/b.partite - a.trofei/a.partite),
    sniperItemsReverse: state => state.sniperItems.sort((a,b) => a.trofei/a.partite - b.trofei/b.partite),
};

const sniperModule = {
    state,
    mutations,
    actions,
    getters
}

export default sniperModule;