import products from "../data/products";
import { useSearch } from "../context/SearchContext";
import { Link } from "react-router-dom";

const SearchSuggestions = ({ onClose }) => {
  const { searchTerm, setSearchTerm, setIsSearchOpen } = useSearch();

  if (!searchTerm) return null;

  const suggestions = products
    .filter((p) =>
      p.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
    .slice(0, 5);
  if (suggestions.length === 0) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white border shadow z-50">
      {suggestions.map((item) => (
        <Link
          key={item.id}
          to={`/product/${item.id}`}
          onClick={() => {
            setSearchTerm(item.name);
            onClose();
          }}
          className="block px-4 py-3 hover:bg-gray-100 text-sm"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestions;
