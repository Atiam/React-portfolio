import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div style={{
        display: "flex",
        justifyContent : 'space-around',
             }}>
 
        <a href='https://github.com/Atiam'>GitHub</a>
        <a href='https://www.linkedin.com/in/arnaud-duclaire-tiam-t-b1abbbb6/'>LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
