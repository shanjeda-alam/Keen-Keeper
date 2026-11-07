import { FiPlus } from "react-icons/fi";
const Banner = () => {
    return (
        <div>
           <div className="hero py-10">
  <div className="hero-content text-center">
    <div className="max-w-2xl">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6">
       Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
      </p>
      <button className="btn bg-[#244d3f] text-white border-none hover:bg-[#1b3b30]"><FiPlus />add a friend</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;