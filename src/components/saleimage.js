import sale from "../assets/images/Sale-image.jpg";

function Saleimage() {
  return (
    <div className="sale-image">
      <img src={sale}></img>
      <div className="sale-image__offer">
        <h2>Udemy flash sale! 24 hours to save.</h2>
        <p>
          Get the top courses for just 499.one day tosave but lifetime to learn
        </p>
      </div>
    </div>
  );
}

export default Saleimage;
