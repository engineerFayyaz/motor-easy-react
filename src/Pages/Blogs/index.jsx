import { BlogsContainer } from "../../Components/BlogsContainer";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import TopHeader from "../../Components/TopHeader";
import "./blogs.css"
export const Blogs = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <main>
        <section>
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-12 about_us_bg_image d-flex justify-content-center align-items-center flex-column">
                <h5>Blogs- Motor Easy</h5>
                <p>You Here! &gt; Home &gt; Blogs</p>
              </div>
            </div>
          </div>
        </section>
        <BlogsContainer />
      </main>
      <Footer />
    </>
  );
};
