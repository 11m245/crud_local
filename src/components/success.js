function Success() {


    return (<>

        <div className="card mx-auto my-5" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="success-gif.gif" className=" img-fluid rounded-start" alt="img alt" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-success">Success</h5>
                        <p className="card-text"> CRUD Operation Successful</p>
                        <p className="card-text"><small className="text-muted text center">just now updated</small></p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}



export { Success }