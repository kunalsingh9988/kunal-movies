import React from "react";

const Contact = () => {
  return (
    <div className="contact-header">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <span>phone no: 6266750520</span>
        <span>email : kusing51@gmail.com</span>
      </div>

      <div className="form-head">
        <form action="https://formspree.io/f/myyqyjjj" className="form-container" method="POST">
          <div>
            <input name="name" className="form-control" type="text" placeholder="Full Name" required/>
            <input name="number" className="form-control" type="number" placeholder="phone no." required/>
          </div>
          <textarea
          name="maessage"
          className="form-control" 
            placeholder="Discuss with us..."
            id=""
            cols="30"
            rows="10"
            required
          />

          <button type="submit" className="btn btn-outline-dark" value="send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
