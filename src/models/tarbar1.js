import { getCardData } from '@/services/tarbar1'

export default {
    namespace: 'tarbar1',
    state: [
        {
            title: 'this is card 1 title ',
            extra: 'this is card 1 extra',
            body: ' this is card 1 body',
            foot: ' this is card 1 foot'
        },
        {
            title: 'this is card 2 title ',
            extra: 'this is card 2 extra',
            body: ' this is card 2 body',
            foot: ' this is card 2 foot'
        }
    ],
    reducers: {
        updateCard(state, { payload }) {
            state = payload
            return state
        }
    },
    effects: {
        *getCardData({ payload }, { call, put }) {
            const response = yield call(getCardData, payload)
            // console.log('....', response.data)
            let data = response.data
            yield put({
                type: 'updateCard',
                payload: data
            })
        }
    }
}