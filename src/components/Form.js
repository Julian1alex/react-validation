import React, {useState} from "react"
import Validator from "validator"
import "../styles/base.css"

function Form(props) {
    const [fname, setFname] = useState ('')
    const [fnameError, setFnameError] = useState ('')
    const [email, setEmail] = useState ('')
    const [emailError, setEmailError] = useState ('')
    const [uname, setUname] = useState ('')
    const [unameError, setUnameError] = useState ('')
    const [pass, setPass] = useState ('')
    const [passError, setPassError] = useState ('')
    const [cpass, setCpass] = useState ('')
    const [cpassError, setCpassError] = useState ('')
    const [url, setUrl] = useState ('')
    const [urlError, setUrlError] = useState ('')

    function handleSubmit(e){
        e.preventDefault()
        let err = false

        if (fname === "") {
            err = true 
            setFnameError("Cannot be blank")
        } else {
            setFnameError("")
        }
       
        if (email !== "") {
        if (!Validator.isEmail(email)) {
            err = true 
            setEmailError("Must be a valid email")
         } else {
            setEmailError("")
         }
        } else {
            err = true 
            setEmailError("Cannot be blank")
        } 

        if (url !== "") {
        if (!Validator.isURL(url)) {
            err = true 
            setUrlError("Must be a valid website")
            } else {
            setUrlError("")
            }
        } else {
            err = true 
            setUrlError("Cannot be blank")
        } 
        
        if (uname === "") {
            err = true 
            setUnameError("Cannot be blank")
        } else {
            setUnameError("")
        }
        if (pass === "") {
            err = true 
            setPassError("Cannot be blank")
        } else {
            setPassError("")
        }
        if (cpass === "") {
            err = true 
            setCpassError("Password must match")
        } else {
            setCpassError("")
        }
        // if (url === "") {
        //     err = true 
        //     setUrlError("Cannot be blank")
        // } else {
        //     setUrlError("")
        // }



       
        // if (!validator.(fname)) {
        //     err = true 
        //     setUnameError("")

        // }
        // if (!validator.(uname)) {
        //     err = true 
        //     setFnameError("")

        // }
        // if (!validator.(pass)) {
        //     err = true 
        //     setPassError("")

        // }
        // if (!validator.(cpass)) {
        //     err = true 
        //     setCpassError("")

        // }
        // if (!validator.isURL(url)) {
        //     err = true 
        //     setUrlError("")

        // }
    }
    
    return (
    <div className="background">
        <div className="outerform">
            <form onSubmit={handleSubmit} className="innerform">
                <h1>Profile Form - All fields required</h1>
                <div>
                    <label className="error">{fnameError}Name</label>
                        <input 
                            onChange={e => setFname(e.target.value)} 
                            value={fname} 
                            type="text" 
                            placeholder="Ex. John Doe" 
                            className={fnameError === '' ? '' : 'error'}>
                        </input>
                </div>
                <div>
                    <label className="error">{emailError}Email</label>
                        <input 
                            onChange={e => setEmail(e.target.value)} 
                            value={email} 
                            type="email" 
                            placeholder="Ex. JohnDoe@test.com" 
                            className={emailError === '' ? '' : 'error'}>
                        </input>
                </div>
                <div>
                    <label className="error">{unameError}Username</label>
                        <input 
                            onChange={e => setUname(e.target.value)} 
                            value={uname} 
                            type="text" 
                            placeholder="Ex. JohnDoe123" 
                            className={unameError === '' ? '' : 'error'}>
                        </input>
                </div>
                <div>
                   <label className="error">{passError}Password</label>
                        <input 
                            onChange={e => setPass(e.target.value)}
                            value={pass} 
                            type="password" 
                            placeholder="Ex. *****" 
                            className={passError === '' ? '' : 'error'}>
                        </input>
                </div>
                <div>
                    <label className="error">{cpassError}Confirm Password</label>
                        <input 
                            onChange={e => setCpass(e.target.value)} 
                            value={cpass} 
                            type="password" 
                            placeholder="Ex. ***** - Confirm password cannot be blank" 
                            className={cpassError === '' ? '' : 'error'}>
                        </input>
                </div>
                <div>
                    <label className="error">{urlError}Website</label>
                        <input 
                            onChange={e => setUrl(e.target.value)} 
                            value={url} type="text" 
                            placeholder="Ex. Website - Please enter a valid url" 
                            className={urlError === '' ? '' : 'error'}>
                        </input>
                    <div><button  className="submit">Submit</button></div>
                </div>
            </form>
        </div>
    </div>
    )
    }
    
    export default Form