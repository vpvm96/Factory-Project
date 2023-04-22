type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <section className="mt-5">
      <h2 className="mb-2 px-5 py-3 text-2xl font-bold">Category</h2>
      <ul className="flex flex-row gap-10 px-5 py-3">
        {categories.map((category) => (
          <li
            className={`hover:cursor-pointer hover:text-sky-500 ${
              category === selectedCategory && "text-sky-600"
            }`}
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
