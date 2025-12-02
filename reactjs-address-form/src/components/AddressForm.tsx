import { useState, type ChangeEvent, type FormEvent } from "react"
import './AddressForm.css'

interface AddressFormData {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

function AddressForm() {
  // Form state
  const [formData, setFormData] = useState<AddressFormData>({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  })

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Submission state
  const [submitted, setSubmitted] = useState(false)

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Validate form
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.street.trim()) {
      newErrors.street = 'Street address is required'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required'
    }

    if (!formData.zip.trim()) {
      newErrors.zip = 'ZIP is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
      newErrors.zip = 'ZIP code must be in format 123345 or 12345-6789'
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validate()) {
      setSubmitted(true)
      console.log("Address submitted:", formData)
    }
  }

  // Reset form
  const handleReset = () => {
    setFormData({
      street: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    })
    setErrors({})
    setSubmitted(false)
  }

  // Success view
  if (submitted) {
    return <div className="address-form-container">
      <div className="success-message">
        <h2>✅ Address Submitted Successfully!</h2>
        <div className="submitted-address">
          <h3>Your Address:</h3>
          <p>{formData.street}</p>
          <p>{formData.city}, {formData.state} {formData.zip}</p>
          <p>{formData.country}</p>
        </div>
        <button
          type="button" className="btn-secondary" onClick={handleReset}>Submit Another Address</button>
      </div>
    </div>
  }

  // Form view
  return (<div className="address-form-container">
    <h2>Address Form</h2>
    <form onSubmit={handleSubmit} className="address-form">

      {/* Street Address */}
      <div className="form-group">
        <label htmlFor="street">Street Address <span className="required">*</span></label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className={errors.street ? 'error' : ''}
          placeholder="123 Main St" />
        {errors.street && (<span className="error-message">{errors.street}</span>)}
      </div>

      {/* City */}
      <div className="form-group">
        <label htmlFor="city">City<span className="required">*</span></label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? 'error' : ''}
          placeholder="San Francisco" />
        {errors.city && (<span className="error-message">{errors.city}</span>)}
      </div>

      {/* State */}
      <div className="form-group">
        <label htmlFor="state">State<span className="required">*</span></label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={errors.state ? 'error' : ''}
          placeholder="CA" />
        {errors.state && (<span className="error-message">{errors.state}</span>)}
      </div>

      {/* ZIP Code */}
      <div className="form-group">
        <label htmlFor="zip">ZIP Code <span className="required">*</span></label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className={errors.zip ? 'error' : ''}
          placeholder="12345" />
        {errors.zip && (<span className="error-message">{errors.zip}</span>)}
      </div>

      {/* Country */}
      <div className="form-group">
        <label htmlFor="country">Country <span className="required">*</span></label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={errors.country ? 'error' : ''}
          placeholder="CA" />
        {errors.country && (<span className="error-message">{errors.country}</span>)}
      </div>

      {/* Submit button */}
      <button type="submit" className="btn-primary">
        Submit Address
      </button>
    </form>
  </div>)
}

export default AddressForm
