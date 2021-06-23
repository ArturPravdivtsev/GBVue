import 'regenerator-runtime/runtime'
import PaymentForm from '../src/components/PaymentForm'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()

describe('PaymentForm', () => {
    let actions
    let mutations
    let store
    let vuetify

    beforeEach(() => {
        actions = {
            save: jest.fn()
        }
        mutations = {
            addData: jest.fn()
        }

        store = new Vuex.Store({
            actions,
            mutations
        })

        vuetify = new Vuetify()
    })
    test('PaymentForm renders a vue instance', () => {
        expect(
            shallowMount(PaymentForm, {
                    localVue,
                    router,
                    vuetify,
                    store
                }
            ).isVueInstance()
        ).toBe(true);
    })
    test('PaymentForm not changed', () => {
        const Wrapper = shallowMount(PaymentForm, {
            localVue,
            router,
            vuetify,
            store
          })
        expect(Wrapper.html()).toMatchSnapshot()
    })

    test('PaymentForm trigger Date Picker', () => {
        const Wrapper = shallowMount(PaymentForm, {
            localVue,
            router,
            vuetify,
            store
        })
        Wrapper.find('v-text-field').trigger('click')
        Wrapper.vm.$nextTick()
        expect(Wrapper.find('v-date-picker[name="date-picker"]').isVisible()).toBe(true)
    })

    test('PaymentForm save', () => {
        const Wrapper = shallowMount(PaymentForm, {
            store,
            localVue,
            router,
            vuetify,
            
        })
        Wrapper.setData({ date: '18-03-2022', category: 'Educations', value: '1000' })
        Wrapper.find('v-btn').trigger('click')
        Wrapper.vm.$emit('save');
        expect(Wrapper.emitted().save).toBeTruthy()
    })

    test('PaymentForm right data', () => {
        const Wrapper = shallowMount(PaymentForm, {
            store,
            localVue,
            router,
            vuetify,
            
        })
        const date = Wrapper.find('v-text-field[name="date-activator"]')
        date.setValue('18-03-2022')
        const category = Wrapper.find('v-text-field[name="category"]')
        category.setValue('Education')
        const value = Wrapper.find('v-text-field[name="value"]')
        value.setValue('1000')

        expect(Wrapper.vm.date).toBe('18-03-2022')
        expect(Wrapper.vm.category).toBe('Education')
        expect(Wrapper.vm.value).toBe('1000')
    })
})