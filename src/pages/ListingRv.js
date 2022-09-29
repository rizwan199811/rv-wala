import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../config/apiURL'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import MultiRangeSlider from '../components/MultiRangeSlider'
// import InputRange from 'react-input-range'
// import 'react-input-range/lib/css/index.css'
const ListingRv = () => {
  const itemsPerPage = 12
  let initialShow = {
    price: false,
    distance: false,
  }
  const [RVs, setRVs] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [show, toggleShow] = useState(initialShow)

  const history = useNavigate()
  useEffect(() => {
    fetchRVs()
  }, [])
  const fetchRVs = async (currentPage = 1) => {
    try {
      setLoading(true)
      let body = {
        page: currentPage,
        limit: itemsPerPage,
      }
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: {
          data: { docs, totalPages, limit, page },
        },
      } = await axios.post(baseURL + '/rv/list', body, { headers })
      setPageCount(totalPages)
      setRVs(docs)
      setLoading(false)
    } catch (e) {}
  }
  const handlePageClick = async (event) => {
    console.log({ event })
    let currentPage = event.selected + 1
    await fetchRVs(currentPage)
    // const newOffset = (event.selected * itemsPerPage) % RVs.length
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`,
    // )
    // setItemOffset(newOffset)
  }
  return (
    <>
      <section className="listing-_bg_sec">
        <h1>Listing</h1>
      </section>
      <div className="container rv-filters-form">
        <div className="row align-items-end">
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">Start Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">End Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <button
                className="btn btn-primary login-wrapper-btn"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="mb-3 position-relative">
              <button
                className="filter-btns"
                onClick={() => toggleShow({ price: !show.price })}
              >
                Price
              </button>
              <div className="price-div">
                {show.price && (
                 <MultiRangeSlider/>
                )}
              </div>
              {/* <button className="filter-btns">Price</button>
              <div className="price-div active">
            
                    <MultiRangeSlider/>
              
              </div> */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3 position-relative">
              <button
                className="filter-btns"
                onClick={() => toggleShow({ distance: !show.distance })}
              >
                Distance
              </button>
              <div className="price-div">
                {show.distance && <input type="range" />}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3 position-relative">
              <button className="filter-btns">Book now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3 position-relative">
              <button className="filter-btns">Reserveable</button>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <lottie-player
          src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
          background="transparent"
          speed="1"
          style={{ width: '250px', height: '250px', margin: 'auto' }}
          loop
          autoplay
        ></lottie-player>
      )}
      <div className="container">
        <div className="row">
          <div>
            <h2>RVs For Rent</h2>
            <p>See RVs For Sale</p>
          </div>
          {RVs.length > 0 &&
            RVs.map((x) => {
              return (
                <div className="col-sm-6 col-12 col-md-4 col-lg-3 col-xxl-3 mb-2">
                  <div
                    className="product-card"
                    onClick={() => {
                      history(`/rvs-for-rent/detail/${x._id}`, {
                        replace: true,
                      })
                    }}
                  >
                    <div className="badge">${x.Pricing.nightly}/night</div>
                    <div className="product-tumb">
                      <img src={x.ImageInfo.files[0].path} alt="" />
                    </div>
                    <div className="product-details">
                      <div className="d-flex justify-content-between">
                        <div>
                          <span className="product-catagory">Type</span>
                          <h6>{x.RVInfo.type}</h6>
                        </div>
                        <div>
                          <span className="product-catagory">Year</span>
                          <h6>{x.RVInfo.year}</h6>
                        </div>
                      </div>
                      <span className="product-catagory">Make</span>
                      <h6>{x.RVInfo.make}</h6>

                      <div className="product-bottom-details">
                        <div className="product-price">
                          <h6>Model</h6>
                          {/* model */}
                          <p>{x.RVInfo.model}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          {RVs.length > 0 && (
            <div id="react-paginate">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
            </div>
          )}
          {RVs.length == 0 && !loading && (
            <>
              <p>No data found</p>
            </>
          )}
          {/* <div className="col-sm-6 col-12 col-md-4 col-xxl-3 mb-2">
            <div className="product-card">
              <div className="badge">$109/night</div>
              <div className="product-tumb">
                <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
              </div>
              <div className="product-details">
                <span className="product-catagory">Type</span>
                <h4>Travel Trailer</h4>
                <span className="product-catagory">Year</span>
                <h4>2016</h4>
                <span className="product-catagory">Make</span>
                <h4>Highland Ridge</h4>

                <div className="product-bottom-details">
                  <div className="product-price">
                    <h6>Model</h6>
                    <p>Olympia Sport</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ListingRv
