import { useState } from "react";


function FullNameForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        setFullName(`${firstName} ${lastName}`);

    };


    return (
        <div className="container">
            <h1>Full Name Display</h1>

            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="firstName">First Name: </label>
                    <input
                    style={{marginBottom: "20px", marginLeft: "5px"}} 
                    type="text" 
                    id="firstName" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required />
                    
                </div>
                <div className="input">
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                    style={{marginBottom: "20px", marginLeft: "5px"}}
                    type="text" 
                    id="lastName" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    required />
                </div>
                <button type="submit">Submit</button>
                
            </form>
            {fullName && (<p >Full Name: {fullName}</p>)}
        </div>
    );
}

export default FullNameForm;