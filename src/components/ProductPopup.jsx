import ingredientsImage from "../assets/images/ingredients-min.png";

export function ProductPopup({ showProductPopup, setShowProductPopup }) {
  const handleClosePopup = () => {
    setShowProductPopup(false);
  };

  return (
    <div
      id="product-info-popup"
      className={showProductPopup ? "fixed inset-0 z-50 bg-black/70" : "hidden"}
      onClick={handleClosePopup}
    >
      <div className="p-4">
        <div className="relative my-18 space-y-4 rounded-lg bg-white p-4">
          <button className="absolute top-1 right-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-8 text-[#d53e6f]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>

          <h2 className="text-center font-[Lora] text-2xl">
            Nutritional Information
          </h2>
          <img src={ingredientsImage} alt="" />
          <button className="font-montserrat w-full cursor-pointer rounded-lg bg-black p-4.5 text-center text-white">
            Try Lymphatic Drainage Risk-Free
          </button>
          <div className="space-y-3">
            <div className="flex items-center gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4 text-[#d3436e]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-xs">Made & produced in the USA</p>
            </div>
            <div className="flex items-center gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4 text-[#d3436e]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-xs">100% Natural Ingredients</p>
            </div>
            <div className="flex">
              <div className="flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 text-[#d3436e]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="text-xs">60-Day Money-Back Guarantee</p>
              </div>
              <div className="ml-auto flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 text-[#d3436e]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="text-xs">Free Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
