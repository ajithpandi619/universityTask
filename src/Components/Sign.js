// import React from "react";
// import "./sign.css";
// import { FcGoogle } from "react-icons/fc";
// import contactimg from "../assets/Rectangle 4597.png";
// import { AiFillApple } from "react-icons/ai";
// import Footer from "./Footer";

// function SignIn() {
//   return (
//     <div className="mt-3">
//       <div className="container mb-5">
//         <div className="row overbox">
//           <div className="col-lg-6 col-md-12 col-12 logincontent ">
//             <div className="logincontent">
//               <form>
//                 <h1 className="loghed">Login Form</h1>
//                 <h3>Welcome back</h3>
//                 <p>Enter your Credentials details to access your account </p>
//                 <label htmlFor="email">
//                   Email address <span className=" asterisk">*</span>
//                 </label>
//                 <input type="email" name="email" className="emailbox textbox" />
//                 <label htmlFor="password">
//                   password <span className=" asterisk">*</span>
//                 </label>
//                 <input type="password" name="password" className="textbox" />
//                 <a href="#" className="text-end mt-2">
//                   forget password!
//                 </a>
//                 <label>
//                   {" "}
//                   <input
//                     style={{ width: "10px" }}
//                     type="checkbox"
//                     className="rem"
//                   />
//                   Remainder me{" "}
//                 </label>

//                 {/* <input type="submit" value="Login" className="loginbtn" /> */}
//                 <button
//                   style={{
//                     border: "none ",
//                     padding: "5px",
//                     fontWeight: "bold",
//                   }}
//                   className="bg-success text-light"
//                 >
//                   Login
//                 </button>
//                 {/* line inside text or using below code */}
//                 <div class="line-container mt-3">
//                   <div class="line"></div>
//                   <div class="text-between-lines">Or</div>
//                 </div>
//                 <div className="otherIn mt-3">
//                   <div className="google">
//                     <FcGoogle /> sign in with google
//                   </div>
//                   <div className="apple mt-3">
//                     <AiFillApple /> sing in with apple
//                   </div>
//                 </div>
//                 <h5 className="notacc mt-3">
//                   Don't have account an? <a href="#">sign up</a>
//                 </h5>
//               </form>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12 col-12 imgsec">
//             <img src={contactimg} className="img-fluid img_signin" />
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default SignIn;
import React from "react";
import "./sign.css";
import { FcGoogle } from "react-icons/fc";
import contactimg from "../assets/Rectangle 4597.png";
import { AiFillApple } from "react-icons/ai";
import Footer from "./Footer";

function SignIn() {
  return (
    <div>
      <div className="container mb-5 mt-5">
        <div className="row overbox">
          <div className="col-lg-6 col-md-12 col-12 logincontent ">
            <div className="logincontent">
              <form>
                <h1 className="loghed">Login Form</h1>
                <h3>Welcome back</h3>
                <p>Enter your Credentials details to access your account </p>
                <label htmlFor="email">
                  Email address <span className=" asterisk">*</span>
                </label>
                <input type="email" name="email" className="emailbox textbox" />
                <label htmlFor="password">
                  password <span className=" asterisk">*</span>
                </label>
                <input type="password" name="password" className="textbox" />
                <a href="#" className="text-end mt-2">
                  forget password!
                </a>

                <button className="loginbtn ">Login</button>
                {/* line inside text or using below code */}
                <div class="line-container mt-3">
                  <div class="line"></div>
                  <div class="text-between-lines">Or</div>
                </div>
                <div className="othersign">
                  <div className="google">
                    <FcGoogle /> sign in with google
                  </div>
                  <div className="apple">
                    <AiFillApple /> sing in with apple
                  </div>
                </div>
                <h5 className="notacc">
                  Don't have account an? <a href="#">sign up</a>
                </h5>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 imgsec">
            <img src={contactimg} className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SignIn;
