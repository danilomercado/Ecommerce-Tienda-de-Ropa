import { useRef, useState } from "react";
import useToast from "../../hooks/useToast";
import useFetch from "../../hooks/useFetch";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { showToast } = useToast();
  const [errors, setErrors] = useState({
    name: { error: false, message: "" },
    lastName: { error: false, message: "" },
    email: { error: false, message: "" },
    password: { error: false, message: "" },
    confirmPassword: { error: false, message: "" },
  });

  const { data: users, addData: addUser } = useFetch(
    "http://localhost:8000/users"
  );

  const checkUniqueEmail = (emailToCheck) => {
    return users.some((user) => user.email === emailToCheck);
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);

  const handleName = (e) => {
    let inputName = e.target.value.trim();
    setName(inputName);
  };
  const handleLastName = (e) => {
    let inputLastName = e.target.value.trim();
    setLastName(inputLastName);
  };
  const handlerEmail = (e) => {
    let inputEmail = e.target.value.trim();
    setEmail(inputEmail);
  };

  const handlerPassword = (e) => {
    let inputPassword = e.target.value.trim();
    setPassword(inputPassword);
  };
  const handerConfirmPassword = (e) => {
    let inputConfirmPassword = e.target.value.trim();
    setConfirmPassword(inputConfirmPassword);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (name.length === 0) {
      nameRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: {
          error: true,
          message: "Por favor, ingrese un nombre.",
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: { error: false, message: "" },
      }));
    }

    if (lastName.length === 0) {
      lastNameRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: {
          error: true,
          message: "Por favor, ingrese apellido.",
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: { error: false, message: "" },
      }));
    }

    if (email.length === 0) {
      emailRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: true,
          message: "Por favor, ingrese un email para continuar.",
        },
      }));
      formIsValid = false;
    } else if (checkUniqueEmail(email)) {
      emailRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: true,
          message: "Ya existe un usuario registrado con ese email!",
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: { error: false, message: "" },
      }));
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: {
          error: true,
          message: "Por favor, ingrese una contrasenia.",
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: { error: false, message: "" },
      }));
    }

    if (confirmPassword.length === 0) {
      confirmPasswordRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: {
          error: true,
          message: "Por favor, confirme la contraseña.",
        },
      }));
      formIsValid = false;
    } else if (confirmPassword !== password) {
      confirmPasswordRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: {
          error: true,
          message: "Las contraseñas no coinciden.",
        },
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: { error: false, message: "" },
      }));
    }

    if (formIsValid) {
      showToast("¡Se envió correctamente!", true);

      const newUser = {
        name: name,
        lastname: lastName,
        email: email,
        password: password,
        role: "User",
        imageUrl:
          "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg",
      };

      addUser(newUser);
    }
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitFormHandler}
        >
          <div className="flex mb-4 space-x-2">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                ref={nameRef}
                onChange={handleName}
                value={name}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name.error ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="username"
              />
              {errors.name.error && (
                <p className="text-red-500 text-xs italic">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Lastname
              </label>
              <input
                ref={lastNameRef}
                onChange={handleLastName}
                value={lastName}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.lastName.error ? "border-red-500" : ""
                }`}
                id="lastName"
                type="text"
                placeholder="userLastname"
              />
              {errors.lastName.error && (
                <p className="text-red-500 text-xs italic">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              ref={emailRef}
              onChange={handlerEmail}
              value={email}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email.error ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="user@example.com"
            />
            {errors.email.error && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Create a password
            </label>
            <input
              value={password}
              onChange={handlerPassword}
              ref={passwordRef}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password.error ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="************"
            />
            {errors.password.error && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm password
            </label>
            <input
              value={confirmPassword}
              onChange={handerConfirmPassword}
              ref={confirmPasswordRef}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.confirmPassword.error ? "border-red-500" : ""
              }`}
              id="confirmPassword"
              type="password"
              placeholder="************"
            />
            {errors.confirmPassword.error && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 cursor-pointer"
                required
              />
            </div>
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600 ">
              I accept the{" "}
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-indigo-500"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="flex bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center items-center"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <p className="flex text-sm font-light text-gray-500 dark:text-gray-400 items-center justify-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="flex font-medium text-primary-600 hover:underline dark:text-primary-500 items-center justify-center"
            >
              Login here
            </a>
          </p>
        </form>
        <p className="flex text-center items-center justify-center text-gray-300 text-xs ">
          &copy;2020 Dani Corp. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Register;
