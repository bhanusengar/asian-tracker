import React from 'react'

const index = () => {
  return (
    <div class="card-wrapper">
      <form>
        <fieldset class="scheduler-border">
          <legend class="scheduler-border">Sign up for the Newsletter</legend>
          <div class="control-group">
            <h2>This week in Asia</h2>
            <p>Catch up on our coverage of the region, all in one place.</p>
            <div class="controls bootstrap-timepicker">
              <input type="email" class="email" name="email"
                placeholder="Enter your email address" />
              <button type="button" className='ms-1'> <a  href="#">Sign Up</a></button>
            </div>
          </div>
        </fieldset>
      </form>
      
    </div>
  )
}

export default index