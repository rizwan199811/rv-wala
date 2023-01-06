import axios from 'axios'
import moment from 'moment'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Table } from 'reactstrap'
import { baseURL } from '../../config/apiURL'

const tableData = [
  {
    title: '2009 Rpod — Draft',
    category: 'Travel Trailer',
    date: '	Last Modified 2022/07/30 at 6:43 pm',
  },
]
const itemsPerPage = 12,
  minDistance = 0

const RVlisting = () => {
  const [rvs, setRVs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const fetchRVs = async (currentPage = 1) => {
    try {
      setRVs([])
      setLoading(true)
      let body = {
        page: currentPage,
        limit: itemsPerPage,
        searchCriteria: {
          disabled: false,
        },
        owner: true,
        token: localStorage.getItem('token'),
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
    } catch (e) {
      setLoading(false)
    }
  }

  const handlePageClick = async (event) => {
    console.log({ event })
    let currentPage = event.selected + 1
    await fetchRVs(currentPage)
  }
  useEffect(() => {
    fetchRVs()
  }, [])

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">MY RVs</CardTitle>

          <Table className="no-wrap mt-3 align-middle " responsive borderless>
            <thead>
              <tr>
                <th>Make-Year</th>
                <th>Type</th>
                <th>Minimum Nights</th>
                <th>List Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                rvs.length > 0 &&
                rvs.map((tdata, index) => (
                  <tr key={index} className="border-top">
                    <td>{tdata.RVInfo.make + '-' + tdata.RVInfo.year}</td>
                    <td>{tdata.RVInfo.type}</td>
                    <td>{tdata.ListInfo.min_nights}</td>
                    <td>{moment(tdata.createdAt).format('LLL')}</td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link
                              to={'/rvlisting/edit/' + tdata._id}
                              className="dropdown-item"
                              href="#"
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={'/rvlisting/view/' + tdata._id}
                              className="dropdown-item"
                              href="#"
                            >
                              View
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              {!loading && rvs.length == 0 && (
                <tr className="table-loader">
                  <td colSpan={5}>No data found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      {rvs.length > 0 && (
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
    </div>
  )
}

export default RVlisting
