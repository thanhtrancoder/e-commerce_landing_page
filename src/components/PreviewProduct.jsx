export function PreviewProduct({ src, className, onClick }) {
  return (
    <img
      src={src}
      className={`aspect-square h-full rounded-lg object-cover ${className}`}
      onClick={onClick}
    />
  );
}
