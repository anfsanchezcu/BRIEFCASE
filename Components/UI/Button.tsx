import React from "react";

interface Props {
  title ?: string,
  icon  ?: React.ReactNode,
  type  ?: boolean,
  link : string
}

const Button = ({title, icon = null, type = true, link}: Props) => {


  const ButtonToRender = () => {
    const bgColor = type  ? "color-primary" : "bg-transparent ";
    const border =  title ?  type ? "border-1 border-sky-400":"border-1 border-gray-400":"" ;
    const rounded = title ?  "rounded-3xl":"rounded-full";
    const padding = title ?  "px-7 py-4":"p-3" ;
    const hover =   title ? "":"hover:bg-sky-400 hover:text-white shadow-md hover:shadow-sky-400/50";
    
    const style = "font-semibold gap-5 flex justify-center items-center ease-in duration-300  hover:scale-105";



    return (
      <a className= {`${rounded}  ${bgColor} ${padding} ${border} ${hover}  ${style}`} href={link}  rel="noopener noreferrer">
        {icon != null && icon }
        {title != null && <p className="font-white">{title}</p>}
      </a>
    );
  }



  return (
    ButtonToRender()
  );
};

export default Button;
