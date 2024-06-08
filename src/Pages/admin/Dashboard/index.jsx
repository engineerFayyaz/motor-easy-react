import AdminHeader from "../../../Components/AdminHeader"
import Footer from "../../../Components/Footer"
export const Dashboard = () => {

    return (
        <>
       <AdminHeader />
        <main>
        <div className="container my-5">
            <div className="row p-5">
                <div className="col-md-12 text-center">
                    <h1>Welcome Admin!...</h1>
                </div>
                <div className="col-md-12 text-center  mt-4">
                    <div className="buttons-group d-flex align-items-center justify-content-center gap-3">
                        <a href="/admin/AddPost"><button className="btn btn-dark px-4 py-2">Add Blog Post</button></a>
                        <a href="/admin/manageUsers"><button className="btn px-4 py-2 text-light" style={{background:"#003a63"}} >Manage Users</button></a>
                    </div>
                </div>
            </div>
        </div>
        </main>
        <Footer />
        </>
    )
}