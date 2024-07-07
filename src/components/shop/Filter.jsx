import React, { useEffect, useState } from "react";
import filter from "../../assets/images/filter_img.svg";
import filter2 from "../../assets/images/filter2_img.svg";
import filter3 from "../../assets/images/filter3_img.svg";
import "../../SASS/shop/Filter.scss";

const Filter = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Syltherine",
      type: "chair",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "https://frankfurt.apollo.olxcdn.com/v1/files/3848n9r98suw-UZ/image;s=1280x960",
      count: 1,
    },
    {
      id: 2,
      name: "Leviosa",
      type: "chair",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "src/assets/images/image_2.png",
      count: 1,
    },
    {
      id: 3,
      name: "Lolito",
      type: "beds",
      description: "Luxury big sofa",
      price: 7000000,
      image: "src/assets/images/image_3.png",
      count: 1,
    },
    {
      id: 4,
      name: "Respira",
      type: "desk",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "src/assets/images/image_4.png",
      count: 1,
    },
    // Qo'shimcha elementlar...
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [filterType, setFilterType] = useState("");

  const handleSelect = (e) => {
    const selectedFilter = e.target.value.toLowerCase();
    setFilterType(selectedFilter);
  };

  useEffect(() => {
    if (filterType === "filter" || filterType === "") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item => item.type.toLowerCase() === filterType));
    }
  }, [filterType, data]);

  return (
    <div className="filter">
      <div className="container filter__container">
        <div className="filter__box">
          <div className="filter__cards">
            <div className="filter__card">
              <div className="filter_img_box">
                <img src={filter} alt="Filter" />
              </div>
              <select className="filter_select" onChange={handleSelect}>
                <option value="Filter">Filter</option>
                <option value="Desk">Desk</option>
                <option value="Chair">Chair</option>
                <option value="Beds">Beds</option>
              </select>
            </div>
            <div className="filter_img_box">
              <img src={filter2} alt="Filter2" />
            </div>
            <div className="filter_img_box">
              <img src={filter3} alt="Filter3" />
            </div>
          </div>
          <p className="filter__text">Showing 1–{filteredData.length} of {data.length} results</p>
        </div>
        <div className="filter__box">
          <div className="filter_inp">
            <label htmlFor="show" className="show_label">
              Show
            </label>
            <input type="text" id="show" className="inp" placeholder="16" />
          </div>
          <div className="filter_inp">
            <label htmlFor="short" className="show_label">
              Short by
            </label>
            <input
              type="text"
              id="short"
              className="inp"
              placeholder="Default"
            />
          </div>
        </div>
      </div>

      <div className="filtir">  

      <div className="filter__results, container">
        {filteredData.map((item) => (
          <div key={item.id} className="filter__result card">
            <img src={item.image} alt={item.name} />
            <div className="card__content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price} UZS</p>
            </div>
          </div>
        ))}
      </div>
      </div>


    </div>
  );
};

export default Filter;
