import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../config/apiURL'
import ReactPaginate from 'react-paginate'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MultiRangeSlider from '../components/MultiRangeSlider'
import { PrettoSlider } from '../components/SimpleSlider'

// import InputRange from 'react-input-range'
// import 'react-input-range/lib/css/index.css'
const ListingRv = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ searchParams: searchParams.get('rvClass') })

  const itemsPerPage = 12, minDistance = 0;
  let initialShow = {
    price: false,
    distance: false,
  }

  const [RVs, setRVs] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [show, toggleShow] = useState(initialShow)
  const [value, setValue] = useState([0, 1000]);
  const [searchCriteria, setSearch] = useState({});

  const history = useNavigate()
  useEffect(() => {
    fetchRVs()
  }, [])
  const fetchRVs = async (currentPage = 1) => {
    try {
      let queryParams = {};
      const rvClass = searchParams.get('rvClass') || '';
      queryParams = rvClass ? { class: rvClass } : queryParams;
      console.log({ queryParams })
      setRVs([])
      setLoading(true)
      let body = {
        page: currentPage,
        limit: itemsPerPage,
        searchCriteria: {
          ...searchCriteria,
          ...queryParams,
          disabled:false
        },
        token:localStorage.getItem('token')
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
    } catch (e) { }
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

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      setSearch({
        ...searchCriteria,
        price: {
          min: Math.min(newValue[0], value[1] - minDistance),
          max: value[1]
        }
      })
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      setSearch({
        ...searchCriteria,
        price: {
          min: value[0],
          max: Math.max(newValue[1], value[0] + minDistance)
        }
      })
    }

  };
  const valueLabelFormat = (value) => {
    const unit = 'mi';
    return `${value}${unit}`;
  }
  const search = async () => {
    toggleShow(initialShow)
    await fetchRVs()
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
                onClick={search}
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
                  <MultiRangeSlider handleChange={handleChange} value={value} search={search} />
                )}
              </div>
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
                
                {show.distance && 
                <div className='p-5'>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  valueLabelFormat={valueLabelFormat}
                  defaultValue={20}
                  min={0}
                  max={300}
                />
                 <button className='login-wrapper-btn'  >Apply</button>
                </div>
                }
                
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
                        <div className='year-ty'>
                          <span className="product-catagory text-white">Year</span>
                          <h6>{x.RVInfo.year}</h6>
                        </div>
                      </div>
                      <div className='d-flex justify-content-between align-items-end'>
                      <div>
                      <span className="product-catagory">Make</span>
                      <h6>{x.RVInfo.make}</h6>
                      </div>
                      <div>
                      <i class="fa-solid fa-bed mx-2"></i>{x.RVInfo.sleep}
                      <i class="fa-solid fa-gauge mx-2"></i>{x.RVInfo.mileage}
                      
                      {/* <span className="product-catagory">Make</span> */}
                      {/* <h6>{x.RVInfo.make}</h6> */}
                      </div>
                      </div>
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
               <div className="empty-state">
            <div className="empty-state__content">
              <div className="empty-state__icon">
                <img src='https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=740&t=st=1664659798~exp=1664660398~hmac=b7b38aad83de2c4af882bdb4e1fbf4bd4645a6868f34d66a6b9345db6eb1f529' />
              </div>
              <div className="empty-state__message">No RV Found.</div>

            </div>
          </div>
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
