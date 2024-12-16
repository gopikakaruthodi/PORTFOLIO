import './App.scss'
import Type from './Type'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="w-full h-screen bg-slate-900">
{/*-------------------- navbar ----------------- */}
        <div className="w-full h-16  flex items-center font-serif justify-between text-indigo-200 ">
          <div className="ml-5">
            <h1 className="text-3xl font-bold	"> </h1>
          </div>
          <div className="space-x-14 mr-5">
            <a href="#home"><span className="nav">Home</span></a>
            <a href="#about"><span className="nav">About</span></a>
            <a href="#skills"><span className="nav">Skills</span></a>
            <a href="#projects"><span className="nav">Projects</span></a>
            <a href="#contact"><span className="nav">Contact</span></a>
           
          </div>

        </div>
{/*---------------- Home -------------------------*/}
        <div className="flex w-full h-full bg-slate-900" id='home'>
     
          <div className="w-3/4  flex justify-center items-center text-left  ">
            <div className="text-white ml-10">
            {/* <h1 className="text-3xl  mb-5 text-slate-300">Hi There...👻!!</h1> */}
            <h1 className="sm: text-4xl mb-9  md:text-6xl mb-12 lg:text-8xl mb-16">I'm <span className="bg-clip-text font-thin text-transparent bg-gradient-to-r from-pink-500 to-violet-500">GOPIKA K</span></h1>
            <h1 className="sm:text xl    md:text-2xl   lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r  from-violet-500 to-white "><Type /></h1>
            <p className='w-3/5 mt-10 text-violet-200 text-md '>I'm creative developer based in India,and I'm very passionate and dedicated to my work.</p>
            </div>
          </div>
          <div className="w-2/5 h-full text-white flex justify-start items-center mr-10">
            <div className="profile"></div>
          </div>
        </div>
{/* -------------------About------------------- */}
        <div className="w-full  bg-slate-900 text-white  pt-10" id='about'>
          <div className='grid items-center justify-center'>
          <h1 className="text-6xl font-bold  text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-pink-400 to-violet-600" >ABOUT ME</h1>
            <img src="./down-arrow.png" alt="" className='w-12 border-violet-400 ml-24 animate-bounce border-2 rounded-full p-2 mb-10 ml-32' />
          
          </div>
          <div className="w-full flex justify-center flex-wrap">
            <div className="w-1/4 p-12 shadow-lg shadow-violet-500/40 m-5 text-center rounded-lg basis-96 ">Hi Everyone, I am Gopika k from Malappuram, Kerala.I am a web developer with six months of experience in the <span className=' text-sm text-violet-200'>MERN
            stack (MongoDB, Express.js,React and Node.js)</span>, complemented by strong
            skills in <span  className='text-sm text-violet-200'>HTML, CSS, and JavaScript</span>. 
            </div>
            <div className="w-1/4 p-14 shadow-lg shadow-violet-500/40 m-5 rounded-lg  basis-96 text-center ">I'm BSc Computer Science Graduate from Calicut University.and i'm very passionate and dedicated to work.I enjoy problem-solving and am
            always eager to learn new technologies and best practices.</div>
          </div>

        </div>
        {/* Skills */}
        <div className='w-full bg-slate-900 py-2 flex flex-wrap justify-center items-center pb-16' id='skills'>
          <div className='body'>
            <div className="box">
              <div className="border-line"></div>
              <div className="form">SKILLS</div>
            </div>
          </div>
          <div className='wrapper '>
            <div className='w-28 h-28 border rounded-xl border-violet-400 p-1' >
              <img src="./html-5.png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm font-bold text-center'>HTML</p>
            </div>
            <div className='w-28 h-28  border rounded-xl border-violet-400 p-1'>
              <img src="./css-3.png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm text-center font-bold'>CSS</p>
            </div>
            <div className='w-28 h-28  border rounded-lg border-violet-400 p-1'>
              <img src="./js (1).png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm font-bold text-center'>JS</p>
            </div>
            <div className='w-28 h-28  border rounded-xl  border-violet-400 p-1'>
              <img src="./bootstrap.png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm font-bold text-center'>BOOTSTRAP</p>
            </div>
            <div className='w-28 h-28 border rounded-xl border-violet-400 p-1'>
              <img src="./mongodb.png" alt="" className='w-full h-3/4  p-1' />
              <p className='text-white text-sm font-bold text-center'>MONGODB</p>
            </div>
            <div className='w-28 h-28  border rounded-xl border-violet-400 p-1'>
              <img src="./express.png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm font-bold text-center'>EXPRESS</p>
            </div>
            <div className='w-28 h-28  border rounded-xl border-violet-400 p-1'>
              <img src="./science.png" alt="" className='w-full h-4/5  p-1' />
              <p className='text-white text-sm font-bold text-center'>REACT</p>
            </div>
            <div className='w-28 h-28 border rounded-xl border-violet-400 p-1'>
              <img src="./node-js (2).png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm font-bold text-center'>NODEJS</p>
            </div>
            <div className='w-28 h-28 border rounded-xl border-violet-400 p-1'>
              <img src="./tailwind-css.png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm font-bold text-center'>TAILWIND</p>
            </div>
            <div className='w-28 h-28 border rounded-xl border-violet-400 p-1'>
              <img src="./sass.png" alt="" className='w-full h-3/4 object-cover p-1' />
              <p className='text-white text-sm font-bold text-center'>SASS</p>
            </div>
            <div className='w-28 h-28 border rounded-xl border-violet-400 p-1'>
              <img src="./vitejs.png" alt="" className='w-full h-3/4  p-1' />
              <p className='text-white text-sm font-bold text-center'>VITE</p>
            </div>
            <div className='w-28 h-28 border rounded-xl border-violet-400 p-1'>
              <img src="./postgresql.png" alt="" className='w-full h-3/4  p-1' />
              <p className='text-white text-sm font-bold text-center'>POSTGRESQL</p>
            </div>
           

          </div>

        </div>

