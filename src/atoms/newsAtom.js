import {atom} from 'recoil';

export const newsState = atom({
    key: 'newsState',
    default: [],
})

export const selectedNewsState = atom({
    key: 'selectedNewsState',
    default: null,
})