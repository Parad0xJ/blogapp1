/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import spinner from "./assets/spinner.svg";

export default function Users() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null); //reinitialise les erreurs
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! status : ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
        // setError(null);
      } catch (error) {
        setError(error.message);
        console.error("Erreur fetching Posts : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [id]);
  return (
    <>
      <div className="row justify-content-center">
        <h4 className="text-center mt-3 text-bg-warning">Page : {id}</h4>
        {loading && (
          <img
            className="spinner"
            src={spinner}
            alt="logo spinner de chargement"
          />
        )}
        {error && <div className="alert alert-danger">Error : {error}</div>}
        {/* Si la requête reussie mais retourne un tableau vide */}
        {!loading && !error && posts.length === 0 && (
          <div className="alert alert-warning">
            Aucun Post trouvé pour cet utilisateur
          </div>
        )}
        {!loading &&
          !error &&
          posts.map((post) => {
            return (
              <div
                className="col-md-4 col-xl-3 card border border-warning my-1 mx-1 text-center"
                key={post.id}
              >
                <h4 className="card-header text-info">
                  {" "}
                  {post.title.substr(0, 13)}
                </h4>
                <div className="card-body text-warning">{post.body}</div>
                <div className="card-footer">
                  {" "}
                  <mark>
                    User : {post.userId} / ID : {post.id}{" "}
                  </mark>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
