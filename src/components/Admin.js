import { Card } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Admin = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate()
  const location = useLocation()
  const { title, author, genre, rating, image, review } = location.state

  const addForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    console.log(event.target.name)
  }

  const addReview = (event) => {
    event.preventDefault()

    fetch(`${process.env.REACT_APP_API_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.error(error))

    navigate('/books-reviews')
  }

  const updateReview = (event) => {
    event.preventDefault()

    fetch(`${process.env.REACT_APP_API_ENDPOINT}?title=${title}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.error(error))

    navigate('/books-reviews')
  }

  const deleteReview = (event) => {
    event.preventDefault()
    fetch(`${process.env.REACT_APP_API_ENDPOINT}?title=${title}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.error(error))

    navigate('/books-reviews')
  }

  return (
    <div>
      <div className='admin-cards'>
        
        <div>
          <Card className='each-card' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                <h2>Add a Book Review!</h2>
                <small>
                  Enter the information of the book you want to add below.
                </small>
              </Card.Title>
              <form className='add-review'>
                <label htmlFor=''>Book Title: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: Ted and Ann'
                  name='title'
                  id='title'
                />
                <label htmlFor=''>Author: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: Rebecca Morris'
                  name='author'
                  id='author'
                />
                <label htmlFor=''>Rating: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: 4 stars'
                  name='rating'
                  id='rating'
                />
                <label htmlFor=''>Genre: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: True Crime'
                  name='genre'
                  id='genre'
                />
                <label htmlFor=''>Image: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: image url'
                  name='image'
                  id='image'
                />
                <label htmlFor=''>Review: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: loved it!'
                  name='review'
                  id='review'
                />
                <button onClick={addReview}>Add Review</button>
              </form>
            </Card.Body>
          </Card>
        </div>
        
        <div>
          <Card className='each-card' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                <h2>Update or Edit Book Review</h2>
                <small>
                  Enter the information of the book you want to update or
                  delete.
                </small>
              </Card.Title>
              <form className='add-review'>
                <label htmlFor=''>Book Title: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: Ted and Ann'
                  name='title'
                  id='title'
                />
                <label htmlFor=''>Author: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: Rebecca Morris'
                  name='author'
                  id='author'
                />
                <label htmlFor=''>Rating: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: 4 stars'
                  name='rating'
                  id='rating'
                />
                <label htmlFor=''>Genre: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: True Crime'
                  name='genre'
                  id='genre'
                />
                <label htmlFor=''>Image: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: image url'
                  name='image'
                  id='image'
                />
                <label htmlFor=''>Review: </label>
                <input
                  onChange={(event) => addForm(event)}
                  type='text'
                  placeholder='ex: loved it!'
                  name='review'
                  id='review'
                />
                <button onClick={updateReview}>Update Review</button>
                <button onClick={deleteReview}>Delete Review</button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      <div className='admin-card'>
        <Card>
          <Card.Body>
            <Card.Title>
              <img src={image} alt='' />
              <h1>Title: {title}</h1>
              <h3>By: {author}</h3>
              <p>
                Rating: {rating}, Genre: {genre}
              </p>
              <p>Review: {review}</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Admin
