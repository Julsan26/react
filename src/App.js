import React from "react";
import Logo from "./yeti.jpg";
import "./App.css";

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <img src={Logo} className="App-logo" alt="logo" />

        <h1>SignUp</h1>
            <p>
              First name:
              <input type="text" />
            </p>
            <p>
              Last name:
              <input type="text" />
           </p>
            <p>
              E-mail:
              <input type="text" />
            </p>
            <p>
              DOB:
              <input type="text" />
            </p>
         
            <p>
              Phone Number
              <input id="phoneNumber" type="tel"></input>
            </p>
         

        <div className="box-field">
          <p>
            GC
            <input type="file" className="gc" alt="green" />
          </p>
          <p>
            State ID
            <input type="file" />
          </p>
          <p>
            SSN
            <input type="file" />
          </p>
          <input
            type="button"
            onclick="myFunction()"
            value="Submit form"
          ></input>
        </div>
      </form>
    );
  }
}

export default MyForm;
