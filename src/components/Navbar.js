import React from 'react'
import { useRecoilValue } from 'recoil'
import { categoryState, selectCategoryState } from '../atoms/categoryAtom'
import { useSetRecoilState } from 'recoil';

const Navbar = () => {
    const categories = useRecoilValue(categoryState);
    const setSelectedCategory = useSetRecoilState(selectCategoryState);

    const onSelectCategory = (category) => {setSelectedCategory(category)};

  return (
    <div className='h-[100px] bg-blue-300 flex items-center justify-center'>
      {/* <div className='mx-0 my-auto'>
        <button className="m-2 text-red-500 text-lg">경제</button>
        <button className="m-2 text-red-500 text-lg">사회</button>
        <button className="m-2 text-red-500 text-lg">정치</button>
        <button className="m-2 text-red-500 text-lg">IT</button>
        <button className="m-2 text-red-500 text-lg">스포츠</button>
      </div> */}
      {categories.map((category, index) => (
        <button
          key={index}
          className="mr-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Navbar
