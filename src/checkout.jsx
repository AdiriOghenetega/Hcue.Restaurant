import "./assets/checkout.css";
import { useState, useEffect } from "react";
import commerce from "./lib/commerce";

export default function Checkout(props) {
  if (props.checkoutToken.id) {
    
  const [checkoutFormData, setCheckoutFormData] = useState({
    // Customer details
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@email.com",
    // Shipping details
    shippingName: "Jane Doe",
    shippingStreet: "123 Fake St",
    shippingCity: "San Francisco",
    shippingStateProvince: "CA",
    shippingPostalZipCode: "94107",
    // shippingCountry: "US",
    // Payment details
    cardNum: "4242 4242 4242 4242",
    expMonth: "11",
    expYear: "2023",
    ccv: "123",
    billingPostalZipcode: "94107"
  });
  // Shipping and fulfillment data
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
console.log(shippingOption)
 

  function handleChange(e) {
    const { name, value } = e.target;
    setCheckoutFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  let fetchShippingCountries, fetchSubdivisions, fetchShippingOptions;
  
    fetchShippingCountries = async (checkoutTokenId) => {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );

      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
    };

    fetchSubdivisions = async (countryCode) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        countryCode
      );

      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
    };

    fetchShippingOptions = async (
      checkoutTokenId,
      country,
      stateProvince = null
    ) => {
      const options = await commerce.checkout.getShippingOptions(
        checkoutTokenId,
        { country, region: stateProvince }
      );

      setShippingOptions(options);
      setShippingOption(options[0].id);
    };
  

  useEffect(() => {
    fetchShippingCountries(props.checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        props.checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  useEffect(() => {
    fetchShippingOptions(props.checkoutToken.id, shippingCountry);
  }, [shippingCountry]);

  const handleShippingCountryChange = (e) => {
    const currentValue = e.target.value;
    // fetchSubdivisions(currentValue);
    setShippingCountry(currentValue)
  };

  const handleSubdivisionChange = (e) => {
    const currentValue = e.target.value;
    setShippingSubdivision(currentValue)
    fetchShippingOptions(props.checkoutToken.id, shippingCountry, currentValue);
  };

  const sanitizedLineItems=(lineItems)=> {
    return lineItems.reduce((data, lineItem) => {
      const item = data;
      let variantData = null;
      if (lineItem.selected_options.length) {
        variantData = {
          [lineItem.selected_options[0].group_id]: lineItem.selected_options[0].option_id,
        };
      }
      item[lineItem.id] = {
        quantity: lineItem.quantity,
        variants: variantData,
      };
    return item; 
    }, {});
  };

  function handleCaptureCheckout(e) {
    e.preventDefault();
    const orderData = {
      line_items: sanitizedLineItems(props.cart.line_items),
      customer: {
        firstname: checkoutFormData.firstName,
        lastname: checkoutFormData.lastName,
        email: checkoutFormData.email,
      },
      shipping: {
        name: checkoutFormData.shippingName,
        street: checkoutFormData.shippingStreet,
        town_city: checkoutFormData.shippingCity,
        county_state: shippingSubdivision,
        postal_zip_code: checkoutFormData.shippingPostalZipCode,
        country: shippingCountry,
      },
      fulfillment: {
        shipping_method: shippingOption
      },
      billing: {
        name: checkoutFormData.shippingName,
        street: checkoutFormData.shippingStreet,
        town_city: checkoutFormData.shippingCity,
        county_state: shippingSubdivision,
        postal_zip_code: checkoutFormData.shippingPostalZipCode,
        country: shippingCountry
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: checkoutFormData.cardNum,
          expiry_month: checkoutFormData.expMonth,
          expiry_year: checkoutFormData.expYear,
          cvc: checkoutFormData.ccv,
          postal_zip_code: checkoutFormData.billingPostalZipcode,
        },
      },
    };
    console.log(props.checkoutToken.id,orderData)
    props.onCaptureCheckout(props.checkoutToken.id, orderData);
  };

  return (
    <div className="checkout__container">
      <form className="checkout__form">
        <h4 className="checkout__subheading">Customer information</h4>
        <div className="checkout__section">
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="firstName">
              First name
            </label>
            <input
              className="checkout__input"
              type="text"
              value={checkoutFormData.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="lastName">
              Last name
            </label>
            <input
              className="checkout__input"
              type="text"
              value={checkoutFormData.lastName}
              onChange={handleChange}
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="email">
              Email
            </label>
            <input
              className="checkout__input"
              type="text"
              value={checkoutFormData.email}
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <h4 className="checkout__subheading">Shipping details</h4>
        <div className="checkout__section">
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="shippingName">
              Full name
            </label>
            <input
              className="checkout__input"
              type="text"
              value={checkoutFormData.shippingName}
              onChange={handleChange}
              name="shippingName"
              placeholder="Enter your shipping full name"
              required
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="shippingStreet">
              Street address
            </label>
            <input
              className="checkout__input"
              type="text"
              value={checkoutFormData.shippingStreet}
              name="shippingStreet"
              onChange={handleChange}
              placeholder="Enter your street address"
              required
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="shippingCity">
              City
            </label>
            <input
              className="checkout__input"
              type="text"
              value={checkoutFormData.shippingCity}
              onChange={handleChange}
              name="shippingCity"
              placeholder="Enter your city"
              required
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="shippingPostalZipCode">
              Postal/Zip code
            </label>
            <input
              className="checkout__input"
              type="text"
              value={checkoutFormData.shippingPostalZipCode}
              onChange={handleChange}
              name="shippingPostalZipCode"
              placeholder="Enter your postal/zip code"
              required
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="shippingCountry">
              Country
            </label>
            <select
              value={shippingCountry}
              name="shippingCountry"
              className="checkout__select"
              onChange={handleShippingCountryChange}
            >
              <option disabled>Country</option>
              {Object.keys(shippingCountries).map((index) => {
                return (
                  <option value={index} key={index}>
                    {shippingCountries[index]}
                  </option>
                );
              })}
              ;
            </select>
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="shippingStateProvince">
              State/province
            </label>
            <select
              value={shippingSubdivision}
              name="shippingStateProvince"
              onChange={handleSubdivisionChange}
              className="checkout__select"
            >
              <option className="checkout__option" disabled>
                State/province
              </option>
              {Object.keys(shippingSubdivisions).map((index) => {
                return (
                  <option value={index} key={index}>
                    {shippingSubdivisions[index]}
                  </option>
                );
              })}
              ;
            </select>
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="shippingOption">
              Shipping method
            </label>
            <select
              value={shippingOption.id}
              name="shippingOption"
              onChange={handleChange}
              className="checkout__select"
            >
              <option className="checkout__select-option" disabled>
                Select a shipping method
              </option>
              {shippingOptions.map((method, index) => {
                return (
                  <option
                    className="checkout__select-option"
                    value={method.id}
                    key={index}
                  >{`${method.description} - $${method.price.formatted_with_code}`}</option>
                );
              })}
              ;
            </select>
          </div>
        </div>

        <h4 className="checkout__subheading">Payment information</h4>

        <div className="checkout__section">
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="cardNum">
              Credit card number
            </label>
            <input
              className="checkout__input"
              type="text"
              name="cardNum"
              value={checkoutFormData.cardNum}
              onChange={handleChange}
              placeholder="Enter your card number"
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="expMonth">
              Expiry month
            </label>
            <input
              className="checkout__input"
              type="text"
              name="expMonth"
              value={checkoutFormData.expMonth}
              onChange={handleChange}
              placeholder="Card expiry month"
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="expYear">
              Expiry year
            </label>
            <input
              className="checkout__input"
              type="text"
              name="expYear"
              value={checkoutFormData.expYear}
              onChange={handleChange}
              placeholder="Card expiry year"
            />
          </div>
          <div className="checkout__section_input">
            <label className="checkout__label" htmlFor="ccv">
              CCV
            </label>
            <input
              className="checkout__input"
              type="text"
              name="ccv"
              value={checkoutFormData.ccv}
              onChange={handleChange}
              placeholder="CCV (3 digits)"
            />
          </div>
        </div>

        <button className="checkout__btn-confirm" onClick={handleCaptureCheckout}>Confirm order</button>
      </form>
    </div>
  );
}else{
  return <h1 style={{color:"#ED8B1B"}} >loading...</h1>}
}
