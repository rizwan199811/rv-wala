import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Table } from "reactstrap";


const tableData = [
  {
    title: "2009 Rpod — Draft",
    category: "Travel Trailer",
    date: "	Last Modified 2022/07/30 at 6:43 pm",

  },


];

const RVlisting = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">MY RVs</CardTitle>

          <Table className="no-wrap mt-3 align-middle " responsive borderless>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>

                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                
                  <td>{tdata.title}</td>
                  <td>{tdata.category}</td>
                  <td>{tdata.date}</td>
                  <td>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-three-dots"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link to="/rvlisting/edit" className="dropdown-item" href="#">Edit</Link></li>
                        <li><Link to="/rvlisting/view" className="dropdown-item" href="#">View</Link></li>

                    </ul>
                    </div>
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

export default RVlisting