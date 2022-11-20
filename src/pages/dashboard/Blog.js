import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
];
const Blog = () => {
  return (
    <div>
    <Card>
      <CardBody>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
        <CardTitle tag="h5">Blogs Listing</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the Blogs
        </CardSubtitle>
        </div>
        <div>
        <Link to="/blogs/add-new-blog">
        <Button className="btn" color="danger">Add Blog</Button>
          </Link>
        </div>
        </div>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>Blog Image</th>
              <th>Blog Title</th>
              <th>View Blog</th>
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
                  </div>
                </td>
                <td>{tdata.project}</td>
                <td><Button className="btn" outline color="info">View</Button></td>
                <td><i className="bi bi-pencil-square me-3 blog-icon"></i> <i className="bi bi-trash blog-icon"></i></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </div>
  )
}

export default Blog

// import {
//   Card,
//   CardBody,
//   CardImg,
//   CardSubtitle,
//   CardText,
//   CardTitle,
//   Button,
// } from "reactstrap";

// const Blog = (props) => {
//   return (
//     <Card>
//       <CardImg alt="Card image cap" src={props.image} />
//       <CardBody className="p-4">
//         <CardTitle tag="h5">{props.title}</CardTitle>
//         <CardSubtitle>{props.subtitle}</CardSubtitle>
//         <CardText className="mt-3">{props.text}</CardText>
//         <Button color={props.color}>Read More</Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default Blog;
