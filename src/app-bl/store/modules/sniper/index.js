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

    getSniperItemsReverse ({ commit, getters }) {
      const reverse = getters.sniperItemsTrofei;
      commit('UPDATE_SNIPER_ITEMS', reverse);

    },

    getSniperItemsDanni ({ commit, getters }) {
      const reverse = getters.sniperItemsDanni;
      commit('UPDATE_SNIPER_ITEMS', reverse);

    },
  }

const getters = {
    sniperItemsNormal: state => state.sniperItems,
    sniperItemsTrofei: state => state.sniperItems.sort((a,b) => b.trofei/b.partite - a.trofei/a.partite),
    sniperItemsReverse: state => state.sniperItems.sort((a,b) => a.trofei/a.partite - b.trofei/b.partite),
    sniperItemsDanni: state => state.sniperItems.sort((a,b) => b.danni/b.partite - a.danni/a.partite),
    getSniperById: (state) => (id) => {
      return state.sniperItems.find(sniper => sniper.id === id)
    }
};

const sniperModule = {
    state,
    mutations,
    actions,
    getters
}

export default sniperModule;