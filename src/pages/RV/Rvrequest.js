import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, Spinner } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../../config/apiURL'
import ReactPaginate from 'react-paginate'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Loader from "../../components/layouts/loader/Loader";

  
const Rvrequest = () => {
  const [RVs, setRVs] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([0, 1000]);
  useEffect(() => {
    fetchRVs()
  }, [])
  const itemsPerPage = 12;
 
  const fetchRVs = async (currentPage = 1) => {
    try {
      let queryParams = {};
      setRVs([])
      setLoading(true)
      let body = {
        page: currentPage,
        limit: itemsPerPage,
        searchCriteria: {
          disabled:true
        }
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
  }
  const approveRV = async (status,RVId,user) => {
    try {
      let queryParams = {};
      let userID= user && user._id || ''
      // setRVs([])
      setLoading(true)
      let body = {
        status:status,
        user:userID
      }
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: {
          data: { docs, totalPages, limit, page },
        },
      } = await axios.post(baseURL + '/rv/approve/'+RVId, body, { headers })
      // setPageCount(totalPages)
      // setRVs(docs)
      setLoading(false)
    } catch (e) { }
  }
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">RV Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Listing
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Owner</th>
                <th>Model</th>
                <th>Status</th>
                <th>RV Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <tr className="table-loader">
            <td colSpan={5}>{loading && <Spinner>Loading...</Spinner>}</td>
          </tr>
              {!loading && RVs.length > 0 && RVs.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar ? tdata.avatar : user1 }
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.user.username}</h6>
                        <span className="text-muted">{tdata.user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.RVInfo.model}</td>
                  <td>
                    {tdata.status === "rejected" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "pending" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>
                <Link to={`/rv-request/${tdata.id}`}>
                <Button className="btn" outline color="info" size="sm">
                  Details
                </Button>
                </Link>
                </td>
                  <td>
                  <Button className="btn me-2" color="success" size="sm" onClick={()=>{approveRV("approved",tdata._id,tdata.user)}}>Approve</Button>
                  <Button className="btn" color="danger" size="sm" onClick={()=>{approveRV("rejected",tdata._id,tdata.user)}}> Reject</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
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
    </div>
  )
}

export default Rvrequest