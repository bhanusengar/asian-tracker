import React from 'react'
import { formatDate } from '../../../utils'
import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
const SingleNews = ({ data, story }) => {

  return (
    <>

      <section class="main-sectoion">
        <div class="scrn-container">
          <div class="row">
            <div class="col-lg-8">
              <div class="main-content argentina-content">
                <h3 class="argentina-title">{data.title}</h3>
                <div class="argentina-date-box">
                  <p class="date-box">{formatDate(data.publishedAt)}| Politics | 2hrs</p>
                  <div class="date-view">
                    <div class="views">
                      <p><img src="/images/book.svg" /> <span>Views</span></p><p>48</p>
                      <p><img src="/images/comment.svg" /> <span>Comment</span></p><p>48</p>
                    </div>
                  </div>
                </div>
                <div class="ar-banner">
                  <img src={data.urltoimage} />
                </div>
                <div class="ar-share-box">
                  <div class="share-title">
                    <p><b>By {data.author}</b> </p>
                    <span>Business reporter, Kigali, Rwanda</span>
                  </div>
                  <div class="social-share">
                    <a href="#">Share : </a>
                    <a href="#" target="_blank"><img src="/images/face.svg" /></a>
                    <a href="#" target="_blank"><img src="/images/twiter.svg" /></a>
                    <a href="#" target="_blank"><img src="/images/instagram.svg" /></a>
                    <a href="#" target="_blank"><img src="/images/share.svg" /></a>
                  </div>
                </div>
                <div class="ar-content-box">
                  <p>
                    {data.description}
                  </p>
                  <div class="ar-images-box">
                    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="ar-right-side">
                <img src="/images/ar-.png" class="ar-right-image" />
                <div class="ar-right-side-content-side">
                  <div class="right-title">
                    <h3>Top Stories</h3>
                    <div class="dropdown right-drop-down" >
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>All countries</span>
                      </button>
                      <ul class="dropdown-menu right-dropdown-menu">
                        <li><a class="dropdown-item" href="#">All countries</a></li>
                        <li><a class="dropdown-item" href="#">All countries</a></li>
                        <li><a class="dropdown-item" href="#">All countries</a></li>
                      </ul>
                    </div>
                  </div>


                  <div class="right-cont-box">
                    <div class="ar-right-city-list">

                      {
                        story.bool && story.data.length != 0 && story.data.slice(0, 3).map((curlElem1, key) => {
                          return <div class="city-card">

<img src={curlElem1.image} />
                            <div class="city-card-content">


                              <a class="btn btn-city">{curlElem1.country.title}</a>
                              <h3>{curlElem1.title}
                              </h3>
                              <div class="city-date">
                                <p>{formatDate(curlElem1.created_at)} | {curlElem1.category.title}</p>
                              </div>
                            </div>
                          </div>
                        })
                      }


                    </div>
                  </div>
                </div>
                <img src="/images/city-big.png" class="city-big" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="section-banner-in-0">
        <div class="scrn-container">
          <div class="row">
            <div class="col-xl-12 ">
              <div class="control-group title-boin " align="conter">
                <h2> Sign Up for the Newsletter</h2>

                <div class="controls bootstrap-timepicker was-lo">
                  <input type="email" class="email" name="email" placeholder="Enter your email address" />
                  <button type="button"> <a href="#">Sign Up</a></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default SingleNews