import Footer from "./Footer";
import image from "./assets/cottonbro.jpg";

export default function Apropos() {
  return (
    <>
      <h4 className="text-center mt-3 text-bg-warning">Page : À Propos</h4>
      <div className="card mx-auto mt-5" id="apropos-card">
        <img
          src={image}
          className="card-img-top"
          alt="image ordinateur portable"
        />
        <div className="card-body bg-white">
          <h5 className="card-title text-center">First Blog</h5>
          <p className="card-text">
            Première application genre blog, avec appel API : JsonPlaceHolder et
            React-Router-Dom
          </p>
          <a
            href="https://www.pexels.com/fr-fr/photo/mains-ordinateur-portable-porter-dispositif-5474300/"
            className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Image cottonbro studio via le site pexels.com
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
