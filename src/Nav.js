import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
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
    <nav ref={ref}>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/catalog/link-a">Link A</Link>
        </li>
        <li className="nav-item">
          <Link to="/catalog/link-b">Link B</Link>
        </li>
      </ul>
    </nav>
  );
}
