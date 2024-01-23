import { Button, Checkbox, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";


const initialData={
	name: "",
	ownerName: "",
	address: "",
	areaCode: "",
	rent: "",
	isBachelorAllowed: false,
	isMarriedAllowed: false,
}

export default function Form({btn,setBtn}) {

	const [formData,setFormData]=useState(initialData);

	const handleChange=(e)=>{
		setFormData({...formData,[e.target.name]:e.target.value})
	}
	// console.log(formData);
	const handleSubmit=()=>{
		axios({
			method:"post",
			baseURL:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
			url:`/houses`,
			data:formData,
		}).then(()=>{
			console.log("Data Added");
			setBtn(!btn);
		})
	}
	

	return (
		<div className="addHouseContainer">
			<form className="form" onSubmit={handleSubmit}>
				<FormControl>
					<Stack spacing={3}>
						<Input
							focusBorderColor={"lime"}
							className="name"
							placeholder="Name"
							name="name"
							onChange={handleChange}
						/>
						<Input
							focusBorderColor={"lime"}
							className="ownerName"
							placeholder="Owners name"
							name="ownerName"
							onChange={handleChange}
						/>
						<Input
							focusBorderColor={"lime"}
							className="address"
							placeholder="Address"
							name="address"
							onChange={handleChange}
						/>
						<Input
							focusBorderColor={"lime"}
							className="areaCode"
							placeholder="Area code"
							name="areaCode"
							onChange={handleChange}
						/>
						<Input
							focusBorderColor={"lime"}
							className="rent"
							placeholder="Rent"
							type="number"
							name="rent"
							onChange={handleChange}
						/>
						<Checkbox colorScheme={"green"} className="married" name="isMarriedAllowed"
							onChange={(e)=>setFormData({...formData,isMarriedAllowed:e.target.checked})}>
							<FormLabel>Married Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Checkbox colorScheme={"green"} className="bachelor" name="isBachelorAllowed"
							onChange={(e)=>setFormData({...formData,isBachelorAllowed:e.target.checked})}>
							<FormLabel>Bachelor Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Button colorScheme={"green"} className="submitBtn" onClick={handleSubmit}>
							Submit
						</Button>
					</Stack>
				</FormControl>
			</form>
		</div>
	);
}
