import  './NewUser.css';
import { useContext, useState } from 'react';
import storage from "../../firebase";
import { createUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';

const NewUser = () => {

    const[userNew, setUserNew] = useState(null);
    const[userImg, setUserImg] = useState(null);

    const {dispatch} = useContext(UserContext);

    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        setUserNew({...userNew,[e.target.name]: value})
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
                    setUserNew((prev)=>{
                        return {...prev, [item.label]: url};
                    });
                })
            })
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(userImg){
            await upload([
                { file: userImg, label: "profilePic" }
            ]);
        }
        createUser(userNew,dispatch);
    }


    // console.log(userNew);

  return (
    <div className='newUser'>

      <h1 className="newUserTitle">New User</h1>

      <form className="newUserForm">

        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} required/>
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder='Email' name='email' onChange={handleChange} required/>
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder='Password' name='password' onChange={handleChange} required/>
        </div>
        <div className="newUserItem">
            <label>isAdmin</label>
            <select className="newUserSelect" name="isAdmin" id="isAdmin" onChange={handleChange} required>
                <option value="">--select--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>
        <div className="newUserItem">
            <label>Profile Picture</label>
            <input type="file" name='profilePic' onChange={(e)=>setUserImg(e.target.files[0])}/>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}

export default NewUser
