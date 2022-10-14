import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
const tableData = [
    {
      avatar: user1,
      Owner: "Hanna Gover",
      email: "Anas@gmail.com",
      Model: "KZ272",
      status: "pending",
      Details: "35",
      Action: "95K",
    },
    {
      avatar: user2,
      Owner: "Hanna Gover",
      email: "Anas@gmail.com",
      Model: "KZ272",
      status: "done",
      Details: "35",
      Action: "95K",
    },
    {
      avatar: user3,
      Owner: "Hanna Gover",
      email: "Anas@gmail.com",
      Model: "KZ272",
      status: "holt",
      Details: "35",
      Action: "",
    },
  ];
const Rvrequest = () => {
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
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.Model}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>
                <Link to="/rv-request/details">
                <Button className="btn" outline color="info" size="sm">
                  Details
                </Button>
                </Link>
                </td>
                  <td>
                  <Button className="btn me-2" color="success" size="sm">Approve</Button>
                  <Button className="btn" color="danger" size="sm"> Reject</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}

export default Rvrequest