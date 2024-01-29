/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";


function Form() {
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    address: "",
    pincode: "",
    tenthSchoolName: "",
    tenthPercentage: "",
    twelfthSchoolName: "",
    twelfthPercentage: "",
    twelfthResult: "pass", // set default value for twelfthResult
    gender: "", // add gender to formData
    isPostgraduate: "no",
    ugCollege: "", // Added ugCollege state
    ugBranch: "",
    ugPercentage: "", // Added ugPercentage state
  });

  const renderUGFields = () => {
    if (selectedOption === 'Bachelors Degree' || selectedOption === 'Medical' || selectedOption === 'Engineering') {
      return (
        <div>
          <div >


            <div>
              <label
                htmlFor="12th-percentage"
                className="block text-sm font-semibold leading-6  text-black"
              >
                12th Percentage
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="twelfthPercentage"
                  id="12th-percentage"
                  value={formData.twelfthPercentage}
                  onChange={handleInputChange}
                  className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              {formErrors.twelfthPercentage && (
                <p className="text-red-500 text-sm">
                  {formErrors.twelfthPercentage}
                </p>
              )}
            </div>
          </div></div>

      );
    } else if (selectedOption === 'Masters Degree') {
      return (
        <div className="gap-2">
          <label htmlFor="ugCollege" className="mt-5 block text-sm font-semibold leading-6 text-black">
            Undergraduate College:
          </label>
          <input
            type="text"
            name="ugCollege"
            id="ugCollege"
            value={formData.ugCollege}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />

          <label htmlFor="ugBranch" className="mt-5 block text-sm font-semibold leading-6 text-black">
            Undergraduate Stream:
          </label>
          <input
            type="text"
            name="ugBranch"
            id="ugBranch"
            value={formData.ugBranch}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />

          <label htmlFor="ugPercentage" className="mt-5 block text-sm font-semibold leading-6 text-black">
            Undergraduate Percentage:
          </label>
          <input
            type="number"
            name="ugPercentage"
            id="ugPercentage"
            value={formData.ugPercentage}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>
      );
    } else {
      return (

        <div>

          <div >
            <label
              htmlFor="10th-result"
              className="block text-sm font-semibold leading-6  text-black"
            >
              10th Result (Pass/Fail)
            </label>
            <div className="mt-2.5">
              <select
                id="10th-result"
                name="tenthResult"
                value={formData.tenthResult}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 bg-transparent bg-none px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm"
              >
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </select>
              {formErrors.tenthResult && (
                <p className="text-red-500 text-sm">
                  {formErrors.tenthResult}
                </p>
              )}
            </div>
            <label
              htmlFor="10th-percentage"
              className="block text-sm font-semibold leading-6  text-black"
            >
              10th Percentage
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="tenthPercentage"
                id="10th-percentage"
                value={formData.tenthPercentage}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            {
              formErrors.tenthPercentage && (
                <p className="text-red-500 text-sm">
                  {formErrors.tenthPercentage}
                </p>
              )
            }
          </div>

          <div >

            <div>
              <label
                htmlFor="12th-percentage"
                className="block text-sm font-semibold leading-6  text-black"
              >
                12th Percentage
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="twelfthPercentage"
                  id="12th-percentage"
                  value={formData.twelfthPercentage}
                  onChange={handleInputChange}
                  className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              {formErrors.twelfthPercentage && (
                <p className="text-red-500 text-sm">
                  {formErrors.twelfthPercentage}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Enforce numeric input for specific fields
    if (["phoneNumber", "tenthPercentage", "twelfthPercentage"].includes(name)) {
      // Allow only numeric values
      const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Enforce length limit for specific fields
    if (["tenthPercentage", "twelfthPercentage"].includes(name)) {
      // Limit the length to 2 characters
      const limitedValue = value.slice(0, 2);
      setFormData((prevData) => ({
        ...prevData,
        [name]: limitedValue,
      }));
    }
  };


  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validate = () => {
    const errors = {};
    const regex = /^[A-Za-z\s]+$/;

    if (!formData.name) {
      errors.name = "Name is required!";
    } else if (!regex.test(formData.name)) {
      errors.name = "Name should only contain characters and space!";
    }


    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required!";
    }


    if (!formData.twelfthSchoolName) {
      errors.twelfthSchoolName = "School Name is required!";
    }

    if (!formData.gender) {
      errors.gender = "Gender is required!";
    }

    // Validation for email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !regexEmail.test(formData.email)) {
      errors.email = "Invalid email address!";
    }



    // Validation for percentage (assuming it should be a number between 0 and 100)
    const regexPercentage = /^\d{2}$/;
    if (
      formData.tenthPercentage &&
      !regexPercentage.test(formData.tenthPercentage)
    ) {
      errors.tenthPercentage = "Invalid percentage!";
    }

    if (
      formData.twelfthPercentage &&
      !regexPercentage.test(formData.twelfthPercentage)
    ) {
      errors.twelfthPercentage = "Invalid percentage!";
    }

    if (
      formData.twelfthResult !== "pass" &&
      formData.twelfthResult !== "fail"
    ) {
      errors.twelfthResult = "Invalid value for 12th Result!";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate());

    if (!validateForm()) {
      console.error("Form has validation errors");
      return;
    }

    try {
      const response = await fetch("https://myfutureway-backend.onrender.com/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Form submitted successfully");
        setSuccessMessage("Mail sent successfully");
        setFailureMessage(""); // Clear failure message if any
        // Clear form data
        setFormData({
          name: "",

          phoneNumber: "",
          email: "",
          dateOfBirth: "",
          address: "",

          tenthPercentage: "",
          twelfthSchoolName: "",
          twelfthPercentage: "",
          twelfthResult: "pass",
          gender: "",
        });
      } else {
        // Handle errors, e.g., show an error message
        console.error("Failed to submit form");
        setSuccessMessage(""); // Clear success message if any
        setFailureMessage("Failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSuccessMessage(""); // Clear success message if any
      setFailureMessage("Error sending");

    }
  };


  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <p className=" text-center text-[#20B486] font-bold">Your future journey begins with a simple message.</p>
      <form
        onSubmit={handleSubmit}
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20 border border-1 border-emerald-500 border-[#20B48] p-8 rounded-2xl"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </div>




          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Contact Number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phoneNumber"
                id="phone-number"
                autoComplete="tel"
                maxLength="10"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.phoneNumber && (
              <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Date of Birth
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                name="dateOfBirth"
                id="date-of-birth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                max={
                  new Date(
                    new Date().setFullYear(new Date().getFullYear() - 10)
                  )
                    .toISOString()
                    .split("T")[0]
                } // Set the maximum date to 10 years ago
                min="1920-01-01" // Set a reasonable minimum date, you can adjust it as needed
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.dateOfBirth && (
              <p className="text-red-500 text-sm">{formErrors.dateOfBirth}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6  text-black">
              Gender
            </label>
            <div className="mt-2.5">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                <label htmlFor="male" className="text-sm  text-black">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                <label htmlFor="female" className="text-sm  text-black">
                  Female
                </label>
              </div>
            </div>
            {formErrors.gender && (
              <p className="text-red-500 text-sm">{formErrors.gender}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Address
            </label>
            <div className="mt-2.5">
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={4}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.address && (
              <p className="text-red-500 text-sm">{formErrors.address}</p>
            )}
          </div>

          {formErrors.twelfthResult && (
            <p className="text-red-500 text-sm">{formErrors.twelfthResult}</p>
          )}
        </div>
        <div>
          <label htmlFor="isPostgraduate" className="mt-5 block text-sm font-semibold leading-6  text-black">Looking For</label>
          <ul className="items-center w-full text-sm font-medium text-black-900 bg-white border border-black-200 rounded-lg sm:flex">
            <li className="w-full border-b border-black-200 sm:border-b-0 sm:border-r dark:border-black-600">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="Diploma"
                  name="list-radio"
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black-700 dark:focus:ring-offset-black-700 focus:ring-2 dark:bg-black-600 dark:border-black-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  Diploma
                  {/* need 10th p / f  if pass +2 Stream and percenatge else 10th per  */}
                </label>
              </div>
            </li>

            <li className="w-full border-b border-black-200 sm:border-b-0 sm:border-r dark:border-black-600">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=" Bachelors Degree"
                  name="list-radio"
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black-700 dark:focus:ring-offset-black-700 focus:ring-2 dark:bg-black-600 dark:border-black-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  Bachelors Degree
                  {/* 10 and 12 stream and , percentage for both 10 and 12 */}
                </label>
              </div>
            </li>
            <li className="w-full border-b border-black-200 sm:border-b-0 sm:border-r dark:border-black-600">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="Masters Degree"
                  name="list-radio"
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black-700 dark:focus:ring-offset-black-700 focus:ring-2 dark:bg-black-600 dark:border-black-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  Masters Degree
                  {/*  ug percentage and stream */}

                </label>
              </div>
            </li>
            <li className="w-full border-b border-black-200 sm:border-b-0 sm:border-r dark:border-black-600">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="Medical"
                  name="list-radio"
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black-700 dark:focus:ring-offset-black-700 focus:ring-2 dark:bg-black-600 dark:border-black-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  Medical
                  {/* 10 and 12 stream and , percentage for both 10 and 12 */}

                </label>
              </div>
            </li>
            <li className="w-full border-b border-black-200 sm:border-b-0 sm:border-r dark:border-black-600">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=" Engineering"
                  name="list-radio"
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-black-100 border-black-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black-700 dark:focus:ring-offset-black-700 focus:ring-2 dark:bg-black-600 dark:border-black-500"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-black-900 dark:text-black-300"
                >
                  Engineering
                  {/* 10 and 12 stream and , percentage for both 10 and 12 */}

                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* <label htmlFor="isPostgraduate" className="mt-5 block text-sm font-semibold leading-6  text-black">Are you a postgraduate?</label>
        <select
          id="isPostgraduate"
          name="isPostgraduate"
          value={formData.isPostgraduate}
          onChange={handleInputChange}
          className=" block w-full rounded-md border-0 px-3.5 py-2 text-black-900 ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {renderUGFields()} */}

        {renderUGFields()}

        <div className="flex flex-col items-center mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#20B486] border px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "

          >
            Send
          </button>
          {successMessage && (
            <div className="text-green-600 font-semibold mt-2">
              {successMessage}
            </div>
          )}

          {failureMessage && (
            <div className="text-red-600 font-semibold mt-2">
              {failureMessage}
            </div>
          )}
        </div>

      </form>
    </div>
  );
}

export default Form;
