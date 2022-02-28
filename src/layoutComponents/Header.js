import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
    <header ref={ref}>
      <Link className="header-item" to="/">
        Home
      </Link>
      <Link className="header-item" to="/register">
        Register
      </Link>
      <Link className="header-item" to="/catalog">
        Catalog
      </Link>
      <Link className="header-item" to="/players">
        Players
      </Link>
      <Link className="header-item" to="/game">
        Game
      </Link>
    </header>
  );
}
