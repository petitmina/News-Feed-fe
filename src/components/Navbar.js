import React from 'react';
import { useRecoilState } from 'recoil';
import { categoryState } from '../atoms/categoryAtom';

const Navbar = () => {
  const [category, setCategory] = useRecoilState(categoryState);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const categories = ["과학", "정치", "경제", "사회", "문화", "국제", "스포츠"];

  return (
    <div className='h-[100px] bg-blue-300 flex items-center justify-center'>
      {categories.map((categoryName, index) => (
        <button
          key={index}
          className={`mr-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${category === categoryName ? 'font-bold' : ''}`}
          onClick={() => handleCategoryChange(categoryName)}
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
