import { ProductContainer } from "./style/Product";
import { productDb } from "../../db";

export default function Product() {
  return (
    <div className="container">
      <ProductContainer>
        <h2>Build & manage distributed teams like no one else.</h2>
        <div className="products">
          {productDb.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={`/assets/${item.img}`} alt={`${item.title}`} />
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ProductContainer>
    </div>
  );
}
