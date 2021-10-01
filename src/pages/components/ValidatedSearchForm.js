/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, InputGroup, Button } from 'react-bootstrap';

const ErrorMessageSpacer = () => <p className="error-message-replacer">Message Replacer</p>;

const ValidatedSearchForm = (props) => {
	const { label = null, rules, defaultValue, id = '', onSubmit } = props;
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		reset();
	}, [defaultValue]);

	return (
		<div className="d-flex flex-column w-100">
			<ErrorMessageSpacer />
			<div className="d-flex flex-row w-100">
				<Form.Group id={id} className="d-flex w-100" controlId="form.text">
					<InputGroup hasValidation>
						<div className="d-flex flex-column w-100">
							{label && <Form.Label className={errors.searchQuery && 'invalid'}>{label}</Form.Label>}
							<Form.Control
								type="text"
								defaultValue={defaultValue}
								placeholder="Enter a text to search"
								isInvalid={errors.searchQuery}
								{...register('searchQuery', rules)}
							/>
							{!errors.searchQuery && <ErrorMessageSpacer />}
							<Form.Control.Feedback type="invalid">Please enter a text to search</Form.Control.Feedback>
						</div>
					</InputGroup>
				</Form.Group>
				<Button variant="primary" onClick={handleSubmit(onSubmit)}>
					Search
				</Button>
			</div>
		</div>
	);
};

export default ValidatedSearchForm;
