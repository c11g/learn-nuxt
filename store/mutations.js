import CONSTANT from "~/constant";

const mutations = {
  [CONSTANT.CHANGE_NO]: (state, payload) => {
    if (!payload.no) return;
    state.no = payload.no;
  }
};

export default mutations;