{/*----------- PROJECTS----------------- */}

        <div className='w-full bg-slate-900 pb-20 ' id='projects'>
        <div className='grid items-center justify-center'>
          <h1 className="text-6xl font-bold  text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-pink-400 to-violet-600" >WORKS</h1>
            <img src="./down-arrow.png" alt="" className='w-12 border-violet-400 ml-24 animate-bounce border-2 rounded-full p-2' />
          </div>          
          <div className=' flex flex-wrap  justify-center items-center gap-16 mt-16'>
            <div className='card'>
            {/* <h1 className='text-xl font-bold text-white text-center'>OLX CLONE</h1> */}
                <div className="image-box">
                  <img src="./olx.jpg" alt="" />
                </div>
                <div className="content">
                  <h2>OLX-CLONE</h2>
                  <p>A web application built using Express.js that provides secure user authentication features, including registration, login, and session management.Allows new users to create an account with email verification.Implements JWT (JSON Web Tokens) for secure user authentication.</p>
                </div>
            </div>
            <div className='card'>
            {/* <h1 className='text-xl font-bold text-white text-center'>DONOR SYSTEM</h1> */}
                <div className="image-box">
                  <img src="./donor.jpg" alt="" />
                </div>
                <div className="content">
                  <h2>DONOR SYSTEM</h2>
                  <p>BloodLine Connect is a web application designed to streamline the process of finding and connecting with available blood donorsent.
                  Secure sign-in and sign-out process ensuring privacy and data protection for all users.</p>
                </div>
            </div>
            <div className='card'>
              {/* <h1 className='text-xl font-bold text-white text-center'>INSTA CLONE</h1> */}
                <div className="image-box">
                  <img src="./insta-clone.jpg" alt="" />
                </div>
                <div className="content">
                  <h2>INSTA CLONE</h2>
                  <p>This web that mimics the essential features of the original platform. Users can create accounts, log in securely, and verify their email addresses. Once authenticated, they can view and manage their personal profiles, including uploading and editing photos. The web also provides a feed where users can explore posts from other members of the community.</p>
                </div>
            </div>
          </div>
        </div>

{/* ----------CONTACTS------------ */}
        <div className='w-full h-80 bg-slate-900' id='contact'>
          <h1 className='text-white text-bold text-3xl text-center pt-10'>CONTACT INFO</h1>
          <div className="footer">
            <div className="Linklist">
              <div className="Linkcol">
                <div className="Linktitle">
                  <p>PHONE</p>
                </div>
                <div className="LinkItem">
                    <a href="">+917012018761</a>
                </div>
              </div>
              <div className="Linkcol">
                <div className="Linktitle">
                  <p>EMAIL</p>
                </div>
                <div className="LinkItem">
                  <a href="">gopikaksurendran@gmail.com</a>
                </div>
              </div>
  
            </div>

            <div className="SocialIconsContainer">
              <div className="comp">
                <div className="slogan">
                <p className='mt-5'>Copyright All rights reserved</p>
                </div>
              </div>
            <div className="socialContainer">
              <div className="socialIcon">
                <a href="https://github.com/gopikakaruthodi">
                <img src="./github (1).png" alt=""  className='w-10 h-10 object-cover border-slate-900 p-0.5 mx-2 border rounded-full' />
                </a>
              </div>
              <div className="socialIcon">
                <img src="./linkedin.png" alt=""  className='w-10 h-10 object-cover border-slate-900  p-0.5 mx-2 border rounded-full' />
              </div>
              <div className="socialIcon">
                <img src="./instagram (1).png" alt=""  className='w-10 h-10 object-cover border-slate-900  p-0.5 mx-2 border rounded-full' />
              </div>
              <div className="socialIcon">
                <img src="./instagram (1).png" alt=""  className='w-10 h-10 object-cover border-slate-900  p-0.5 mx-2 border rounded-full' />
              </div>
              
            </div>
          </div>
        </div>
        </div>


      </div>
    </>
  )
}

export default App



