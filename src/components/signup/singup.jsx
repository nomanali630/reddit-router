import "./signup.css";




function Signup() {


    return(
        <div className="body">
        <h1>Signup</h1>

        <input type="text" required placeholder="Name"  />  <br></br>
        <input type="password" required placeholder="password"  />  <br></br>
        <input type="Email" required placeholder="Email"  />  <br></br>
        <input type="text" required placeholder="country" /><br></br>
        <input type="number" required placeholder="Phone" /><br></br>
        <input type="text" required placeholder="Gender" /><br></br>

        <button>SIGNUP</button>

        </div>
    )
    
}

export default Signup;