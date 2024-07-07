import filter from "../../assets/images/filter_img.svg";
import filter2 from "../../assets/images/filter2_img.svg";
import filter3 from "../../assets/images/filter3_img.svg";
import "../../SASS/shop/Filter.scss";

const Filter = () => {
  const handleSelect = (e) => {
    const text = e.target.value.toLowerCase()
    console.log(text);
  }
  return (
    <div className="filter">
      <div className="container filter__container">
        <div className="filter__box">
          <div className="filter__cards">
            <div className="fitler__card">
              <div className="filter_img_box">
                <img src={filter} alt="" />
              </div>
              <select className="filter_select" onChange={handleSelect}>
                <option value="Filter">Filter</option>
                <option value="Desk">Desk</option>
                <option value="Chair">Chair</option>
                <option value="Beds">Beds</option>
              </select>
            </div>
            <div className="filter_img_box">
              <img src={filter2} alt="" />
            </div>
            <div className="filter_img_box">
              <img src={filter3} alt="" />
            </div>
          </div>
          <p className="filter__text">Showing 1–16 of 32 results</p>
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
    </div>
  );
};

export default Filter;
