/*
* @Author: whuzxq
* @Date:   2017-07-26 10:45:48
* @Last Modified by:   whuzxq
* @Last Modified time: 2017-07-26 16:31:39
*/

import Vuex from "vuex"
import Vue from 'vue'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug=process.env.NODE_ENV !=='production'
export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations,
	strict:debug,
	plugins:debug?[createLogger()]:[]
})