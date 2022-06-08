import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import Loader from "../Loader"
import "../../componentsCSS/details.css"

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pokeDetail = useSelector((state) => state.pokeDetail);

  React.useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className="detail">
      <div className="btn-detailes">
      <Link to="/home">
        <button>BACK</button>
      </Link>
      </div>
      {!pokeDetail.length?( 
                <div className="loader-details">
                  <Loader className="loader" />
                </div>):null}
      {Object.entries(pokeDetail).length && (
        <div className="detail-container">
          <div >
              <h1 className="title">POKEMON DETAIL</h1>
            <div>
              <img src={pokeDetail[0].img} alt="img" />
            </div>
            <div>
              <h1>Name: {pokeDetail[0].name.toUpperCase()}</h1>
              <hr />
              <h2>ID: {pokeDetail[0].id}</h2>
              <hr />
              <h2>HP: {pokeDetail[0].hp}</h2>
              <hr />
              <h2>Speed: {pokeDetail[0].speed}</h2>
              <hr />
              <h2>Strength: {pokeDetail[0].strength}</h2>
              <hr />
              <h2>Defense: {pokeDetail[0].defense}</h2>
              <hr />
              <h2>Height: {pokeDetail[0].height} </h2>
              <hr />
              <h2>Weight: {pokeDetail[0].weight} </h2>
              <hr />
              <div>
                {pokeDetail[0].type ? (
                  <h2>
                    Type:
                    {pokeDetail[0].type.map(
                      (e) => " " + e.charAt(0).toUpperCase() + e.slice(1) + " "
                    )}
                  </h2>
                ) : (
                  <h2>
                    Type: 
                    {pokeDetail[0].types.map(
                      (e) => " " + e.charAt(0).toUpperCase() + e.slice(1) + " "
                    )}
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
