import "../../SASS/home/Browce.scss";
import browceImg1 from "../../assets/images/browce_img1.png";

const Browce = () => {
  return (
    <div className="container browce__container">
      <div className="browce__text_box">
        <h2 className="browce__title">Browse The Range</h2>
        <p className="browce__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="browce__img_box">
        <div className="browce__img_card">
          <div className="img_card__img">
            <img src={browceImg1} alt="img-1" />
          </div>
          <h3 className="card_text">Dining</h3>
        </div>
        <div className="browce__img_card">
          <div className="img_card__img">
            <img src={browceImg1} alt="img-1" />
          </div>
          <h3 className="card_text">Living</h3>
        </div>
        <div className="browce__img_card">
          <div className="img_card__img">
            <img src={browceImg1} alt="img-1" />
          </div>
          <h3 className="card_text">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default Browce;
