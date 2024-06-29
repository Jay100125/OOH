import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      console.log("POST: ",gig);
      return newRequest.post("/ads", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myAds"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/myads");
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Ad-Space</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Add title for your post"
              onChange={handleChange}
            />
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address of your ad-space"
              onChange={handleChange}
            />
            <label htmlFor="">Expected Traffic</label>
            <select name="traffic" onChange={handleChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Ad-Space Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
            <label htmlFor="">Category</label>
            <select name="category" onChange={handleChange}>
              <option value="wallscapes">Wallscapes</option>
              <option value="digital billboards">Digital Billboards</option>
              <option value="Billboards">Billboards</option>
              <option value="Street furniture">Street Furniture</option>
              {/* <option value="Billboards">Billboards</option> */}
            </select>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Size</label>
            <input
              type="text"
              name="size"
              placeholder="e.g. 10x20 ft"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDescription"
              onChange={handleChange}
              placeholder="Short description of your ad-space"
              cols="30"
              rows="5"
            ></textarea>
            <label htmlFor="">Duration (e.g. 20 days)</label>
            <input
              type="number"
              name="duration"
              placeholder="Specify the available duration for ad placements (days)"
              onChange={handleChange}
            />
            <label htmlFor="">Target Audience</label>
            <input
              type="text"
              name="audience"
              placeholder="Describe the demographic or type of audience that passes by the hoarding"
              onChange={handleChange}
            />
            <label htmlFor="">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter the price"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
