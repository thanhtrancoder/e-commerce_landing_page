import nysaleImg from "../assets/images/nysale.avif";

import { leafIcon } from "../icon.js";

export function Product({ product, handleNutritionalInfoClick, className }) {
  return (
    <div id="product-img-container" className={className}>
      <img
        src={product?.image}
        alt=""
        className="aspect-square w-full rounded-lg object-cover"
        id="product-img"
      />
      {product?.specialOffer && (
        <img
          id="newsale-img"
          src={nysaleImg}
          alt=""
          className="absolute top-4 right-4 h-20 w-20 rounded-lg object-cover"
        />
      )}

      {product?.specialOffer && (
        <button
          id="nutritional-info-btn"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-full border bg-white px-9 py-2 opacity-85"
          onClick={handleNutritionalInfoClick}
        >
          <img src={leafIcon} alt="" className="h-6 w-6" />
          <span className="font-montserrat text-black-bf text-sm whitespace-nowrap">
            Nutritional Information
          </span>
        </button>
      )}
    </div>
  );
}
