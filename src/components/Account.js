import React, { useState } from 'react'

const Account = props => {
    let [amount, setAmount] = useState(0)
    let [balance, setBalance] = useState(0)
    let [action, setAction] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        if (isNaN(amount) || amount < 0) {
            console.log("Not a number")
        }
        else {
            if (action ==='D') {
                setBalance(balance + Number(amount))
            } else if (action === 'W') {
                if ((balance - Number(amount)) >= 0) {
                    setBalance(balance - Number(amount))
                } else {
                    console.log("Insufficent funds, Buddy.")
                }
            }
        }
        setAmount(0)
    }

    let balanceClass = 'balance'
    if (balance <= 0) {
        balanceClass += ' zero'
    }

    return (
        <div className="account">
            <h2>{props.name}</h2>
            <div className={balanceClass}>${balance}</div>
            <form onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={amount} 
                    onChange={ e => setAmount(e.target.value) }
                    style={{width: '80px'}}
                />
                <input type="submit" value="Deposit" onClick={() => setAction("D")}/>
                <input type="submit" value="Withdraw" onClick={() => setAction("W")}/>
            </form>
        </div>
    )
}

export default Account