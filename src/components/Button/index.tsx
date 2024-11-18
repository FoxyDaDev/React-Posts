import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button className={'w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;