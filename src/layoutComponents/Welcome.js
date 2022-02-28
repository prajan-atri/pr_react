import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="content">
      <h1>Welcome</h1>
      <Link to="/">Enter Site</Link>
    </div>
  );
}
