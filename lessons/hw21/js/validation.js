const validationRules = [
	{
		attribute: 'selected',
		isValid: radioInput => radioInput.checked,
		errMsg: (label) => `Please ${label.textContent.toLowerCase()}`,
		targetErrEl: (targetErrEl) => Boolean(targetErrEl.parentElement.querySelector('label[for="payment_method"]'))
	},
	{
		attribute: 'letters',
		isValid: input => /^[a-zA-Z]+$/.test(input.value.trim()),
		errMsg: (input, label) => `${label.textContent} should contains only letters`
	},
	{
		attribute: 'minLength',
		isValid: input => input.value.length >= parseInt(input.minLength),
		errMsg: (input, label) => `${label.textContent} should have more then ${input.minLength} chars`
	},
	{
		attribute: 'customMaxLength',
		isValid: input => input.value.length < parseInt(input.getAttribute('customMaxLength')),
		errMsg: (input, label) => `${label.textContent} should have less then ${input.getAttribute('customMaxLength')} chars`
	},
	{
		attribute: 'numeric',
		isValid: input => /^\d+$/.test(input.value.trim()),
		errMsg: (input, label) => `${label.textContent} should contains only number (1 - 9)`
	},
	{
		attribute: 'required',
		isValid: input => input.value.trim() !== '',
		errMsg: (input, label) => `${label.textContent} is required`
	}
]

export const validateForm = (formSelector) => {
	return new Promise((resolve) => {
		const formBlock = document.querySelector(formSelector)

		const validateFields = blockGroup => {
			const label = blockGroup.querySelector('label')
			const inputs = blockGroup.querySelectorAll('input[type=text], select, textarea')
			const radios = blockGroup.querySelectorAll('input[type=radio]')
			const err = blockGroup.querySelector('.error')

			let isValidated = false

			let showForRuleNotRadio = false
			inputs.forEach(input => {
				validationRules.forEach(option => {
					if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
						err.textContent = option.errMsg(input, label)
						showForRuleNotRadio = true
					}
				})
			})

			let showErrorRuleRadio = false
			const radioValidationRule = validationRules.find(rule => rule.attribute == 'selected')
			if (radioValidationRule) {
				const selectedRadio = Array.from(radios).some(radio => radioValidationRule.isValid(radio));
				if (!selectedRadio && radioValidationRule.targetErrEl(err)) {
					err.textContent = radioValidationRule.errMsg(label);
					showErrorRuleRadio = true
				}
			}

			if (!showErrorRuleRadio && !showForRuleNotRadio) {
				err.textContent = ''
				isValidated = true
			}

			return isValidated
		}

		const validateAll = blocksToValidate => {
			const blocks = Array.from(blocksToValidate.querySelectorAll('.to_validate'))
			let bag = []
			for (let i = 0; i < blocks.length; i++) {
				if (validateFields(blocks[i])) {
					bag.push(true)
				} else {
					bag.push(false)
				}
			}
			return bag.every(block => block)
		}

		formBlock.setAttribute('novalidate', '')

		formBlock.addEventListener('submit', event => {
			event.preventDefault()
			const isFormValid = validateAll(formBlock)
			if (isFormValid) {
				resolve(formBlock)
			}
		})
	});
}
