import React, { useState, useEffect } from 'react';

const FilterSearch = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    // Fetch the items from the API
    fetch('https://strapi-production-6616.up.railway.app/api/items?populate=image')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  useEffect(() => {
    // Filter the items when the filter changes
    setFilteredItems(
      items.filter(item => item.attributes.name.includes(filter))
    );
  },[filter]);

  return (
    <div>
      <input value={filter} onChange={event => setFilter(event.target.value)} />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSearch;


