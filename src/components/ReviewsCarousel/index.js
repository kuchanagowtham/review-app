import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]
    return (
      <div>
        <h1>Reviews</h1>
        <div>
          <img src={imgUrl} alt={username} />
          <h1>{username}</h1>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.addReviewIndex - 1,
      }))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.addReviewIndex + 1,
      }))
    }
  }

  render() {
    const reviewsList = this.props
    const {activeReviewIndex} = this.state
    console.log(activeReviewIndex)

    return (
      <div className="app-container">
        <button
          type="button"
          data-Testid="left-arrow"
          onClick={this.onLeft}
          className="btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left-icon"
          />
        </button>
        {this.getReview(reviewsList)}
        <button type="button" data-Testid="right-arrow" onClick={this.onRight}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right-icon"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
