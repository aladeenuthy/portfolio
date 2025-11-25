
import SelfImage from '../images/self.JPG';
function HomeBody() {
  return (
    <div className='main-home app-body'>
        <div  className=''>
        <img src={SelfImage}  alt="self" data-aos="zoom-in" id='self-image'></img>
        <div className='mt-2 ' >
          <h2 className='mt-2 mb-2 rubik-dirt-regular'>Hoii, I'm Abdul...</h2>
          <p className='summary' data-aos="zoom-in">A results-driven software engineer with expertise in mobile applications using Flutter and web applications with Django. Skilled in building products that drive impactful program outcomes, I thrive in all phases of the software development lifecycle. Currently pursuing a Master's in Cybersecurity, I am passionate about delivering innovative solutions while ensuring security and efficiency. I excel in collaborative team environments, contributing to the development and optimization of software projects.</p>
 
        </div>
        </div>
        
      </div>
  );
}

export default HomeBody;
