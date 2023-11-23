import "@/components/Button.scss";
import "@/components/_index-one.scss";
import "@/components/style.scss";
import "@/components/_common.scss";

interface ButtonProps {
    text: string;
    onClick: () => void;
  }

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
      <button onClick={onClick} className="main-btn">
        {text}
      </button>
    );
  };
  
  export default Button;
