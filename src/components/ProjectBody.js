
import { TfiAngleUp } from 'react-icons/tfi';
import Project from './Project';
function ProjectBody() {
  return (
    <div className='projects app-body'>
        <h1 className="head-title mb-5">
            Projects
        </h1>
       <Project 
          key={"RouteLift"}
          projectName={"RouteLift"} 
          projectDescription= {<>
          RouteLift is your trusted partner for last-mile delivery solutions. We are a data-driven, technology-based logistics solution aimed at helping every business lift the burden of route management in order to serve customers more efficiently and maximize profits. Routelift is available on <a href='https://play.google.com/store/apps/details?id=com.routelift'>PlayStore</a>
          </>}

          imageLength = {6}
          extension ={"png"}
          folderName={"routelift"}
          />
          <Project 
          key={"RouteLift Manager"}
          projectName={"RouteLift Manager"} 
          projectDescription= {<>
            RouteLift Manager is the manager app for registered logistics companies on Routelift to manage their deliveries between customers and drivers. Routelift manager is available on <a href='https://play.google.com/store/apps/details?id=com.routelift.manager'>PlayStore</a>
          </>}
          imageLength = {6}
          extension ={"png"}
          folderName={"routelift-manger"}
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
          key={"connect"}
          projectName={"Connect"} 
          projectDescription= {<>
           A Realtime chat application built with flutter and firebase. Find it on github <a href='https://github.com/aladeenuthy/connect'>here</a>
            </>} 
          imageLength = {6}
          extension ={"png"}
          folderName={"connect"}
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
