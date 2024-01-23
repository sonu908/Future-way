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
    // Add other form fields as needed...
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

    if (!formData.motherName) {
      errors.motherName = "Mother's Name is required!";
    } else if (!regex.test(formData.motherName)) {
      errors.motherName =
        "Mother's Name should only contain characters and space!";
    }

    if (!formData.fatherName) {
      errors.fatherName = "Father's Name is required!";
    } else if (!regex.test(formData.fatherName)) {
      errors.fatherName =
        "Father's Name should only contain characters and space!";
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required!";
    }

    if (!formData.tenthSchoolName) {
      errors.tenthSchoolName = "School Name is required!";
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

    // Validation for pincode
    const regexPincode = /^\d{6}$/;
    if (formData.pincode && !regexPincode.test(formData.pincode)) {
      errors.pincode = "Invalid pincode!";
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
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="fatherName"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Father's Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fatherName"
                id="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900m ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.fatherName && (
              <p className="text-red-500 text-sm">{formErrors.fatherName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="motherName"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Mother's Name
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                name="motherName"
                id="mother-name"
                value={formData.motherName}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.motherName && (
              <p className="text-red-500 text-sm">{formErrors.motherName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Phone Number
            </label>
            <div className="relative mt-2.5">
              <input
                type="number"
                name="phoneNumber"
                id="phone-number"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.address && (
              <p className="text-red-500 text-sm">{formErrors.address}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="pincode"
              className="block text-sm font-semibold leading-6  text-black"
            >
              Pin Code
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="pincode"
                id="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.pincode && (
              <p className="text-red-500 text-sm">{formErrors.pincode}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="tenthSchoolName"
              className="block text-sm font-semibold leading-6  text-black"
            >
              10th School Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="tenthSchoolName"
                id="10th-school-name"
                value={formData.tenthSchoolName}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.tenthSchoolName && (
              <p className="text-red-500 text-sm">
                {formErrors.tenthSchoolName}
              </p>
            )}
          </div>
          <div>
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
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.tenthPercentage && (
              <p className="text-red-500 text-sm">
                {formErrors.tenthPercentage}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="12th-school-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              12th School Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="twelfthSchoolName"
                id="12th-school-name"
                value={formData.twelfthSchoolName}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.twelfthSchoolName && (
              <p className="text-red-500 text-sm">
                {formErrors.twelfthSchoolName}
              </p>
            )}
          </div>
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
                className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {formErrors.twelfthPercentage && (
              <p className="text-red-500 text-sm">
                {formErrors.twelfthPercentage}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="12th-result"
              className="block text-sm font-semibold leading-6  text-black"
            >
              12th Result (Pass/Fail)
            </label>
            <div className="mt-2.5">
              <select
                id="12th-result"
                name="twelfthResult"
                value={formData.twelfthResult}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 bg-transparent bg-none px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </select>
              {formErrors.twelfthResult && (
                <p className="text-red-500 text-sm">
                  {formErrors.twelfthResult}
                </p>
              )}
            </div>
          </div>
          {formErrors.twelfthResult && (
            <p className="text-red-500 text-sm">{formErrors.twelfthResult}</p>
          )}
        </div>

        <div className="flex flex-col items-center mt-10">
          <button
            type="submit"
            className=" block w-full rounded-md  bg-[#20B486] border  px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
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
