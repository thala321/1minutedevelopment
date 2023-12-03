import React, { useEffect, useState }  from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import { Link } from "react-router-dom";
import { getAllLesson } from '../../FirebaseClient';


const Lesson = () => {
  const [allLesson, setAllLesson] = useState('');

  useEffect(() => {
    const fetchAllLesson = async () => {
      const allLesson = await getAllLesson()
      setAllLesson(allLesson);
    }
    fetchAllLesson()
  }, []);

  // useEffect(() => {
  //   var text = ''
  //   {allLesson && allLesson.map((lesson, i) => (
  //     text = text + `<url><loc> https://hughiephan.co/#/lesson/` + i + `</loc></url>`
  //   ))}
  //   console.log(text)
  // }, [allLesson]);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title> Lesson </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <h2 className="font-rubik">Lesson
              </h2>
              <p className="sub-heading">
                Build your knowledge on Neural Network and Machine Learning
              </p>
            </div>
          </div>
          {/* <form onClick={handleSubmit} className="search-form">
            <input type="text" placeholder="Search for articles..." />
            <button>
              <img src="images/icon/47.svg" alt="icon" />
            </button>
          </form> */}
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* =============================================
            FAQS
        ==============================================  */}
      <div className="faqs-inner-page">
        <img
          src="images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">

              <div className="all-faqs">
                <div className="faqs-all-qus">
                  {allLesson && allLesson.map((course, i) => (
                    <Link
                      className="article-preview d-flex"
                      to={`/lesson/${i}`}
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                    
                      <div>
                        <h3 className="font-rubik">{course.title}</h3>
                        <div className="avatar-info">
                          {course.date} <br /> 
                          From Course: <span> {course.course} </span> - Topic: <span> {course.topic} </span> <br/>
                          {course.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* /.faqs-all-qus  */}
              </div>
              {/*  /.all-faqs */}
              {/* End more-faq-ask */}
            </div>
          </div>
        </div>
      </div>
      {/* /.faqs-inner-page */}
    </div>
  );
};

export default Lesson;
