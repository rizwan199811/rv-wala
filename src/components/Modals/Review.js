import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { baseURL } from '../../config/apiURL'
import toastOptions from '../../config/toast'

export const Review = ({ RV }) => {
  const [rating, setRating] = useState(null)
  const [review, setReview] = useState(null)
  const [loading, setLoading] = useState(null)
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'rating':
        setRating(parseInt(e.target.value))
        break
      case 'review':
        setReview(e.target.value)
        break
      default:
        break
    }

    console.log({ e: e.target.value })
  }

  const writeReview = async () => {
    try {
      console.log({ rating, review })

      setLoading(true)
      let body = {
        review,
        rating,
        RV
      }
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: { message },
      } = await axios.post(baseURL + '/misc/write-review', body,{headers})
      toast.success(message, toastOptions)
      setTimeout(() => {
        setLoading(false)
        // history('/login', { replace: true })
      }, 5000)
    } catch ({
      response: {
        data: { message },
      },
    }) {
      console.log({ message })
      toast.error(message, toastOptions)
    }
  }

  return (
    <div
      className="modal fade"
      id="reviewModal"
      tabIndex={22}
      aria-labelledby="reviewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="reviewModalLabel">
              Write a Review
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div class="rate">
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                onClick={handleChange}
              />
              <label for="star5" title="text">
                5 stars
              </label>
              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                onClick={handleChange}
              />
              <label for="star4" title="text">
                4 stars
              </label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                onClick={handleChange}
              />
              <label for="star3" title="text">
                3 stars
              </label>
              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                onClick={handleChange}
              />
              <label for="star2" title="text">
                2 stars
              </label>
              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                onClick={handleChange}
              />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
            <div className=" bg-white mw-100 m-0">
              <form action="#">
                <label class="form-label">REVIEW</label>
                <div className="form-group border-bottom d-flex align-items-center position-relative">
                  <textarea
                    type="text"
                    required=""
                    name="review"
                    placeholder="Enter REVIEW"
                    className="form-control"
                    rows={4}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group my-3">
                  <div
                    className="btn btn-primary rounded-0 d-flex justify-content-center text-center"
                    onClick={writeReview}
                  >
                    SUBMIT REVIEW
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
