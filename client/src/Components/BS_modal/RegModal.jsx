import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactTooltip from "react-tooltip";
import './RegModal.scss';
function RegModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // pronoun section hide view
  const [view, setView] = useState({
    type : false
  });

  const handleViewHide = () => {
    setView({
      type : true
    })
  }

  // if ! click on custom hide pronoune input 
  const handleHide = () => {
    setView({
      type : false
    })
  }

  return (
    <>
      <Button className='RegModal-btn' onClick={handleShow}>
        Create New Account
      </Button>

      <Modal 
      show={show} onHide={handleClose}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal__title">
              <h2>Sign Up</h2>
              <p>It's quick & easy.</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal__form">
            <form action="#">
              <div className="top__halfinput">
              <input className='divided__input' type="text" placeholder='First Name'/>
                <input  className='divided__input'type="text" placeholder='Sur Name'/>
              </div>
              <div className="bot__input">
              <input type="text" className="full__input" placeholder='Mobile Number Or Email Address'/>
              <input type="text" className="full__input" placeholder='New Password'/>
              </div>

              <div className="sel__optbirth">
              <select name="" id="day">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
               </select>
               <select name="" id="month">
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
               </select>
               <select name="" id="year">
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
               </select>
              </div>
              <div className="sel__optgender">
                <span className="male">
                  <label htmlFor="Male" className='_selected_gender'>Male</label>
                  <input type="radio" value="Male" name="gender" onClick={ handleHide }/>
                </span>
                  <span className="female">
                    <label htmlFor="Female" className='_selected_gender'>Female</label>
                    <input type="radio" value="Female" name="gender" onClick={ handleHide }/>
                  </span>
                <span className="custom">
                  <label htmlFor="Custom" className='_selected_gender'>Custom</label>
                  <input type="radio" value="Custom" name="gender" onClick={handleViewHide}/>
                </span>
              </div>
              {
                view.type && 
                <>
                <select name="" id="pronoun">
                    <option value="">Select your pronoun</option>
                    <option value="">She:"wish her a Happy birthday!"</option>
                    <option value="">He:"wish him a Happy birthday!"</option>
                    <option value="">They:"wish them a Happy birthday!"</option>
                </select>
                <span>Your pronoun is visible to everyone.</span>
                <input type="text" placeholder='Gender (optional)'className='optional' data-bs-toggle="tooltip" data-bs-placement="left"/>
                </>
              }
              <div className="term__condition">
                <p className="top__condition">
                  People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a> 
                </p>
                <p className="bot__condition">
                By clicking Sign Up, you agree to our <a href="#">Terms, </a><a href="#">Privacy Policy</a> and <a href="#">Cookies Policy.</a> You may receive SMS notifications from us and can opt out at any time
                </p>
              </div>
              <div className="submit__btn">
               <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default RegModal;