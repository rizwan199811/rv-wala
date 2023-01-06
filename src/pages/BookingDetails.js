import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { useState } from 'react';

const tableData = [
  {
    name: "2009 R-POD",
    project: "$99.00",
    status: "2",
    weeks: "$198.00",
  },
  {
    name: "Sanitizing & Cleaning",
    weeks: "$60.00",
  },

];

const BookingDetails = () => {
  
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Order #792 details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Payment via WooCommerce Payments (pi_3LXSrV2HWsDNz9wa0MgqTESU). Paid on August 16, 2022 @ 5:04 pm. Customer IP: 207.195.86.184
          </CardSubtitle>

          <div className='row mt-3 billing-detail-p'>
            <div className='col-md-4'>
              <p><b>General</b></p>
                <div className='booking-dates my-2'>
                  <p className="text-muted">Date Created:</p>
                  <DatePicker
                      multiple
                      placeholder='Select Dates'
                      plugins={[
                      <DatePanel />
                      ]}
                    />
                </div>
                <div  className='my-2'>
                  <p className="text-muted">Status:</p>
                  <select className="form-select" aria-label="Default select example">
                    <option>select status</option>
                    <option value="1">Pending payment</option>
                    <option value="2">processing</option>
                    <option value="3">On hold</option>
                    <option value="3">Completed</option>
                    <option value="3">Cancelled</option>
                    <option value="3">Refunded</option>
                    <option value="3">Faild</option>
                    <option value="3">Draft</option>
                  </select>
                </div>
                <div className='my-2'>
                <p className="text-muted">Customer:</p>
                <input type="text" class="form-control" placeholder="Jessica Landrie" disabled/>
              </div>
              <div>
                <p className="text-muted">Host:</p>
                <p>Waqas</p>
              </div>
            </div>
            <div className='col-md-4'>
              <p><b>Billing</b></p>
              <div>
                <p>Jessica Landrie</p>
                <p>217</p>
                <p>Gardiner Ave</p>
                <p>Saskatoon SK S7N 1X8</p>
              </div>
              <p className="text-muted"><b>Email Address:</b></p>
              <p>jesslandrie@gmail.com</p>
              <p className="text-muted"><b>Phone:</b></p>
              <p>3064808619</p>
            </div>
            <div className='col-md-4'>
              <p><b>Shipping</b></p>
              <div>
                <p className="text-muted">Address:</p>
                <p>No shipping address set.</p>
              </div>
            </div>
          </div>

          <Button className="btn mt-3" outline color="primary">
                  Update
                </Button>
        </CardBody>
      </Card>

      <Card>
        <CardBody>

          <Table className="no-wrap mt-3 mb-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>

                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.name}</td>
                  <td>{tdata.project}</td>
                  <td>{tdata.status}</td>
                  <td>{tdata.weeks}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='col-md-6 ms-auto'>
                <div className='d-flex justify-content-between'>
                  <span>Items Subtotal:	</span>
                  <b>$198.00</b>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>Fees:	</span>
                  <b>$60.00</b>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>Order Total:	</span>
                  <b>$258.00 CAD</b>
                </div>
                <hr/>
                <div className='d-flex justify-content-between'>
                  <span>Paid:	</span>
                  <b>$258.00 CAD</b>
                </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default BookingDetails