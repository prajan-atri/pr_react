import React, { useRef } from "react";

export default function Footer() {
  const ref = useRef();

  // React.useLayoutEffect(() => {
  //   if (ref && ref.current) {
  //     ref.current.style = "background-color: #fa9a9a;";

  //     setTimeout(() => {
  //       ref.current.style = "background-color: none;";
  //     });
  //   }
  // });

  return (
    <footer ref={ref}>
      <span className="footer-item">Copyright</span>
      <span className="footer-item">Privacy Policy</span>
    </footer>
  );
}
