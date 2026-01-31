export function BuyService({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt="" className="size-4.5"></img>
      <p>{text}</p>
    </div>
  );
}
