import React,{useState} from "react";

const Contact = () => {

  const [userRegistration, setUserRegistration] = useState({
    firstname : "",
    lastname : "",
    contact : '',
    email : "",
    message : ""
  })
  const [records,setRecords] = useState([])

  const handler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;

      setUserRegistration({...userRegistration, [name] : value});

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newRecord = {...userRegistration, id: new Date().getTime().toString()}
    console.log(newRecord);
    setRecords([...records,newRecord]);
    setUserRegistration({firstname:"",lastname:"",contact:"",email:"",message:""})
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div my-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name=" firstname"
                  id="firstname"
                  className="form-control"
                  // id="exampleFormControlInput1"
                  placeholder="Enter Your First Name"
                  autoComplete="off"
                  value={userRegistration.firstname}
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control"
                  // id="exampleFormControlInput1"
                  placeholder="Enter Your Last Name"
                  autoComplete="off"
                  value={userRegistration.lastname}
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  className="form-control"
                  // id="exampleFormControlInput1"
                  placeholder="Enter Your Phone Number"
                  autoComplete="off"
                  value={userRegistration.contact}
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  // id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  autoComplete="off"
                  value={userRegistration.email}
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message 😃
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  // id="exampleFormControlTextarea1"
                  rows="3"
                  autoComplete="off"
                  value={userRegistration.message}
                  onChange={handler}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center my-5">
        {
          records.map((currElem)=>{
            return(
              <div>
                <p>{currElem.lastname}</p>
                <p>{currElem.contact}</p>
                <p>{currElem.email}</p>
                <p>{currElem.message}</p>
              </div>
            )
          })
        }
      </div>
      </div>
    </>
  );
};
export default Contact;
