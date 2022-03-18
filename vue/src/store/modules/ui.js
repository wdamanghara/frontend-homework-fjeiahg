const state = {
  box: {
    items: Array.apply(null, new Array(12)).map((item, idx) => {
      return {
        name: 'box - ' + (idx + 1)
      };
    }),
    numOfColumns: 1
  }
};

const getters = {};
const actions = {};
const mutations = {
    setNumOfColumns(state, aNum) {
        state.box.numOfColumns = aNum;
    }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
