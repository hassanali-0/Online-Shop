import React from 'react'
import { useSelector } from 'react-redux'

export default function Add_New_Product() {

  const { products } = useSelector((state) => state.products)
  const uniqueCategories = [...new Set(products.map(product => product.category))]
  return (
    <>
      <div className='ms-5 mbl-margin'>

        <h2 style={{ margin: "1.25rem 0" }}>Add New Product</h2>

        <form>

          <div className='d-flex' style={{ width: "100%" }}>

            <div className="mb-3 me-5" style={{ width: "50%" }}>
              <label className="form-label">Product Title</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3" style={{ width: "50%" }}>
              <label className="form-label">Product Price</label>
              <input type="number" className="form-control" />
            </div>

          </div>

          <div className='d-flex' style={{ width: "100%" }}>

            <div className="mb-3 me-5" style={{ width: "50%" }}>
              <label className="form-label">Product Image</label>
              <input type="file" className="form-control" />
            </div>

            <div className="mb-3" style={{ width: "50%" }}>
              <label className="form-label">Caterogry</label>
              <br />
              <select class="form-select" aria-label="Default select example">
                <option selected>None</option>
                {uniqueCategories.map((category, index) => {
                  return (
                    <option key={index} value={category} style={{textTransform: "capitalize"}}>{category}</option>
                  )
                })
                }
              </select>
            </div>

          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>

      </div>
    </>
  )
}
