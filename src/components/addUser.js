
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddUser({ userList, setUserList }) {
    const navigate = useNavigate();


    const addData = (currentUser) => {
        setUserList([...userList, currentUser]);
        navigate("/success");
        // console.log("added");
    }

    return (<div>
        <AddUserForm addData={addData} />
    </div>)
}


function AddUserForm({ addData }) {

    const [currentId, setCurrentId] = useState(100);


    const initialObjectValues = {
        id: currentId,
        userInfo: { userId: "", password: "", name: "" },
        contactInfo: { mobile: "", email: "" },
        address: {
            line1: "",
            line2: "",
            country: "",
            pin: ""
        }
    };

    const [currentUser, setCurrentUser] = useState(initialObjectValues);


    const handleSubmit = (e) => {
        (e).preventDefault();
        setCurrentId(currentId + 1)
        addData({ ...currentUser, id: currentId });
        // console.log("current Data is", currentUser);
    }
    // console.log(currentUser);



    return (<>

        <form onSubmit={handleSubmit} className="row g-3 form-wrapper p-3 w-75 mx-auto" >
            <h3 className="text-center">Create User Form</h3>

            <h6 className="mb-0 text-primary">Login Information</h6>
            <div className="col-md-6">
                <label htmlFor="user_id" className="form-label">User ID</label>
                <input type="text" className="form-control" id="user_id" name="u_id" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            userInfo: {
                                ...currentUser.userInfo,
                                userId: e.target.value
                            }
                        }
                    );
                }} />
            </div>
            <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="pw" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            userInfo: {
                                ...currentUser.userInfo,
                                password: e.target.value
                            }
                        }
                    );
                }} />
            </div>

            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            userInfo: {
                                ...currentUser.userInfo,
                                name: e.target.value
                            }
                        }
                    );
                }} />
            </div>

            <h6 className="mb-0 text-primary">Contact Information</h6>
            <div className="col-md-6">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="mobile" name="mob" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            contactInfo: {
                                ...currentUser.contactInfo, mobile: e.target.value
                            }
                        }
                    );
                }} />
            </div>

            <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            contactInfo: {
                                ...currentUser.contactInfo, email: e.target.value
                            }
                        }
                    );
                }} />
            </div>
            <h6 className="mb-0 text-primary">Address</h6>
            <div className="col-12">
                <label htmlFor="line1" className="form-label">Address</label>
                <input type="text" className="form-control" id="line1" placeholder="line1" name="l1" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            address: {
                                ...currentUser.address, line1: e.target.value
                            }
                        }
                    );
                }} />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="line2" placeholder="line2" name="l2" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            address: {
                                ...currentUser.address, line2: e.target.value
                            }
                        }
                    );
                }} />
            </div>
            <div className="col-md-6">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" id="country" defaultValue="India" name="country" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            address: {
                                ...currentUser.address, country: e.target.value
                            }
                        }
                    );
                }} />
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                    <option value="NA" >Choose...</option>
                    <option value="TN">TamilNadu</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="pin" className="form-label">Pincode</label>
                <input type="text" className="form-control" id="pin" name="pin" onChange={(e) => {
                    setCurrentUser(
                        {
                            ...currentUser,
                            address: {
                                ...currentUser.address, pin: e.target.value
                            }
                        }
                    );
                }} />
            </div>
            <div className="col-12 align-self-end ">
                <div className="form-check ">
                    <input className="form-check-input" type="checkbox" id="gridCheck" required />
                    <label className="form-check-label" htmlFor="gridCheck">
                        AGreed to the Data Sharing  and privacy policy
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Create User</button>
            </div>
        </form >

    </>


    )

}

export { AddUser }