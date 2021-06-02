function Row({ id, name, price, quantity }) {
  const handleOnChange = (e) => {
    console.log(e.taget.value)
  };

  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src={`images/${id}.png`}
              alt=""
              className="img-fluid d-none d-md-block rounded mb-2 shadow"
            />
          </div>
          <div className="col-md-9 text-left mt-sm-2">
            <h4>{name}</h4>
            <p className="font-weight-light">Brand &amp; Name</p>
          </div>
        </div>
      </td>
      <td data-th="Price">${price}</td>
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          onChange={handleOnChange}
          value={quantity}
        />
      </td>
      <td className="actions" data-th="">
        <div className="text-right">
          {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
            <i className="fas fa-sync"></i>
          </button> */}
          <button className="btn btn-white border-secondary bg-white btn-md mb-2">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
export default Row;
