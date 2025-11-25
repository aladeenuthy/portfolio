import { FaCss3, FaPython } from 'react-icons/fa';
import { RiHtml5Line, RiReactjsLine } from 'react-icons/ri';
import { SiDart, SiDjango, SiFlutter } from 'react-icons/si';
function Services() {
  return (
   <div className="services  app-body">
        <div className="service d-flex justify-content-between">
            <div className=''data-aos="fade-up-left">
            <h1 className="mb-5">Mobile app development</h1>
            <ul>
               <li><strong>Mobile Development:</strong> Flutter (cross-platform), Dart</li>
<li><strong>UI/UX:</strong> Research, prototyping, and user-focused design</li>
<li><strong>State Management:</strong> BloC, Provider, GetX, Riverpod</li>
<li><strong>Backend Communication:</strong> REST APIs, WebSockets, gRPC, Firebase</li>
<li><strong>Tools & Practices:</strong> Flutter DevTools, Git, version control</li>
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
        <li><strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS. </li>
        <li><strong>Frontend Development:</strong> Responsive UI development, web design, animations (e.g., AOS).</li>
        <li><strong>Tools & Practices:</strong> Utilizing third-party packages, dependencies, Git version control, DevTools.</li>
        </ul>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap' data-aos="fade-up-right">
                <RiHtml5Line size={70} className='me-3 '/>
                <FaCss3 size={70} className='me-3'/>
                <RiReactjsLine size={70} className='me-3'/>
 
                
                
            </div>
        </div>
         <div className="service d-flex justify-content-between" >
            <div className='' data-aos="fade-up-left">
            <h1 className="mb-5">Backend development</h1>
           <ul>
    <li><strong>Languages & Frameworks:</strong> Python, Django, Django REST Framework (DRF)</li>
    <li><strong>API Development:</strong> RESTful API design, authentication, permissions</li>
    <li><strong>Database Management:</strong> PostgreSQL, MySQL, SQLite, ORM modeling</li>
    <li><strong>Server-Side Logic:</strong> Building scalable backend services, business logic, data processing</li>
    <li><strong>Tools & Practices:</strong> Git version control, virtual environments, environment variables, debugging</li>
    <li><strong>Security:</strong> JWT/Auth, CSRF protection, secure authentication flows</li>
</ul>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap' data-aos="fade-up-right">
                <FaPython size={70} className='me-3'/>
                <SiDjango size={70} className='me-3'/>
            </div>
        </div>
   </div>
  );
  
}

export default Services;
