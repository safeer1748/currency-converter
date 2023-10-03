import React, { useEffect, useState } from 'react'
import CurrencyInput from './components/currencyInput'
import axios from 'axios';
const App = () => {
  const[amount1,setAmount1]=useState('')
  const[amount2,setAmount2]=useState('')
  const[currency1,setCurrency1]=useState("USD")
  const[currency2,setCurrency2]=useState("PKR")
  const[rates,setRates]=useState([])
  useEffect(()=>{
    axios.get('https://openexchangerates.org/api/latest.json?app_id=d80127fdf36f4f1e99facd28d2b4bb30')
    .then(response=>{
      setRates(response.data.rates)
    })
  },[])
  useEffect(()=>{
    if(!!rates){
      handleAmount1Change(1)
    }
  },[rates])
  const format=(number)=>{
    return number.toFixed(4)
  }
  const handleAmount1Change=(amount1)=>{
    setAmount1(amount1)
    setAmount2(format(amount1*rates[currency2]/rates[currency1]))
  }
  const handleCurrency1Change=(currency1)=>{
    setAmount2(format(amount1*rates[currency2]/rates[currency1]))
    setCurrency1(currency1)
  }
  const handleAmount2Change=(amount2)=>{
    setAmount2(amount2)
    setAmount1(format(amount2*rates[currency1]/rates[currency2]))
  }
  const handleCurrency2Change=(currency2)=>{
    setAmount1(format(amount2*rates[currency1]/rates[currency2]))
    setCurrency2(currency2)
  }
  return (
    <>
   
      <div className='w-full h-screen flex flex-col pt-[15vh] items-center gap-3 bg-gray-950'>
      <h1 className='text-white text-4xl font-medium mb-5'>Currency Converter</h1>
        <CurrencyInput currencies={Object.keys(rates)} amount={amount1} currency={currency1} onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} />
        <CurrencyInput currencies={Object.keys(rates)} amount={amount2} currency={currency2} onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} />
      </div>
    </>
  )
}

export default App
