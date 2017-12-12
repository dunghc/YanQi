import React from 'react'
import PropTypes from 'prop-types'


const AuthFormInput = ({
  name,
  type,
  placeholder,
  onChange
}) => (
	<div className="AuthFormInput">
		<input
			name={name}
			autoComplete="false"
			required
			type={type}
			placeholder={placeholder}
      onChange={onChange}
		/>
		<label htmlFor={name}></label>
	</div>
)

SignUpForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default AuthFormInput
