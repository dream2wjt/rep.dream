import request from '@/utils/request'

function getCardData(payload) {
    return request('/api/getCardData', payload)
}

export { getCardData };