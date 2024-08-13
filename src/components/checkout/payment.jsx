const Payment = ({
  formState,
  handleChange,
  handleBlur,
  handleFocus,
  handleSubmit,
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Payment</h2>
      <div className="p-4 border bg-blue-100 rounded mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              name="cardNumber"
              value={formState.cardNumber.value}
              placeholder="Card number"
              className="w-full p-2 border"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formState.cardNumber.error && (
              <span className="text-red-700">{formState.cardNumber.error}</span>
            )}
          </div>
          <div>
            <input
              type="text"
              name="date"
              value={formState.date.value}
              placeholder="Expiration date (MM / YY)"
              className="w-full p-2 border"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formState.date.error && (
              <span className="text-red-700">{formState.date.error}</span>
            )}
          </div>
          <div>
            <input
              type="text"
              name="securityCode"
              value={formState.securityCode.value}
              placeholder="Security code"
              className="w-full p-2 border"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formState.securityCode.error && (
              <span className="text-red-700">
                {formState.securityCode.error}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              name="cardName"
              value={formState.cardName.value}
              placeholder="Name on card"
              className="w-full p-2 border"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formState.cardName.error && (
              <span className="text-red-700">{formState.cardName.error}</span>
            )}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="checked"
            value={formState.checked.value}
            id="billingAddress"
            className="mr-2"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor="billingAddress">
            Use shipping address as billing address
          </label>
        </div>
      </div>
    </div>
  );
};

export default Payment;
