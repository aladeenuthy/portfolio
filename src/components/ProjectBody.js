
import { TfiAngleUp } from 'react-icons/tfi';
import Project from './Project';
function ProjectBody() {
  return (
    <div className='projects app-body'>
        <h1 className="head-title mb-5">
            Projects
        </h1>
        <Project 
          key={"Reacher"}
          projectName={"Reacher"} 
          projectDescription= {<>
          Reacher is a Video, Audio Calling & Chatting App. Staying connected with your loved ones is easy with Reacher Messanger. Reacher is available on <a href='https://play.google.com/store/apps/details?id=com.reacher.messenger'>PlayStore</a> and on <a href='https://apps.apple.com/ng/app/reacher-messenger/id6443960571'>AppStore</a>
          </>}
          imageLength = {8}
          extension ={"png"}
          folderName={"reacher"}
          />
       <Project 
          key={"RouteLift"}
          projectName={"RouteLift"} 
          projectDescription= {<>
          RouteLift is your trusted partner for last-mile delivery solutions. We are a data-driven, technology-based logistics solution aimed at helping every business lift the burden of route management in order to serve customers more efficiently and maximize profits. Routelift is available on <a href='https://play.google.com/store/apps/details?id=com.routelift'>PlayStore</a> and on <a href='https://apps.apple.com/ng/app/routelift/id6443918515'>AppStore</a>
          </>}

          imageLength = {6}
          extension ={"png"}
          folderName={"routelift"}
          />
           <Project 
          key={"Reachme"}
          projectName={"Reachme"} 
          projectDescription= {<>
          Reachme Social is a multi dimensional social media application, designed to securely connect with friends and family, having full control of your data the whole time. Video and Audio Calls, Livestreaming ,Post Reaches, Post Streaks (Short Videos), Post Statuses. Reachme is available on <a href='https://play.google.com/store/apps/details?id=com.myreach.me'>PlayStore</a> and on  <a href='https://apps.apple.com/ng/app/reachme-social/id1666208776'>AppStore</a>
          </>}
          imageLength = {7}
          extension ={"png"}
          folderName={"reachme"}
          />
          <Project 
          key={"RouteLift Manager"}
          projectName={"RouteLift Manager"} 
          projectDescription= {<>
            RouteLift Manager is the manager app for registered logistics companies on Routelift to manage their deliveries between customers and drivers. Routelift manager is available on <a href='https://play.google.com/store/apps/details?id=com.routelift.manager'>PlayStore</a> and on <a href='https://apps.apple.com/ng/app/routelift-manager/id1661324361'>App Store</a>
            </>}
          imageLength = {7}
          extension ={"png"}
          folderName={"routelift-manger"}
          />
           <Project 
          key={"CommandLink"}
          projectName={"CommandLink"} 
          projectDescription= {<>
           A Realtime chat application with End-to-End encryption and Steganography for army personnel built with flutter and firebase <a href='https://github.com/aladeenuthy/CommandLink'>here</a>
            </>} 
          imageLength = {7}
          extension ={"png"}
          folderName={"commandlink"}
          />
          <Project 
          key={"chops"}
          projectName={"Chops"} 
          projectDescription= {<>
            A food delivery application built with Flutter, Firebase and Paystack Find it on github <a href='https://github.com/aladeenuthy/chops'>here</a>
            </>}
          imageLength = {5}
          extension ={"png"}
          folderName={"chops"}
          />
          <Project 
          key={"Pokedex"}
          projectName={"Pokedex"} 
          projectDescription= {<>
          A responsive pokemon app that let's you explore a large libarary of pokemons, view their strenghts and save your favorite pokemons!. Find it on github <a href='https://github.com/aladeenuthy/pokedex'>here</a>
          </>}
          imageLength = {3}
          extension ={"png"}
          folderName={"pokedex"}
          />
          <Project 
          key={"findR"}
          projectName={"findR"} 
          projectDescription= {<>
            A Flutter app that let's you find restaurants near you, see ratings and other people's reviews using Google Places API. Find it on github <a href='https://github.com/aladeenuthy/findR'>here</a>
             </>}  
          imageLength = {6}
          extension ={"jpeg"}
          folderName={"findR"}
          />
          <Project 
          key={"loud"}
          projectName={"Loud"} 
          projectDescription=  {<>
            A Music application built with Flutter. Find it on github <a href='https://github.com/aladeenuthy/loud'>here</a>
             </>} 
          imageLength = {7}
          extension ={"JPG"}
          folderName={"loud"}
          />
       <div data-aos="fade-down" className='back-to-top d-flex justify-content-center align-items-center' onClick={()=>{
          window.scrollTo(0,0)
        }} >
        <TfiAngleUp  color='black' size={25} />
       </div>
      </div>
  );
}

export default ProjectBody;
