# React.js Form Handling Guide

## Table of Contents
1. [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components)
2. [Using useState for Form State](#using-usestate-for-form-state)
3. [Handling Form Submission](#handling-form-submission)
4. [Form Validation](#form-validation)
5. [Best Practices](#best-practices)

## Controlled vs Uncontrolled Components

### Controlled Components
In controlled components, React state controls the form input values. The component's state is the "single source of truth."

import { useState } from 'react'

function ControlledInput() {
  const [value, setValue] = useState('')
  
  return (
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  )
}**Benefits:**
- Predictable state management
- Easy to validate
- Can be reset programmatically
- Better for React's declarative model

### Uncontrolled Components
Uncontrolled components use refs to access form values directly from the DOM.

import { useRef } from 'react'

function UncontrolledInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  
  const handleSubmit = () => {
    console.log(inputRef.current?.value)
  }
  
  return (
    <input 
      type="text" 
      ref={inputRef} 
      defaultValue="initial value"
    />
  )
}**When to use:**
- Simple forms with minimal validation
- Integrating with non-React libraries
- Performance-critical scenarios

## Using useState for Form State

### Single Inputsx
const [email, setEmail] = useState('')

<input 
  type="email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>### Multiple Inputs (Object Pattern)
const [formData, setFormData] = useState({
  name: '',
  email: '',
  age: ''
})

// Update single field
<input 
  type="text" 
  name="name"
  value={formData.name} 
  onChange={(e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })} 
/>### Multiple Inputs (Computed Property Pattern)
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: value
  }))
}

<input 
  type="text" 
  name="name"
  value={formData.name} 
  onChange={handleChange} 
/>## Handling Form Submission

### Basic Form Submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault() // Prevent page refresh
  console.log('Form submitted:', formData)
  // Process form data here
}

<form onSubmit={handleSubmit}>
  {/* form fields */}
  <button type="submit">Submit</button>
</form>### Form Submission with Validation
const [errors, setErrors] = useState<Record<string, string>>({})

const validate = () => {
  const newErrors: Record<string, string> = {}
  
  if (!formData.name.trim()) {
    newErrors.name = 'Name is required'
  }
  
  if (!formData.email.includes('@')) {
    newErrors.email = 'Invalid email format'
  }
  
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  
  if (validate()) {
    console.log('Form is valid:', formData)
    // Submit form
  }
}## Form Validation

### Required Field Validation
const [errors, setErrors] = useState<Record<string, string>>({})

const validateField = (name: string, value: string) => {
  if (!value.trim()) {
    setErrors(prev => ({
      ...prev,
      [name]: `${name} is required`
    }))
  } else {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }
}

<input 
  type="text" 
  name="street"
  value={formData.street}
  onChange={handleChange}
  onBlur={(e) => validateField('street', e.target.value)}
/>
{errors.street && <span className="error">{errors.street}</span>}### Real-time Validation
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
  
  // Validate on change
  if (value.trim() === '') {
    setErrors(prev => ({ ...prev, [name]: `${name} is required` }))
  } else {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }
}## Best Practices

1. **Always use controlled components** for React applications
2. **Prevent default form behavior** with `e.preventDefault()` in `onSubmit`
3. **Validate on blur** for better UX (not on every keystroke)
4. **Show clear error messages** near the relevant input
5. **Disable submit button** when form is invalid
6. **Use TypeScript** for type safety with form data
7. **Group related fields** in an object for cleaner state management
8. **Reset form** after successful submission

### Example: Complete Form Pattern
import { useState, FormEvent } from 'react'

interface FormData {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

function AddressForm() {
  const [formData, setFormData] = useState<FormData>({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    const required = ['street', 'city', 'state', 'zip', 'country']
    
    required.forEach(field => {
      if (!formData[field as keyof FormData].trim()) {
        newErrors[field] = `${field} is required`
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      console.log('Address submitted:', formData)
    }
  }
  
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
  
  if (submitted) {
    return (
      <div>
        <h2>Address Submitted!</h2>
        <p>{formData.street}</p>
        <p>{formData.city}, {formData.state} {formData.zip}</p>
        <p>{formData.country}</p>
        <button onClick={handleReset}>Submit Another</button>
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="street">Street Address</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        {errors.street && <span className="error">{errors.street}</span>}
      </div>
      
      {/* More fields... */}
      
      <button type="submit">Submit</button>
    </form>
  )
}## Summary

- Use **controlled components** with `useState` for form state
- Always **prevent default** form submission behavior
- **Validate** form data before submission
- Provide **clear feedback** to users with error messages
- Use **TypeScript** for type safety
- **Reset forms** after successful submission
