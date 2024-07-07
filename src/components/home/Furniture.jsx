
import imgs from "../../assets/images/Images.png"
import "../../SASS/home/Furniture.scss"

const Furniture = () => {
  return (
    <div className="furniture">
      <p className="furniture__text">Share your setup with</p>
      <h2 className="furniture__title">#FuniroFurniture</h2>
      <div className="images__box">
        <img src={imgs} alt="" />
      </div>
    </div>
  )
}

export default Furniture