import { useRef, useState } from 'react';
import './App.css';

const App = () => {
    const [type, setType] = useState({ from: 'INR', to: 'IQD' });
    const [amount, setAmount] = useState(1);
    const rateRef = useRef(null);

    // TODO: Use API https://api.exchangerate.host/latest to get latest rates of all currencies
    const rates = {
        INR: 1,
        IQD: 16.065941,
        USD: 0.012201
    }

    const sins = {
        INR: 'રૂપિયા',
        IQD: 'દીનાર',
        USD: 'ડૉલર'
    }

    const getConvertedRate = () => {
        let val = 0;
        val = amount / rates[type.from] * rates[type.to];
        return val.toFixed(3)
    }

    return (
        <div className="App">
            <div className="navbar">
                Currency Converter
            </div>

            <div className='main-container'>
                <select id="type" className='form-control' value={JSON.stringify(type)} onChange={(event) => { setType(JSON.parse(event.target.value)); rateRef.current.select(); rateRef.current.focus(); }}>
                    <option value={JSON.stringify({ from: 'INR', to: 'IQD' })}>રૂપિયા માથી દીનાર</option>
                    <option value={JSON.stringify({ from: 'IQD', to: 'INR' })}>દીનાર માથી રૂપિયા</option>
                    <option value={JSON.stringify({ from: 'USD', to: 'INR' })}>ડૉલર માથી રૂપિયા</option>
                    <option value={JSON.stringify({ from: 'USD', to: 'IQD' })}>ડૉલર માથી દીનાર</option>
                    <option value={JSON.stringify({ from: 'IQD', to: 'USD' })}>દીનાર માથી ડૉલર</option>
                </select>
            </div>

            <div className="main-container" style={{ justifyContent: 'space-between' }}>
                <span style={{ fontSize: '25px', padding: '0 15px' }}>{sins[type.from]}</span>
                <span style={{ fontSize: '25px', padding: '0 15px' }}>{sins[type.to]}</span>
            </div>
            <div className="main-container" style={{ marginTop: 0 }}>
                <input type="number" value={amount} ref={rateRef} onChange={(event) => setAmount(event.target.value)} />
                <span style={{ margin: '20px 15px', fontSize: '25px' }}>{`=>`}</span>
                <input type="number" value={getConvertedRate()} disabled />
            </div>
        </div>
    );
}

export default App;