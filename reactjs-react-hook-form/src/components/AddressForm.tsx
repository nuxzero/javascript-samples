import { useState } from "react"
import './AddressForm.css'
import { addressSchema, type AddressFormData } from "../schemas/addressSchema"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

function AddressForm() {
  // Submission state
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<AddressFormData | null>()

  // Initialize react-hook-form with yup validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddressFormData>({
    resolver: yupResolver(addressSchema),
    mode: 'onSubmit',
  })

  // Handle form submission
  const onSubmit = (data: AddressFormData) => {
    setSubmittedData(data)
    setSubmitted(true)
    console.log("Address submitted:", data)
  }

  // Reset form
  const handleReset = () => {
    reset()
    setSubmitted(false)
    setSubmittedData(null)
  }

  // Success view
  if (submitted && submittedData) {
    return <div className="address-form-container">
      <div className="success-message">
        <h2>✅ Address Submitted Successfully!</h2>
        <div className="submitted-address">
          <h3>Your Address:</h3>
          <p>{submittedData.street}</p>
          <p>{submittedData.city}, {submittedData.state} {submittedData.zip}</p>
          <p>{submittedData.country}</p>
        </div>
        <button
          type="button" className="btn-secondary" onClick={handleReset}>Submit Another Address</button>
      </div>
    </div>
  }

  // Form view
  return (<div className="address-form-container">
    <h2>Address Form</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="address-form">

      {/* Street Address */}
      <div className="form-group">
        <label htmlFor="street">Street Address <span className="required">*</span></label>
        <input
          type="text"
          id="street"
          {...register("street")}
          className={errors.street ? 'error' : ''}
          placeholder="123 Main St" />
        {errors.street && (<span className="error-message">{errors.street.message}</span>)}
      </div>

      {/* City */}
      <div className="form-group">
        <label htmlFor="city">City<span className="required">*</span></label>
        <input
          type="text"
          id="city"
          {...register("city")}
          className={errors.city ? 'error' : ''}
          placeholder="San Francisco" />
        {errors.city && (<span className="error-message">{errors.city.message}</span>)}
      </div>

      {/* State */}
      <div className="form-group">
        <label htmlFor="state">State<span className="required">*</span></label>
        <input
          type="text"
          id="state"
          {...register("state")}
          className={errors.state ? 'error' : ''}
          placeholder="CA" />
        {errors.state && (<span className="error-message">{errors.state.message}</span>)}
      </div>

      {/* ZIP Code */}
      <div className="form-group">
        <label htmlFor="zip">ZIP Code <span className="required">*</span></label>
        <input
          type="text"
          id="zip"
          {...register('zip')}
          className={errors.zip ? 'error' : ''}
          placeholder="12345" />
        {errors.zip && (<span className="error-message">{errors.zip.message}</span>)}
      </div>

      {/* Country */}
      <div className="form-group">
        <label htmlFor="country">Country <span className="required">*</span></label>
        <input
          type="text"
          id="country"
          {...register("country")}
          className={errors.country ? 'error' : ''}
          placeholder="CA" />
        {errors.country && (<span className="error-message">{errors.country.message}</span>)}
      </div>

      {/* Submit button */}
      <button type="submit" className="btn-primary">
        Submit Address
      </button>
    </form>
  </div>)
}

export default AddressForm
