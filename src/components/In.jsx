import React, { useState } from "react";


export default function In({
    name,
    type,
    autoComplete,
    placeholder,
    label,
    rules,
}) {
    const [isValid, setIsValid] = useState(undefined);
    const [touched, setTouched] = useState(false);
    const passwordPattern = "^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$";

    const changeTouched = () => {
        setTouched(true);
    };

    const handleValidation = (e) => {
        setIsValid(e.target.validity.valid);
    };

    const handleChange = (e) => {
        handleValidation(e);
      
    };

    return (
        <div className="mb-5 w-full">
            {touched && !isValid && (
                <h1 className="text-md text-red-500">
                    <i className="fa-solid fa-circle-exclamation pr-2 text-md text-red-500"></i>
                    {rules}
                </h1>
            )}

            <label
                htmlFor={name}
                className={`block mb-2 text-sm font-medium ${touched && !isValid ? "text-red-500" : "text-gray-900 dark:text-white"}`}
            >
                {label}
            </label>

            <input
                type={type}
                id={name}
                name={name}
                className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4   dark:placeholder-gray-400  ${isValid === undefined
                        ? "border-gray-400 dark:border-gray-400 w-full"
                        : (touched && !isValid
                            ? "border-red-600 border-2"
                            : "border-green-400 dark:border-green-400")
                    } text-black`}
                placeholder={placeholder}
                onBlur={changeTouched}
                onChange={handleChange}
                required
                autoComplete={autoComplete}
                pattern={type === 'password' ? passwordPattern : undefined}
            />

        </div>
    );
}
