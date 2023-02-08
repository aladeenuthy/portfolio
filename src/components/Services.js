import {SiDart, SiFlutter} from 'react-icons/si'
import {RiHtml5Line, RiReactjsLine} from 'react-icons/ri'
import {FaCss3, FaPython} from 'react-icons/fa'
import {SiDjango} from 'react-icons/si'
function Services() {
  return (
   <div className="services  app-body">
        <div className="service d-flex justify-content-between">
            <div className=''data-aos="fade-up-left">
            <h1 className="mb-5">Mobile app development</h1>
            <ul>
                <li>Flutter cross-platform mobile app development.</li>
                <li>Mobile app UI/UX design and research.</li>
                <li>Handling complex state and state management solutions such as BloC pattern, Provider and GetX.</li>
                <li>REST API, Web Sockets and Firebase among others.</li>
                <li>Proficient in Dart language, dev tools and  version control (Git)</li>
            </ul>
            </div>
            <div className='d-flex justify-content-center align-items-center' data-aos="fade-up-right">
                <SiDart size={70} className='me-5'/>
                <SiFlutter size={70}/>
            </div>
        </div>
        <div className="service d-flex justify-content-between" >
            <div className='' data-aos="fade-up-left">
            <h1 className="mb-5">Web development</h1>
            <ul>
                <li>Proficient in HTML, CSS, Bootstrap, JavaScript, Python and Django.</li>
                <li>React website development.</li>
                <li>Sufficient in utilizing third party packages and dependencies.</li>
                <li>Knowledgable in web design and animations eg AOS</li>
                <li>Proficient in Dart language, dev tools and  version control (Git)</li>
            </ul>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap' data-aos="fade-up-right">
                <RiHtml5Line size={70} className='me-3 '/>
                <FaCss3 size={70} className='me-3'/>
                <RiReactjsLine size={70} className='me-3'/>
                
                <FaPython size={70} className='me-3'/>
                <SiDjango size={70} className='me-3'/>
                
                
            </div>
        </div>
   </div>
  );
  
}

export default Services;
