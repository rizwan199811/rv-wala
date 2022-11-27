import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
const tableData = [
    {
      ID: "24977",
      status: "pending",
      title: "24977",
      email: "Anas@gmail.com",
      name: "Anas Murtaza",
      phone: "12345678901",
      nightlyRate: "200",
      salePrice: "100",
      vin: "12345098",
      location: "canada",
      updated: "10/24/2022",
      created: "10/20/2022",
      action: "",
    },

    {
      ID: "24977",
      status: "done",
      title: "24977",
      email: "Anas@gmail.com",
      name: "Anas Murtaza",
      phone: "12345678901",
      nightlyRate: "200",
      salePrice: "100",
      vin: "12345098",
      location: "canada",
      updated: "10/24/2022",
      created: "10/20/2022",
      action: "",
    },


  ];
const Fleet = () => {
  return (
    <div>
    <Card>
      <CardBody>
        <div className="fleet-div">
            <div>
        <CardTitle tag="h5">Fleets</CardTitle>
        </div>
        <div>
            <p>Total Listings: <b>1</b> </p>
            <p>Active Listings: <b>0</b> </p>
            <p>Pending Listings: <b>0</b> </p>
            <p>Inactive Listings: <b>1</b> </p>
        </div>
        </div>

        <Table className="no-wrap mt-3 align-middle " responsive borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Title</th>
              <th>Host Name / Email</th>
              {/* <th>Host Email</th> */}
              <th>Host Phone</th>
              <th>Nightly Rate</th>
              <th>Sale Price</th>
              <th>VIN</th>
              <th>Location</th>
              <th>Updated</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((tdata, index) => (
              <tr key={index} className="border-top">
               <th scope="row">{tdata.ID}</th>
               <td>
                  {tdata.status === "pending" ? (
                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                  ) : tdata.status === "holt" ? (
                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                  ) : (
                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                  )}
                </td>
               <td>{tdata.title}</td>
               <td>
                  <div className="d-flex align-items-center p-2">
                    <div className="ms-3">
                      <h6 className="mb-0">{tdata.name}</h6>
                      <span className="text-muted">{tdata.email}</span>
                    </div>
                  </div>
                </td>
               <td>{tdata.phone}</td>
               <td>{tdata.nightlyRate}</td>
               <td>{tdata.salePrice}</td>
               <td>{tdata.vin}</td>
               <td>{tdata.location}</td>
               <td>{tdata.updated}</td>
               <td>{tdata.created}</td>
                
                <td>
                <i className="bi bi-trash"></i>
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

export default Fleet