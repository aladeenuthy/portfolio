import AlPacinoImage from '../images/person.jpg.webp'
function HomeBody() {
  return (
    <div className='main-home  d-md-flex app-body'>
        <div >
        <img src={AlPacinoImage} alt="pacino" data-aos="zoom-in"></img>
        </div>
        <div className='mt-5 ms-5' data-aos="fade-up">
          <h1 className='mb-5'>Hoii!</h1>
          <h1>I'm Abdul...</h1>
          <h1>I'm a Software developer....</h1>
        </div>
      </div>
  );
}

export default HomeBody;
