import Button from '../Button/Button';
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-orange-100 mt-12">
      <div className="flex flex-col justify-center items-center w-4/5 md: 3/4 h-full">
        <h1 className="text-4xl font-bold md:text-5xl mb-4 text-center">Get your medical record from your <span>House</span></h1>
        <p className="text-xl md:text-2xl mb-4 text-center">All reports on your upcoming treatment on one platform</p>
        <Button className="text-lg md:text-xl bg-[#ffb800] hover:bg-[#ffb800cc] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" label="Get Started" onclick={() => navigate("/register")}></Button>
      </div>
    </div>
    );
}

export default Home;