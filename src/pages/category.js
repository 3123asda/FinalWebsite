import React from 'react'
import NavBar from './../navigation/navigationBar'
import './../pagesCss/contact.css'
import { Link } from 'react-router-dom'

function Category() {

  alert("When clicking 'Add to Cart,' navigating to the homepage causes incorrect or missing information display. This issue relates to the use of useLocation from react-router-dom. Refreshing the value after moving between pages is challenging to troubleshoot and time-consuming.")

  //
  return (
    <div className='DefaultBody'>
      <NavBar></NavBar>

      <div className='DefaultContentValue'>


        <div className='DefaultBoxValue'>
          <div className='DefaultContextBoxValue'>

            <div className='DefaultProductNameContentValue'>
              <p>Adidas</p>
            </div>

            <div className='DefaultFrameBoxValue'>
              <iframe src='./clothItems/adidasCloth.html' className='DefaultFrameValue' />
            </div>

            <div className='DefaultBoxContentValue'>
              <Link to="/home" className='DefaultButtonValue'>
                <p>Add to cart</p>
              </Link>
            </div>

          </div>
        </div>

        <div className='DefaultBoxValue '>
          <div className='DefaultContextBoxValue'>

            <div className='DefaultProductNameContentValue'>
              <p>Guess</p>
            </div>

            <div className='DefaultFrameBoxValue'>
              <iframe src='./clothItems/guessCloth.html' className='DefaultFrameValue' />
            </div>

            <div className='DefaultBoxContentValue'>
              <Link to="/home" className='DefaultButtonValue'>
                <p>Add to cart</p>
              </Link>
            </div>

          </div>
        </div>

        <div className='DefaultBoxValue'>
          <div className='DefaultContextBoxValue'>

            <div className='DefaultProductNameContentValue'>
              <p>Jag</p>
            </div>

            <div className='DefaultFrameBoxValue'>
              <iframe src='./clothItems/jagCloth.html' className='DefaultFrameValue' />
            </div>

            <div className='DefaultBoxContentValue'>
              <Link to="/home" className='DefaultButtonValue'>
                <p>Add to cart</p>
              </Link>
            </div>

          </div>
        </div>

        <div className='DefaultBoxValue'>
          <div className='DefaultContextBoxValue'>

            <div className='DefaultProductNameContentValue'>
              <p>Levi's</p>
            </div>

            <div className='DefaultFrameBoxValue'>
              <iframe src='./clothItems/LevisCloth.html' className='DefaultFrameValue' />
            </div>

            <div className='DefaultBoxContentValue'>
              <Link to="/home" className='DefaultButtonValue'>
                <p>Add to cart</p>
              </Link>
            </div>

          </div>
        </div>

        <div className='DefaultBoxValue'>
          <div className='DefaultContextBoxValue'>

            <div className='DefaultProductNameContentValue'>
              <p>Nike</p>
            </div>

            <div className='DefaultFrameBoxValue'>
              <iframe src='./clothItems/nikeCloth.html' className='DefaultFrameValue' />
            </div>

            <div className='DefaultBoxContentValue'>
              <Link to="/home" className='DefaultButtonValue'>
                <p>Add to cart</p>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Category