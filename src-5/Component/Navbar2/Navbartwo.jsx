import { Link, NavLink } from "react-router-dom";
import "./Navbartwo.css";

export default function Navbar2() {
  return (
    <>
      <div className="NtwoContainer">
        <div className="part1">
          <div className="part1a">
            <div>Women</div>
            <div>Men</div>
            <div>Kid</div>
          </div>
          <div>
            <h1><NavLink className="abcdef" to={`/home`}>FARFETCH</NavLink></h1>
          </div>
          <div className="Ntwoicons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Font_Awesome_5_regular_user.svg/1792px-Font_Awesome_5_regular_user.svg.png"
              alt="#"
            />
            <img
              src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png"
              alt="#"
            />
            <img
              src="https://icon-library.com/images/bag-icon/bag-icon-3.jpg"
              alt="#"
            />
          </div>
        </div>

        {/*  */}
        <div className="secondpart">
          <div className="secondpart1">
            <div>Sale</div>
            <div ><NavLink className="abcdef" to={`/new-in`}>New In</NavLink></div>
            <div>Shop By</div>
            <div>Brand</div>
            <div>Clothing</div>
            <div>Shoes</div>
            <div>Bags</div>
            <div>Accessories</div>
            <div>Jewelry</div>
            <div>Pre-Owne</div>
          </div>

          <div>
            <input className="input1" type="text" placeholder="Search" />
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
