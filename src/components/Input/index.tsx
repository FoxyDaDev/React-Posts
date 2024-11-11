import React, { useState, ChangeEvent } from 'react';

interface InputProps {
  name: string;
  type: string;
  inputText?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  placeholder?: string;
  id?: string;
}

function Input({
  name = '',
  type = '',
  inputText = '',
  minLength = 0,
  maxLength = 100,
  placeholder = '',
  id,
  required = false,
}: InputProps) {

  const [value, setValue] = useState<string>(inputText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        placeholder={placeholder}
        className={'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'}
        id={id}
      />
    </div>
  );
}

export default Input;