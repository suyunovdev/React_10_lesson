// import img1 from "../../assets/images/Rectangle 36.png"
// import img2 from "../../assets/images/Rectangle 38.png"
// import img3 from "../../assets/images/Rectangle 40.png"
// import img4 from "../../assets/images/Rectangle 43.png"
// import img5 from "../../assets/images/Rectangle 45.png"
// import img6 from "../../assets/images/Rectangle 37.png"
// import img7 from "../../assets/images/Rectangle 39.png"
// import img8 from "../../assets/images/Rectangle 41.png"
// import img9 from "../../assets/images/Rectangle 44.png"
import imgs from "../../assets/images/Images.png"
import "../../SASS/home/Furniture.scss"

const Furniture = () => {
  return (
    <div className="furniture">
      <p className="furniture__text">Share your setup with</p>
      <h2 className="furniture__title">#FuniroFurniture</h2>
      <div className="images__box">
        {/* <img src={img1} alt="" className="grid1"/>
        <img src={img2} alt="" className="grid2"/>
        <img src={img3} alt="" className="grid3"/>
        <img src={img4} alt="" className="grid4"/>
        <img src={img5} alt="" className="grid5"/>
        <img src={img6} alt="" className="grid6"/>
        <img src={img7} alt="" className="grid7"/>
        <img src={img8} alt="" className="grid8"/>
        <img src={img9} alt="" className="grid9"/> */}
        <img src={imgs} alt="" />
      </div>
    </div>
  )
}

export default Furniture