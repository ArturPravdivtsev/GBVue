import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const DB = {
    page1: [
      { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
      { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
      { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
    ],
    page2: [
      { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
      { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
      { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
    ],
    page3: [
      { id: 7, date: '23.03.2020', category: 'Entertaiment', value: 969 },
      { id: 8, date: '24.03.2020', category: 'Education', value: 1500 },
      { id: 9, date: '25.03.2020', category: 'Food', value: 200 }
    ],
    page4: [
      { id: 10, date: '23.03.2020', category: 'Entertaiment', value: 969 },
      { id: 11, date: '24.03.2020', category: 'Education', value: 1500 },
      { id: 12, date: '25.03.2020', category: 'Food', value: 200 }
    ]
  }

export default new Vuex.Store({
    state: {
        paymentsList: [],
        paymentsListIDS: []
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        addData(state, payload) {
            console.log(payload)
            state.paymentsList.push(payload)
            console.log(state.paymentsList)
        },
        editData(state, payload) {
          console.log(payload)
          const item = state.paymentsList.find((item) => item.id === payload.id);
          if(item) {
            Object.assign(item, payload)
          }
        },
        addPaymentsListData (state, payload) {
            const newUniqObjs = payload.filter(obj => {
              return state.paymentsListIDS.indexOf(obj.id) < 0
            })
            const uniqIDS = newUniqObjs.map(obj => obj.id)
            state.paymentsListIDS.push(...uniqIDS)
            state.paymentsList.push(...newUniqObjs)
        },
        deleteItem(state, payload) {
          state.paymentsListIDS = state.paymentsListIDS.filter(id => id !== payload)
          state.paymentsList = state.paymentsList.filter(item => item.id !== payload)
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList
    },
    actions: {
        // fetchData({ commit }) {
        //     const items = [
        //         {"date": "20.03.2020", "category": "Food", "value": 169 },
        //         {"date": "21.03.2020", "category": "Navigation", "value": 50 },
        //         {"date": "22.03.2020", "category": "Sport", "value": 450 },
        //         {"date": "23.03.2020", "category": "Entertaiment", "value": 969 },
        //         {"date": "24.03.2020", "category": "Education", "value": 1500 },
        //         {"date": "25.03.2020", "category": "Food", "value": 200 },
        //         {"date": "20.03.2020", "category": "Food", "value": 169 },
        //         {"date": "21.03.2020", "category": "Navigation", "value": 50 },
        //         {"date": "22.03.2020", "category": "Sport", "value": 450 },
        //         {"date": "23.03.2020", "category": "Entertaiment", "value": 969 },
        //         {"date": "24.03.2020", "category": "Education", "value": 1500 },
        //         {"date": "25.03.2020", "category": "Food", "value": 200 }
        //     ]
        //     commit('setPaymentsListData', items)
        // }
        fetchData ({ commit }, page) {
            return new Promise((resolve) => {
              setTimeout(() => {
                const items = DB[`page${page}`]
                console.log(page)
                resolve(items)
              }, 2000)
            })
              .then(res => {
                commit('addPaymentsListData', res)
              })
          }
    }
})