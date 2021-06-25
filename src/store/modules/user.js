const state = {
    token: "",
    name: "123"
}
const mutations = {
    SET_TOKEN(state, data) {
        state.token = data
    },
    SET_NAME(state, data) {
        state.name = data
    }
}
const actions = {

}
export default {
    namespaced: true, // 解决命名冲突的问题。全局引用此文件里的方法时标识这个文件名
    state,
    mutations,
    actions
}