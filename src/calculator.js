import React, { useState } from "react";

export default function Calculator() {
  const [values, setValues] = useState({
    firstNum: "",
    secondNum: "",
    operation: "add",
  });
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    switch (values.operation) {
      case "add":
        setResult(parseFloat(values.firstNum) + parseFloat(values.secondNum));
        break;
      case "sub":
        setResult(parseFloat(values.firstNum) - parseFloat(values.secondNum));
        break;
      case "mul":
        setResult(parseFloat(values.firstNum) * parseFloat(values.secondNum));
        break;
      case "div":
        setResult(parseFloat(values.firstNum) / parseFloat(values.secondNum));
        break;

      default:
        setResult("Invalid values");
        break;
    }
  };

  return (
    <div className="flex justify-center items-center m-auto flex-col p-20">
      <h1 className="font-bold text-blue-600 text-4xl mb-12">
        Simple Calculator
      </h1>
      <form
        action=""
        className="p-8 w-80 border border-gray-300 rounded"
        onSubmit={submitHandler}
      >
        <div className="mb-4 gap-3 flex flex-col">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="firstNum"
            >
              First Number
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 focus:shadow-outline"
              type="text"
              name="firstNum"
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="secondNum"
            >
              Second Number
            </label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600 focus:shadow-outline"
              type="text"
              name="secondNum"
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block tracking-wide text-gray-700 text-sm font-semibold mb-1"
            htmlFor="selector"
          >
            Operation
          </label>
          <div className="relative">
            <select
              className="block w-fit border border-gray-200 text-gray-700 py-3 px-2 pr-8 rounded text-sm focus:border-blue-600 leading-tight focus:outline-none focus:bg-white cursor-pointer"
              name="operation"
              onChange={changeHandler}
            >
              <option value="add">Addition</option>
              <option value="sub">Substraction</option>
              <option value="mul">Multiplication</option>
              <option value="div">Division</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer"
            type="submit"
          >
            Calculate
          </button>
        </div>
      </form>
      <div className="bg-slate-800 h-40 w-80 rounded text-white p-5 m-6 text-sm font-semibold">
        <span className="border-b-2 w-full">Result :</span>
        <span className="text-xl flex pt-6">{result}</span>
      </div>
    </div>
  );
}
