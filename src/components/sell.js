import React, { useState } from "react";
import {
  uploadBytesResumable,
  getDownloadURL,
  ref,
  deleteObject,
} from "@firebase/storage";
import { storage } from "../Firebase";
// import { useHistory } from "react-router";
// import { useHistory } from "react-router-dom";

import axios from "axios";
import {  useNavigate,Link } from "react-router-dom";

import Loader from "./Loader/Loader";
import { useHttpHook } from "../Hooks/HttpHook";
import { useGlobalAuthContext } from "../AuthContext";
import "../static/sell.css";
const Sell = () => {
  const { currentUser, token } = useGlobalAuthContext();
  const [loader, setLoader] = useState(false);
  // const { loaderOpen, setLoaderOpen, error, sendRequest, open, setOpen } =
  //   useHttpHook();
  const history = useNavigate();

  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [contact, setContact] = useState("");
  const [images, setimages] = useState("");
  const [description, setDescription] = useState("");
  const [breed, setBreed] = useState("");
  // const [imagePreview, setImagePreview] = useState("");
  const [file, setFile] = useState(null);

  const handleCoverImgPreviewInput = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
    }
    console.log("Your selected cover img is: ", file);
  };

  //* UPLOAD FILE LOGIC

  let storageURL;
  // let imageName;

  async function uploadTaskPromise(file) {
    return new Promise(function (resolve, reject) {
      // setLoaderOpen(true);
      if (!file) return;

      // setLoaderOpen(true);
      const storageRef = ref(storage, `img/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      console.log("uploadTask starting...");
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(prog);
        },
        (error) => {
          console.log("ERRRRR!!!!!!");
          alert("Error inside upload file function", error);
          // setLoaderOpen(false);
          reject();
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            // setLoaderOpen(false);
            resolve(downloadURL);
          });
        }
      );
    });
  }

  const postSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    // console.log(title, description, tag1, tag2, tag3, tag4, content);

    try {
      // setLoaderOpen(true);

      storageURL = await uploadTaskPromise(file);
      console.log("PROmisE REsOLVEd ANd got the urL AS", storageURL);
      // setLoaderOpen(false);

      // imageName = storageURL
      //   .substring(storageURL.indexOf("%2F") + 1, storageURL.lastIndexOf("?"))
      //   .slice(2);
      // console.log(imageName);

      const sendBody = {
        breed,
        price,
        location,
        contact,
        images,
        description,
        creatorId: currentUser.id,
        image: storageURL,
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      const response = await axios.post(
        "http://localhost/sell1.php",
        sendBody,
        { headers }
      );

      console.log(response);

      // const response = await fetch("http://localhost:5000/api/posts", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: "Bearer " + token,
      //   },
      //   body: JSON.stringify({
      //     location,
      //     description,
      //     price,
      //     contact,
      //     breed,
      //     creatorId: currentUser.id,
      //     image: storageURL,
      //   }),
      // });
      // console.log(response);

      // await sendRequest(
      //   "http://localhost:5000/api/posts",
      //   "POST",
      //   JSON.stringify({
      //     location,
      //     description,
      //     price,
      //     contact,
      //     breed,
      //     creatorId: currentUser.id,
      //     image: storageURL,
      //     // coverImageName: file.name,
      //   }),
      //   {
      //     "Content-Type": "application/json",
      //     Authorization: "Bearer " + token,
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Credentials": true,
      //   }
      // );
      console.log("REQUEST SENT");
      // history.push("/");
      setLoader(false);

      setLocation("");
      setPrice(0);
      setContact("");
      setDescription("");
      setBreed("");
      setFile(null);
      //  setImagePreview ("");
    } catch (err) {
      setLoader(false);

      // Create a reference to the file to delete
      const deleteImgRef = ref(storage, `img/${file.name}`);
      deleteObject(deleteImgRef)
        .then(() => {
          console.log("Something Went wrong, Image deleted successfully");
        })
        .catch((error) => {
          console.log("an error occured while deleting image", error);
          // throw new Error(error);
        });
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className="sellFormContainer">
          <div className="sellImg">
            <img
              src="https://images.unsplash.com/photo-1598715685267-0f45367d8071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
              alt=""
            />
            <div className="upperFilmSell">
              <h1>HELLO</h1>
              <p>
                We are happy to see you back. Hope that you are doing well,Sell
                your cattles here.
              </p>
              <p style={{ marginTop: "3rem" }}>Want to buy a cattle?</p>
              <Link
                to="/buy"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <button className="buyLink">Buy</button>
              </Link>
            </div>
          </div>
          <form className="sellForm">
            <h1
              style={{ textAlign: "center", margin: "0.2rem", color: "orange" }}
            >
              Sell your cattles
            </h1>
            <p style={{ textAlign: "center", margin: "0.2rem" }}>
              Provide the information about your cattle
            </p>
            <div className="sellName">
              <p className="name">Breed</p>
              <input
                type="text"
                name="sellCattleName"
                className="nameInput"
                placeholder="Breed of cattle"
                onChange={(e) => setBreed(e.target.value)}
                value={breed}
                required
              />
            </div>

            <div className="sellPrice">
              <p className="name">Price</p>
              <input
                type="text"
                name="sellPrice"
                className="priceInput"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
              />
            </div>

            <div className="sellLocation">
              <p className="name">Location</p>
              <input
                type="text"
                name="sellOwnerCity"
                className="locationInput"
                placeholder="Location of Owner"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                required
              />
            </div>
            <div className="sellPhone">
              <p className="name">Phone</p>
              <input
                type="text"
                name="sellPhone"
                className="phoneInput"
                placeholder="Phone number"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                required
              />
            </div>
            <div className="sellImage">
              <p className="name">Images</p>
              <input
                type="file"
                name="sellCattleImage"
                className="imageInput"
                onChange={handleCoverImgPreviewInput}
                required
              />
            </div>
            <div className="sellDesc">
              <p className="name">Description</p>
              <textarea
                id="message"
                class="form-field"
                placeholder="Your Message"
                rows="6"
                name="cattleDesc"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              ></textarea>
            </div>

            <button
              onClick={(e) => {
                postSubmitHandler(e);
              }}
              type="submit"
              className="sellSubmit"
            >
              POST
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Sell;
