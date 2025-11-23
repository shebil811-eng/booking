
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navication';
import Contact from './Contact';
import About from './About';
import Footer from './foooter';
import Service from './servics';
// import Signin from './signin';
import Home from './Home';
import Signup from './signup';
import DoctersEmgcare from './emergencycaredoctors';
import Formcreate from './registrationform';
import Adminhome from './adminhome';
import Pagedisplay from './registerationlist_display';
import Create from './create';
import Users from './usersCreate';
import Signin from './signin';
import UsersLogin from './userslogin';
import Token from './bookingtokens';
import Doctordisplay from './users_display_doctor';
import Doctorrole from './doctor_role_userlist';
import Rolesdoctor from './doctorlogin_list';
import Update from './doctor_update';
import Book from './booking';
import Service2 from './servics_copy';
import DoctersDiogcare from './diognosticcaredoctors';
import Doctershomegcare from './homecaredoctors';


//  import Book from './booking';



function App() {
  return (
 <div className='app'>
  <Navbar/>
  
  <Routes>
  <Route path='/nav' element={  <Navbar/>
}/>

  {/* <Route path='Signin' element={<Signin/>}/> */}
  {/* <Route exact path='Signup' element={<Signup/>}/> */}
  <Route path='/' element={<Home/>}/>
  <Route path='service' element={<Service/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='doctor' element={<DoctersEmgcare/>}/>
  {/* <Route exact path='sign' element={<Signin/>}/> */}
  <Route exact path='signup' element={<Signup/>}/>
  <Route path='register' element={<Formcreate/>}/>
    
  <Route path='admin' element={<Adminhome/>}/>
  <Route path='regiserlist' element={<Pagedisplay/>}/>
  <Route path='create' element={<Create/>}/>
  <Route path='users' element={<Users/>}/>
  <Route path='login' element={<UsersLogin/>}/>
  <Route exact path='user' element={<Token/>}/>
  <Route path='doctorslist' element={<Doctordisplay/>}/>
  <Route exact path='doc_user/:name' element={<Doctorrole/>}/>
  <Route exact path='doc_/:name' element={<Rolesdoctor/>}/>
  <Route exact path='doc_update/:id' element={<Update/>}/>
  <Route path='/book' element={<Book/>}/>
  <Route path='/sign' element={<Signin/>}/>
  <Route path='service2/:name' element={<Service2/>}/>
  <Route path='doctor1' element={<DoctersDiogcare/>}/>
  <Route path='doctor2' element={<Doctershomegcare/>}/>








 
  </Routes>
  
  <Footer/> 

 </div>
  );
}

export default App;
