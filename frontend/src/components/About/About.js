function About() {
  return(
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-orange-100 mt-12 py-8 px-4">
      <div className="md:w-4/5 text-center">
        <h2 className="text-3xl font-bold mb-3">Who we are</h2>
        <p className="text-xl mb-1">We are a team of passionate individuals dedicated to improving the lives of patients in India. We believe that everyone deserves access to high-quality health care, regardless of their income or location.</p>
        <p className="text-xl mb-1">That's why we're building a platform that connects patients with technicians and doctors, and provides them with the tools and resources they need to manage their health care effectively.</p>
        <p className="text-xl mb-1">We believe that by working together, we can make a real difference in the lives of patients in India.</p>
        
        <hr className="w-4/5 h-0.5 md:h-1 bg-black border-none mx-auto my-6" />
        
        <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
        <p className="text-xl mb-1">To improve the quality and accessibility of health care in India through technology and innovation.</p>
        
        <hr className="w-4/5 h-0.5 md:h-1 bg-black border-none mx-auto my-4" />
        
        <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
        <p className="text-xl mb-1">A world where everyone with health disability has access to the care they need to live a long and healthy life.</p>
        
        <hr className="w-4/5 h-0.5 md:h-1 bg-black border-none mx-auto my-4" />
        
        <h3 className="text-2xl font-bold mb-2">Our Values</h3>
        <ul className="w-3/4 md:w-full text-start list-disc mx-auto">
          <li className="text-xl mb-1"><span className="font-bold">Patient-centered</span>: We put the needs of our patients first in everything we do.</li>
          <li className="text-xl mb-1"><span className="font-bold">Collaborative</span>: We work together with our partners to achieve our goals.</li>
          <li className="text-xl mb-1"><span className="font-bold">Innovative</span>: We are constantly looking for new and better ways to improve dialysis care.</li>
          <li className="text-xl mb-1"><span className="font-bold">Inclusive</span>: We strive to create a platform that is accessible to everyone.</li>
        </ul>
      </div>
    </div>
    );
}

export default About;