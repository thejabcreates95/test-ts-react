import React, { useState } from 'react';

function FormCard() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const onCalculateSum = () => {
    fetch('http://localhost:8888/get-sum', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num1, num2 })
    })
      .then(res => res.json())
      .then(({data}) => {
        setResult(data)
      })
  }

  return (
    <div className="form-card">
        <div className="form-card__container">
          <h5 className="form-card__label">
              Enter the numbers
          </h5>

          <input
              type="number"
              placeholder="number 1"
              className="form-card__input"
              onChange={e => setNum1(e.target.value)}
              defaultValue={num1}
          />

          <input
              type="number"
              placeholder="number 2"
              className="form-card__input"
              defaultValue={num2}
              onChange={e => setNum2(e.target.value)}
          />

          <button
              className="form-card__get-sum"
              onClick={onCalculateSum}
          >
              Sum
          </button>

          <hr/>

          <h5 className="form-card__label">
              Enter the numbers
          </h5>
          <input
              placeholder="Result"
              className="form-card__input form-card__input--focused"
              value={result}
              readOnly
          />

        </div>
    </div>
  );
}

export default FormCard;
