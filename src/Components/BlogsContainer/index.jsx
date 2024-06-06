
import blog1 from "../../assets/images/blog1.webp"
import blog2 from "../../assets/images/blog2.webp"
import blog3 from "../../assets/images/blog3.webp"
import blog4 from "../../assets/images/blog4.webp"

export const BlogsContainer = () => {

    return (
        <>
        
        <div className="container main-blogs-section mt-5">
  <div className="row d-flex">
    <div className="leftcolumn col-lg-8">
      <section className="light">
        <div className="container py-2">
          <article className="postcard light blue" id="blog1">
            <a className="postcard__img_link" href="/BlogsDetail">
              <img
                className="postcard__img"
                src={blog1}
                alt="High Mileage Engine Care"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a
                  href="/BlogsDetail
                                  "
                >
                  High Mileage Engine Care: The Ultimate Oil Change Guide
                </a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />
                  Mon, May 27th 2024
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">
                At Absolute Car Care in Framingham, MA, we understand the
                challenges of maintaining a vehicle with high mileage. Proper
                engine care, especially when it comes to oil changes, is one of
                the most crucial aspects of extending the life and performance
                of your car. This guide provides essential tips and insights for
                high-mileage engine care,{" "}
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">
                  <a href="/BlogsDetail">Read more..</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light blue" id="blog2">
            <a className="postcard__img_link" href="/BlogsDetail">
              <img
                className="postcard__img"
                src={blog2}
                alt="Continue Driving"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="/BlogsDetail">
                  Is It Safe to Continue Driving with the Check Engine Light On?
                </a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />
                  Mon, May 27th 2024
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">
                At some point, almost every vehicle owner will experience the
                moment when the check engine light (CEL) illuminates on the
                dashboard. It’s an indicator that something is amiss with your
                vehicle, but the severity of the issue can vary widely. Absolute
                Car Care, a trusted auto mechanic shop in Framingham, MA, is
                here to guide […]
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item play red">
                  <a href="/BlogsDetail">Read more..</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light green" id="blog3">
            <a className="postcard__img_link" href="/BlogsDetail">
              <img
                className="postcard__img"
                src={blog3}
                alt="My Car Battery"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                <a href="/BlogsDetail">
                  How Do I Know if My Car Battery is Dead or Just Discharged?
                </a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />
                  Mon, May 27th 2024
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">
                For many drivers in Framingham, MA, and beyond, a car that won’t
                start is a familiar scenario. Often, the culprit is the car
                battery. But how can you tell if your car battery is dead or
                just discharged? Understanding the difference can save you time,
                money, and frustration. Absolute Car Care, your trusted auto
                mechanic […]
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">
                  <a href="/BlogsDetail">Read more..</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light yellow" id="blog4">
            <a className="postcard__img_link" href="/BlogsDetail">
              <img
                className="postcard__img"
                src={blog4}
                alt="Car Brakes Need Repair"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title yellow">
                <a href="/BlogsDetail">
                  How to Determine If Your Car Brakes Need Repair or Replacement
                </a>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2" />
                  Mon, May 27th 2024
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">
                Understanding when your brakes need repair or replacement is
                crucial for your safety on the road. Let’s dive into the key
                signs that indicate it’s time to give your brakes some
                much-needed attention, whether they need a repair or a complete
                replacement. Listening to Your Car: Squealing or Grinding Noises
                One of the first signs […]{" "}
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">
                  <a href="/BlogsDetail">Read more..</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
    <div className="rightcolumn col-lg-4 p-4">
      <div className="card search-bar">
        <h3 className="search-bar-title">Search Here</h3>
        <input
          type="text"
          placeholder="Search.."
          className="search-bar-input"
        />
      </div>
      <div className="card">
        <h3>Popular Post</h3>
        <ul className="latest-posts">
          <li className="post">
            <a href="#blog2">
              Is It Safe to Continue Driving with the Check Engine Light On?
            </a>
          </li>
          <li className="post">
            <a href="#blog3">
              How Do I Know if My Car Battery is Dead or Just Discharged?
            </a>
          </li>
          <li className="post">
            <a href="#blog4">
              How to Determine If Your Car Brakes Need Repair or Replacement
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h3>Categories</h3>
        <ul className="categories">
        <li className="post">
            <a href="#blog2">
              Is It Safe to Continue Driving with the Check Engine Light On?
            </a>
          </li>
          <li className="post">
            <a href="#blog3">
              How Do I Know if My Car Battery is Dead or Just Discharged?
            </a>
          </li>
          <li className="post">
            <a href="#blog4">
              How to Determine If Your Car Brakes Need Repair or Replacement
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <h3>Recent Comments</h3>
        <ul className="recent-comments">
          <li className="post">Love to know.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </>
    )
}