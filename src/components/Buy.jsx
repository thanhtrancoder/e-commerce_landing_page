export function Buy({ text, saveText, price, details }) {
  return (
    <div className="border-buy-green rounded-xl border">
      <div className="flex items-center rounded-xl bg-white p-4">
        <input
          type="radio"
          value="buy-1"
          name="buy"
          className="accent-buy-green border-buy-green size-6 appearance-none rounded-full border-2"
        />
        <div className="ml-3">
          <p>{text}</p>
          <p className="text-xs">{saveText}</p>
        </div>
        <p className="font-montserrat text-black-bf ml-auto line-through">
          {price}
        </p>
      </div>
      <div className="divide-y divide-white overflow-hidden rounded-b-xl">
        {details.map((detail, index) => (
          <div key={index} className="bg-buy-green flex items-center px-2 py-1">
            <img src={detail.icon} className="h-8 w-8" />
            <span className="ml-2 text-xs text-white">{detail.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
