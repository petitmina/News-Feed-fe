import { atom } from "recoil";

export const categoryState = atom({
    key: "categoryState",
    default: ['경제', '사회', '정치', 'IT', '스포츠']
  });
  
export const selectCategoryState = atom({
    key: 'selectCategoryState',
    default: '경제'
})