import React from 'react';

function ItemsForm() {
  return (
    <>
     <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            File
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary bg-success">
          Submit
        </button>
      </form>
    </>
  );
}

export default ItemsForm;
