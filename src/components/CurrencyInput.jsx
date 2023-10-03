import React from 'react'
const CurrencyInput = ({amount,currency,currencies,onAmountChange,onCurrencyChange}) => {
    return (
        <>
        <div className='relative'>
            <input className='bg-transparent border-2 border-gray-500 text-white pr-28 pl-3 py-1.5 rounded-full focus:border-blue-600 focus:outline-none' type="number" value={amount} onChange={e=>onAmountChange(e.target.value)} />
            <select className='focus:outline-none absolute right-2 top-2 pl-3 pr-8 bg-gray-950/90 text-white rounded-full' name="currency" id="" value={currency} onChange={e=>onCurrencyChange(e.target.value)}>
                {currencies.map((cur)=>{
                    return <option key={cur} value={cur}>{cur}</option>
                })}
                
            </select>
        </div>
        </>
    )
}

export default CurrencyInput
