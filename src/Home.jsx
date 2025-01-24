import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <h1 className="mt-4 text-center text-warning">Bienvenue sur le Blog !</h1>
      <div id="cardHome" className="card text-bg-light mt-5 mx-auto">
        <div className="card-header text-center">Home Page</div>
        <div className="card-body">
          <h5 className="card-title">Application Blog</h5>
          <p className="card-text">
            Appel API avec React et Routage avec react-router-dom sur
            JsonPlaceHolder API
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
