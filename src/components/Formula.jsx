export function Formula({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} className="h-8 w-8" />
      <p>{text}</p>
    </div>
  );
}
