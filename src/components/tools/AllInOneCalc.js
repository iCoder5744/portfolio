'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaCalculator, FaBalanceScale, FaTemperatureHigh, FaRulerCombined, FaMoneyBillWave, FaPercent } from "react-icons/fa";

const CalculatorApp = () => {
  const [activeCalculator, setActiveCalculator] = useState("basic");

  // Basic Calculator State
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForInput, setWaitingForInput] = useState(false);

  // Scientific Calculator State
  const [scientificDisplay, setScientificDisplay] = useState("0");

  // Temperature Converter State
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  // Geometry Calculator State
  const [shape, setShape] = useState("circle");
  const [dimensions, setDimensions] = useState({});
  const [results, setResults] = useState({});

  // Financial Calculator State
  const [loanPrincipal, setLoanPrincipal] = useState("");
  const [loanRate, setLoanRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Unit Converter State
  const [unitType, setUnitType] = useState("length");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const calculators = {
    basic: { name: "Basic", icon: FaCalculator },
    scientific: { name: "Scientific", icon: FaBalanceScale },
    temperature: { name: "Temperature", icon: FaTemperatureHigh },
    geometry: { name: "Geometry", icon: FaRulerCombined },
    financial: { name: "Financial", icon: FaMoneyBillWave },
    unit: { name: "Unit", icon: FaPercent }
  };

  // Basic Calculator Functions
  const inputNumber = (num) => {
    if (waitingForInput) {
      setDisplay(num);
      setWaitingForInput(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = performCalculation(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForInput(true);
    setOperation(nextOperation);
  };

  const performCalculation = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+": return firstValue + secondValue;
      case "-": return firstValue - secondValue;
      case "×": return firstValue * secondValue;
      case "÷": return firstValue / secondValue;
      default: return secondValue;
    }
  };

  const calculate = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = performCalculation(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForInput(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForInput(false);
  };

  // Scientific Calculator Functions
  const scientificFunctions = {
    sin: (x) => Math.sin(x * Math.PI / 180),
    cos: (x) => Math.cos(x * Math.PI / 180),
    tan: (x) => Math.tan(x * Math.PI / 180),
    log: (x) => Math.log10(x),
    ln: (x) => Math.log(x),
    sqrt: (x) => Math.sqrt(x),
    square: (x) => x * x,
    factorial: (x) => {
      if (x < 0) return NaN;
      if (x === 0 || x === 1) return 1;
      let result = 1;
      for (let i = 2; i <= x; i++) result *= i;
      return result;
    }
  };

  const executeFunction = (func) => {
    const value = parseFloat(scientificDisplay);
    const result = scientificFunctions[func](value);
    setScientificDisplay(String(result));
  };

  // Temperature Converter Functions
  const convertFromCelsius = (c) => {
    if (c === "") {
      setFahrenheit("");
      setKelvin("");
      return;
    }
    const temp = parseFloat(c);
    setFahrenheit(((temp * 9 / 5) + 32).toFixed(2));
    setKelvin((temp + 273.15).toFixed(2));
  };

  const convertFromFahrenheit = (f) => {
    if (f === "") {
      setCelsius("");
      setKelvin("");
      return;
    }
    const temp = parseFloat(f);
    const c = (temp - 32) * 5 / 9;
    setCelsius(c.toFixed(2));
    setKelvin((c + 273.15).toFixed(2));
  };

  const convertFromKelvin = (k) => {
    if (k === "") {
      setCelsius("");
      setFahrenheit("");
      return;
    }
    const temp = parseFloat(k);
    const c = temp - 273.15;
    setCelsius(c.toFixed(2));
    setFahrenheit(((c * 9 / 5) + 32).toFixed(2));
  };

  // Geometry Calculator Functions
  const calculateGeometry = () => {
    let newResults = {};

    switch (shape) {
      case "circle":
        const radius = parseFloat(dimensions.radius) || 0;
        newResults = {
          area: (Math.PI * radius * radius).toFixed(2),
          circumference: (2 * Math.PI * radius).toFixed(2)
        };
        break;
      case "rectangle":
        const length = parseFloat(dimensions.length) || 0;
        const width = parseFloat(dimensions.width) || 0;
        newResults = {
          area: (length * width).toFixed(2),
          perimeter: (2 * (length + width)).toFixed(2)
        };
        break;
      case "triangle":
        const base = parseFloat(dimensions.base) || 0;
        const height = parseFloat(dimensions.height) || 0;
        newResults = {
          area: (0.5 * base * height).toFixed(2)
        };
        break;
    }
    setResults(newResults);
  };

  // Financial Calculator Functions
  const calculateLoanPayment = () => {
    const P = parseFloat(loanPrincipal);
    const r = parseFloat(loanRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (!P || !r || !n) return;

    const payment = (P * r) / (1 - Math.pow(1 + r, -n));
    setMonthlyPayment(payment.toFixed(2));
  };

  // Unit Converter Functions
  const units = {
    length: {
      meter: 1,
      kilometer: 0.001,
      centimeter: 100,
      millimeter: 1000,
      inch: 39.3701,
      feet: 3.28084,
      yard: 1.09361,
      mile: 0.000621371
    },
    weight: {
      kilogram: 1,
      gram: 1000,
      pound: 2.20462,
      ounce: 35.274,
      stone: 0.157473
    },
    volume: {
      liter: 1,
      milliliter: 1000,
      gallon: 0.264172,
      quart: 1.05669,
      pint: 2.11338,
      cup: 4.22675,
      fluid_ounce: 33.814
    }
  };

  const convertUnits = () => {
    if (!inputValue || !fromUnit || !toUnit) return;

    const value = parseFloat(inputValue);
    const baseValue = value / units[unitType][fromUnit];
    const result = baseValue * units[unitType][toUnit];
    setConvertedValue(result.toFixed(6));
  };

  // Render Functions
  const renderBasicCalculator = () => (
    <div className="space-y-4">
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="text-right text-3xl font-mono mb-2">
          {display || "0"}
        </div>
        {operation && (
          <div className="text-right text-sm text-gray-400">
            {previousValue} {operation}
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-3">
        <button onClick={clear} className="col-span-2 bg-red-600 hover:bg-red-700 p-4 rounded-lg font-semibold">
          Clear
        </button>
        <button onClick={() => inputOperation("÷")} className="bg-orange-600 hover:bg-orange-700 p-4 rounded-lg font-semibold">
          ÷
        </button>
        <button onClick={() => inputOperation("×")} className="bg-orange-600 hover:bg-orange-700 p-4 rounded-lg font-semibold">
          ×
        </button>

        <button onClick={() => inputNumber("7")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          7
        </button>
        <button onClick={() => inputNumber("8")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          8
        </button>
        <button onClick={() => inputNumber("9")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          9
        </button>
        <button onClick={() => inputOperation("-")} className="bg-orange-600 hover:bg-orange-700 p-4 rounded-lg font-semibold">
          -
        </button>

        <button onClick={() => inputNumber("4")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          4
        </button>
        <button onClick={() => inputNumber("5")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          5
        </button>
        <button onClick={() => inputNumber("6")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          6
        </button>
        <button onClick={() => inputOperation("+")} className="bg-orange-600 hover:bg-orange-700 p-4 rounded-lg font-semibold">
          +
        </button>

        <button onClick={() => inputNumber("1")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          1
        </button>
        <button onClick={() => inputNumber("2")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          2
        </button>
        <button onClick={() => inputNumber("3")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          3
        </button>
        <button onClick={calculate} className="row-span-2 bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold">
          =
        </button>

        <button onClick={() => inputNumber("0")} className="col-span-2 bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          0
        </button>
        <button onClick={() => inputNumber(".")} className="bg-gray-600 hover:bg-gray-500 p-4 rounded-lg font-semibold">
          .
        </button>
      </div>
    </div>
  );

  const renderScientificCalculator = () => (
    <div className="space-y-4">
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="text-right text-3xl font-mono">
          {scientificDisplay}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        <button onClick={() => executeFunction('sin')} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-sm font-semibold">
          sin
        </button>
        <button onClick={() => executeFunction('cos')} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-sm font-semibold">
          cos
        </button>
        <button onClick={() => executeFunction('tan')} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-sm font-semibold">
          tan
        </button>
        <button onClick={() => executeFunction('log')} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-sm font-semibold">
          log
        </button>
        <button onClick={() => executeFunction('ln')} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-sm font-semibold">
          ln
        </button>

        <button onClick={() => executeFunction('sqrt')} className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-sm font-semibold">
          √
        </button>
        <button onClick={() => executeFunction('square')} className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-sm font-semibold">
          x²
        </button>
        <button onClick={() => executeFunction('factorial')} className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-sm font-semibold">
          x!
        </button>
        <button onClick={() => setScientificDisplay(String(Math.PI))} className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-sm font-semibold">
          π
        </button>
        <button onClick={() => setScientificDisplay(String(Math.E))} className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-sm font-semibold">
          e
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, '÷'].map((btn) => (
          <button key={btn} onClick={() => setScientificDisplay(prev => prev === "0" ? String(btn) : prev + btn)} className="bg-gray-600 hover:bg-gray-500 p-3 rounded-lg font-semibold">
            {btn}
          </button>
        ))}
        {[4, 5, 6, '×'].map((btn) => (
          <button key={btn} onClick={() => setScientificDisplay(prev => prev === "0" ? String(btn) : prev + btn)} className="bg-gray-600 hover:bg-gray-500 p-3 rounded-lg font-semibold">
            {btn}
          </button>
        ))}
        {[1, 2, 3, '-'].map((btn) => (
          <button key={btn} onClick={() => setScientificDisplay(prev => prev === "0" ? String(btn) : prev + btn)} className="bg-gray-600 hover:bg-gray-500 p-3 rounded-lg font-semibold">
            {btn}
          </button>
        ))}
        {[0, '.', '=', '+'].map((btn) => (
          <button key={btn} onClick={() => setScientificDisplay(prev => prev === "0" ? String(btn) : prev + btn)} className="bg-gray-600 hover:bg-gray-500 p-3 rounded-lg font-semibold">
            {btn}
          </button>
        ))}
      </div>
    </div>
  );

  const renderGeometryCalculator = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Geometry Calculator</h3>

      <div className="flex justify-center space-x-4">
        {["circle", "rectangle", "triangle"].map((s) => (
          <button
            key={s}
            onClick={() => setShape(s)}
            className={`px-4 py-2 rounded-lg capitalize ${shape === s ? 'bg-blue-600' : 'bg-gray-600'
              }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {shape === "circle" && (
          <div>
            <label className="block text-sm font-medium mb-2">Radius</label>
            <input
              type="number"
              value={dimensions.radius || ""}
              onChange={(e) => setDimensions({ ...dimensions, radius: e.target.value })}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
            />
          </div>
        )}

        {shape === "rectangle" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Length</label>
              <input
                type="number"
                value={dimensions.length || ""}
                onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Width</label>
              <input
                type="number"
                value={dimensions.width || ""}
                onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
              />
            </div>
          </>
        )}

        {shape === "triangle" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Base</label>
              <input
                type="number"
                value={dimensions.base || ""}
                onChange={(e) => setDimensions({ ...dimensions, base: e.target.value })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Height</label>
              <input
                type="number"
                value={dimensions.height || ""}
                onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
              />
            </div>
          </>
        )}
      </div>

      <button
        onClick={calculateGeometry}
        className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
      >
        Calculate
      </button>

      {Object.keys(results).length > 0 && (
        <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Results</h4>
          {Object.entries(results).map(([key, value]) => (
            <p key={key} className="capitalize">
              {key}: {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  const renderUnitConverter = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Unit Converter</h3>

      <div className="flex justify-center space-x-4">
        {Object.keys(units).map((type) => (
          <button
            key={type}
            onClick={() => setUnitType(type)}
            className={`px-4 py-2 rounded-lg capitalize ${unitType === type ? 'bg-green-600' : 'bg-gray-600'
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          >
            <option value="">Select unit</option>
            {Object.keys(units[unitType]).map((unit) => (
              <option key={unit} value={unit}>
                {unit.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          >
            <option value="">Select unit</option>
            {Object.keys(units[unitType]).map((unit) => (
              <option key={unit} value={unit}>
                {unit.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Value</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          placeholder="Enter value to convert"
        />
      </div>

      <button
        onClick={convertUnits}
        className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg font-semibold"
      >
        Convert
      </button>

      {convertedValue && (
        <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg text-center">
          <p className="text-xl">
            {inputValue} {fromUnit.replace('_', ' ')} = {convertedValue} {toUnit.replace('_', ' ')}
          </p>
        </div>
      )}
    </div>
  );

  const renderFinancialCalculator = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Loan Payment Calculator</h3>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Principal ($)</label>
          <input
            type="number"
            value={loanPrincipal}
            onChange={(e) => setLoanPrincipal(e.target.value)}
            placeholder="100000"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
          <input
            type="number"
            value={loanRate}
            onChange={(e) => setLoanRate(e.target.value)}
            placeholder="5.5"
            step="0.1"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Term (Years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="30"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          />
        </div>
      </div>

      <button
        onClick={calculateLoanPayment}
        className="w-full sm:w-auto flex mx-auto bg-green-600 hover:bg-green-700 p-3 rounded-lg font-semibold cursor-pointer"
      >
        Calculate Monthly Payment
      </button>

      {monthlyPayment && (
        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg text-center">
          <h4 className="text-lg font-semibold mb-2">Monthly Payment</h4>
          <p className="text-3xl font-bold text-green-400">${monthlyPayment}</p>
        </div>
      )}
    </div>
  );

  const renderTemperatureConverter = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Temperature Converter</h3>

      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Celsius (°C)</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => {
              setCelsius(e.target.value);
              convertFromCelsius(e.target.value);
            }}
            placeholder="Enter temperature"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Fahrenheit (°F)</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => {
              setFahrenheit(e.target.value);
              convertFromFahrenheit(e.target.value);
            }}
            placeholder="Enter temperature"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Kelvin (K)</label>
          <input
            type="number"
            value={kelvin}
            onChange={(e) => {
              setKelvin(e.target.value);
              convertFromKelvin(e.target.value);
            }}
            placeholder="Enter temperature"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
          />
        </div>
      </div>

      <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Quick Reference</h4>
        <div className="text-sm space-y-1">
          <p>Water freezes: 0°C = 32°F = 273.15K</p>
          <p>Water boils: 100°C = 212°F = 373.15K</p>
          <p>Room temperature: ~20°C = ~68°F = ~293K</p>
        </div>
      </div>
    </div>
  );

  const renderCalculator = () => {
    switch (activeCalculator) {
      case "basic": return renderBasicCalculator();
      case "scientific": return renderScientificCalculator();
      case "temperature": return renderTemperatureConverter();
      case "geometry": return renderGeometryCalculator();
      case "financial": return renderFinancialCalculator();
      case "unit": return renderUnitConverter();
      default: return <div className="text-center text-gray-400">Calculator not implemented yet.</div>;
    }
  };

  return (
    <div className="text-white min-h-screen px-3 sm:p-6">

      {/* Back to Tool */}
      <Link href="/tools" className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-6 sm:mb-6 transition-colors">
        <span className="mr-2">←</span>
        Back to Tools
      </Link>

      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-2 text-center">All-in-One Calculator</h2>
        <p className="text-gray-300 text-center mb-10">Every calculation you need in one place</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 mb-8">
          {Object.entries(calculators).map(([key, calc]) => {
            const Icon = calc.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCalculator(key)}
                className={`p-4 rounded-xl border-2 transition-all text-sm ${activeCalculator === key
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-600 hover:border-gray-500'
                  }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm font-medium">{calc.name}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          {renderCalculator()}
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;