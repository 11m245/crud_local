import { useState } from "react";
import { useNavigate } from "react-router-dom";


function DeleteUser({ userList, setUserList }) {
    const [foundIndex, setFoundIndex] = useState(null);

    return (<>
        <InfoForm inputName="Enter User MobileNo." buttonName="Get Info" userList={userList}
            foundIndex={foundIndex} setFoundIndex={setFoundIndex} />
        {(foundIndex) >= 0 && (foundIndex) !== null ? <DeleteUserForm index={foundIndex} userList={userList} setUserList={setUserList} /> : `user not yet found`}

    </>)
}

function InfoForm(props) {

    const { inputName, buttonName, userList, foundIndex, setFoundIndex } = props;

    const [info, setInfo] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const index = getUserIndexfromMobile(info, userList);
        // console.log("index is", index);
        index >= 0 ? setFoundIndex(index) : setFoundIndex(null);

    }

    return (<>
        <form onClick={handleSubmit} className="info-form w-50 mx-auto my-3">
            <div class="input-group mb-3">
                <input onChange={(e) => setInfo(e.target.value)} type="text" className="form-control" placeholder={inputName} aria-label={inputName} aria-describedby="button-g" />
                <button class="btn btn-outline-primary" type="submit" id="button-g">{buttonName}</button>
            </div>
        </form>
    </>)
}

function getUserIndexfromMobile(info, userList) {
    const size = userList.length;
    let index = null;

    for (let i = 0; i < size; i++) {
        // console.log("typeofInfo is", typeof (info));
        // console.log("length Info is", info.length);
        // console.log("data type exist is", typeof (userList[i].contactInfo.mobile))
        // console.log(`info ${info} is compared with ${userList[i].contactInfo.mobile}`)
        if ((info).trim() == (userList[i].contactInfo.mobile)) {
            // console.log("matched")
            index = i;
            return index;
        }
        // else {
        //     console.log("not matched")
        // }
    }

    return index;


}

function DeleteUserForm({ index, userList, setUserList }) {

    const navigate = useNavigate();
    let filteredList = userList.filter((user, i) => i !== index);
    const [currentUser, setCurrentUser] = useState(userList[index]);

    function handleSubmit(e) {
        (e).preventDefault();
        setUserList([...filteredList]);
        navigate("/success");
        // console.log("updated list after delete is", userList);
    }

    return (<>
        <p> found index {index}</p>

        <form onSubmit={handleSubmit} className="row g-3 form-wrapper p-3 w-75 mx-auto" >
            <h3 className="text-center">Delete User Details Preview</h3>

            <h6 className="mb-0 text-primary">Login Information</h6>
            <div className="col-md-6">
                <label htmlFor="user_id" className="form-label">User ID</label>
                <input type="text" className="form-control" id="user_id" name="u_id" value={currentUser.userInfo.userId} onChange={(e) => {
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
                <input type="password" className="form-control" id="password" name="pw" value={currentUser.userInfo.password} onChange={(e) => {
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
            <h6 className="mb-0 text-primary">Contact Information</h6>
            <div className="col-md-6">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="mobile" name="mob" value={currentUser.contactInfo.mobile} onChange={(e) => {
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
                <input type="email" className="form-control" id="email" name="email" value={currentUser.contactInfo.email} onChange={(e) => {
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
                <input type="text" className="form-control" id="line1" placeholder="line1" name="l1" value={currentUser.address.line1} onChange={(e) => {
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
                <input type="text" className="form-control" id="line2" placeholder="line2" name="l2" value={currentUser.address.line2} onChange={(e) => {
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
                <input type="text" className="form-control" id="country" defaultValue="India" name="country" value={currentUser.address.country} onChange={(e) => {
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
                <input type="text" className="form-control" id="pin" name="pin" value={currentUser.address.pin} onChange={(e) => {
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
                <button type="submit" className="btn btn-danger">Delete User </button>
            </div>
        </form >
    </>)
}


export { DeleteUser }