import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//import urls
import * as url from "../../urlhelper/UrlHelper";

// import methods
import { formdata } from "../../utils/Gateway";

export default function Edit() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  const router = useRouter();

  const imageUploadHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const { data } = router.query;
  // setParsedData(data ? JSON.parse(data) : null);
  const parsedData = data ? JSON.parse(data) : null;

  useEffect(() => {
    if (parsedData && parsedData.name) {
      setName(parsedData.name);
    }
    if (parsedData && parsedData.surname) {
      setSurName(parsedData.surname);
    }
    if (parsedData && parsedData.position) {
      setPosition(parsedData.position);
    }

    if (parsedData && parsedData.adrress) {
      setAddress(parsedData.adrress);
    }
    if (parsedData && parsedData.city) {
      setCity(parsedData.city);
    }
    if (parsedData && parsedData.state) {
      setState(parsedData.state);
    }
    if (parsedData && parsedData.country) {
      setCountry(parsedData.country);
    }
    if (parsedData && parsedData.phone) {
      setPhone(parsedData.phone);
    }
    if (parsedData && parsedData.about) {
      setAbout(parsedData.about);
    }
  }, [router.query]);

  const updateUserHandler = async () => {
    try {
      let userData = {
        name,
        surname: surName,
        position,
        adrress: address,
        city,
        state,
        country,
        image: image,
        phone,
        about,
      };

      let requestUrl = url.baseUrl + url.updateUser + `/${parsedData._id}`;

      let method = "PUT";

      const response = await formdata(requestUrl, userData, method);

      if (response.status) {
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit User:</h1>
      <form className="container">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Surname</label>
          <input
            value={surName}
            onChange={(e) => {
              setSurName(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Position</label>
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">State</label>
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Image</label>
          <input
            onChange={imageUploadHandler}
            type="file"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-10"
          onClick={updateUserHandler}
        >
          Edit User
        </button>
      </form>
    </div>
  );
}
