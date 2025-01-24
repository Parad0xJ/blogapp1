import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h3 className="text-bg-warning text-center pt-10">
        Cette page n'existe pas ! 4️⃣0️⃣4️⃣{" "}
      </h3>
      <div className="text-center">
        <Link to="/">Retournez sur la HOME - PAGE</Link>
      </div>
    </div>
  );
}
