import { Link } from "react-router-dom";
import ProductsHeader from "../components/ProductsHeader";
import SearchBar from "../components/SearchBar";
const Products = () => {
  let loadedMovies = [];
  const sendRequest = async () => {
    const response = await fetch(
      "https://react-http-29f4a-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Sending data failed");
    }

    const data = await response.json();

    for (const key in data) {
      loadedMovies.push({
        id: key,
        text: data[key].openingText,
        releaseDate: data[key].releaseDate,
        title: data[key].title,
      });
    }
  };

  try {
    sendRequest();
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <ProductsHeader />
      <SearchBar />
    </div>
  );
};

export default Products;
