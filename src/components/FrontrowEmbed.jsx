import { useEffect } from "react";

export default function FrontrowEmbed() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src =
      "https://app.thefrontrowhealth.com/api/widgets/script?presentation_type=sticker&product_id=2691";
    s.async = true;
    document.body.appendChild(s);

    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <iframe
      data-state="max"
      className="iframe-frontrow-sticker"
      id="frontrow-sticker"
      src="https://app.thefrontrowhealth.com/api/widgets?presentation_type=sticker&amp;product_id=2691"
      style={{
        transform: "scale(0.73524)",
        transformOrigin: "0px -26.476%",
      }}
    ></iframe>
  );
}
