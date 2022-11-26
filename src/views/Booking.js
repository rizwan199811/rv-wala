import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    booking: "#791",
    email: "hgover@gmail.com",
    project: "2009 R-POD",
    user: "Jessica",
    weeks: "August 22, 2022 - August 24, 2022",
    budget: "95K",
  },

];
const Booking = () => {
  return (
    <div>
           <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Booking Listing</CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Bookings</th>
                <th>Listing</th>

                <th>User</th>
                <th>Dates</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">

                  <td>{tdata.booking}</td>
                  <td>{tdata.project}</td>
                  <td>{tdata.user}</td>
                  <td>{tdata.weeks}</td>
                  <td>
                  <Button className="btn me-2" outline color="success" size="sm" >Confirmed</Button>
                  </td>
                  <td>
                  <Button className="btn me-2" color="success" size="sm" >Confirm</Button>
                  <Button className="btn" color="danger" size="sm"> Decline</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
    </div>
  )
}

export default Booking