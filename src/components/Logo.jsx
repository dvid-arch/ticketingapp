import logo from '../assets/logo.svg'
const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon (Replace with actual logo image or SVG) */}
      <div
        className=" text-white font-bold flex items-center justify-center rounded-full"
        
      >
        <img src={logo} alt="logo" />
      </div>

      
    </div>
  );
};

export default Logo;
