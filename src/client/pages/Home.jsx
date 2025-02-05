import React, { useState } from "react";
import Items from "../component/items/items";
import { products } from "../../data/products";
import Sidebar from "../component/sidebar/sidebar";
import CartTab from "../component/cartTab/CartTab";

const Home = () => {
  // Filter Radio Button
  const [filter, setFilter] = useState('all'); 
  const [filteredData, setFilteredData] = useState(products);
  // Filter Input Button
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'all') {
      setFilteredData(products);
    } else {
      const newData = products.filter(item => item.category === selectedFilter);
      setFilteredData(newData);
    }
  };

  const handleInputFilterChange = (event) => {
    const searchText = event.target.value.toLowerCase(); // Ambil nilai input dan ubah ke lowercase
    setFilterText(searchText);

    if (searchText === '') {
      setFilteredData(products); // Jika input kosong, tampilkan semua data
    } else {
      const newData = products.filter(item =>
        item.name.toLowerCase().includes(searchText) // Filter data berdasarkan nama
      );
      setFilteredData(newData);
    }
  };
  

  return (
    <>
      <div className="flex h-screen">
        <Sidebar filter={filter} handleFilterChange={handleFilterChange} filterText={filterText} handleInputFilterChange={handleInputFilterChange} />
        <div className="flex flex-col flex-1 overflow-y-auto p-4">
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5">
              {filteredData.map((product, key) => (
                <Items key={key} data={product}/>
              ))}
            </div>
          </div>
        </div>
        <CartTab/>
      </div>
    </>
  );
};

export default Home;
