interface ICategoriesProps {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
}

const Categories = ({
  categories,
  selected,
  setSelected,
}: ICategoriesProps) => {
  return (
    <section className='text-center p-4'>
      <h2 className='text-lg font-bold border-b border-sky-500 mb-2'>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              selected === category && 'text-sky-600 font-bold'
            }`}
            key={category}
            onClick={() => setSelected(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
