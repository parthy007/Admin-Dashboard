import "./User.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link, useLocation } from "react-router-dom";
import storage from "../../firebase";
import { useContext, useState } from "react";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

const User = () => {

    const location = useLocation();
    const user = location.state.user;

    
    const [userUpdate, setUserUpdate] = useState(user);
    const [userImg, setUserImg] = useState(null);
    console.log(userUpdate);
    
    const {dispatch} = useContext(UserContext);
    
    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        setUserUpdate({...userUpdate,[e.target.name]:value});
    }

    const upload = (items) =>{
        items.forEach((item)=>{
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
            uploadTask.on("state_changed", (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + " % done."); 
            },
            (err) => {console.log(err)},()=>{
                uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                    setUserUpdate((prev)=>{
                        return {...prev, [item.label]: url};
                    });
                })
            })
        })
    }

    const handleUpdate = async(e) =>{
        e.preventDefault();
        let updatedFields = { ...userUpdate };

   
        if (userImg) {
            await upload([
                { file: userImg, label: "profilePic" }
            ]);
            updatedFields.profilePic = userUpdate.profilePic;
        }

        updateUser(updatedFields, dispatch);
        console.log("clicked");
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateUser(userUpdate, dispatch);
        console.log("clicked")
    }

  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userCreateBtn">Create</button>
            </Link>
        </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="" className="userImg" />
                    <div className="userShowTopInfo">
                        <span className="userShowName">{user.username}</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Detail</span>
                    <div className="userShowBottomInfo">
                        <PermIdentityIcon className="userShowBottomIcon" />
                        <span className="userInfoTitle">Id: {user._id}</span>
                    </div>
                    <div className="userShowBottomInfo">
                        <SupervisorAccountIcon className="userShowBottomIcon" />
                        <span className="userInfoTitle">Authority: {user.isAdmin === true ? "Admin":"Not Admin"}</span>
                    </div>

                    <span className="userShowTitle">Contact Detail</span>
                    
                    <div className="userShowBottomInfo">
                        <PhoneAndroidIcon className="userShowBottomIcon" />
                        <span className="userInfoTitle">+250 976748</span>
                    </div>
                    <div className="userShowBottomInfo">
                        <MailOutlineIcon className="userShowBottomIcon" />
                        <span className="userInfoTitle">{user.email}</span>
                    </div>
                    <div className="userShowBottomInfo">
                        <LocationSearchingIcon className="userShowBottomIcon" />
                        <span className="userInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>  
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>UserName</label>
                            <input type="text" placeholder="username" name="username" className="userUpdateInput" onChange={handleChange}/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="email" placeholder="email" name="email" className="userUpdateInput" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} 
                            alt="" 
                            className="userUpdateImg" />
                            <label htmlFor="file">
                                <PublishIcon/>
                            </label>
                            <input type="file" id="file" name="profilePic" onChange={(e)=>setUserImg(e.target.files[0])} style={{display:"none"}}/>
                        </div>
                        {userImg ? (
                            <button className="userUpdateButton" onClick={handleUpdate}>Update</button>
                            ):(
                            <button className="userUpdateButton" onClick={handleSubmit}>Upload</button>
                        )}
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default User
