"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./list.css";

const ListFeedBack = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get("/api/feedback/");
        setFeed(res.data);
      } catch (err) {
        console.log("Error fetching feedback:", err);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="feeback_main ">
      <div className="container">

        <h1>Feedback</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Message</th>
              <th>Time/Date</th>
            </tr>
          </thead>
          <tbody>
            {feed ? (
              feed.map((feedback) => (
                <tr key={feedback._id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.rating}</td>
                  <td>{feedback.message}</td>
                  <td>{new Date(feedback.timestamp).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4 no_data">No feedback</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFeedBack;
