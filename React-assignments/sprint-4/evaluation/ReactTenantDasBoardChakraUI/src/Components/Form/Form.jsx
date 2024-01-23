import { Button, Checkbox, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const initialState={
		name: "",
		ownerName: "",
		address: "",
		areaCode: "",
		rent: "",
		isBachelorAllowed: false,
		isMarriedAllowed: false,
}



export default function Form() {
	// TODO: Remove below const and instead import them from chakra
	// const Button = () => <div />;
	// const Checkbox = () => <div />;
	// const FormControl = () => <div />;
	// const FormLabel = () => <div />;
	// const Input = () => <div />;
	const [formData,setFormData] = useState(initialState);

	return (
		<div className="addHouseContainer">
			<form className="form">
				<FormControl>
					<Stack spacing={3}>
						<Input
							focusBorderColor={"lime"}
							className="name"
							placeholder="Name"
						/>
						<Input
							focusBorderColor={"lime"}
							className="ownerName"
							placeholder="Owners name"
						/>
						<Input
							focusBorderColor={"lime"}
							className="address"
							placeholder="Address"
						/>
						<Input
							focusBorderColor={"lime"}
							className="areaCode"
							placeholder="Area code"
						/>
						<Input
							focusBorderColor={"lime"}
							className="rent"
							placeholder="Rent"
							type="number"
						/>
						<Checkbox colorScheme={"green"} className="married">
							<FormLabel>Married Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Checkbox colorScheme={"green"} className="bachelor">
							<FormLabel>Bachelor Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Button colorScheme={"green"} className="submitBtn">
							Submit
						</Button>
					</Stack>
				</FormControl>
			</form>
		</div>
	);
}
