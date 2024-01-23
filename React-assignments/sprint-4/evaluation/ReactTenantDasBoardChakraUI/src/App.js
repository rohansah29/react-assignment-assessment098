import { Button, Center, Stack } from "@chakra-ui/react";
import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
	// TODO: Remove below const and instead import them from chakra
	// const Button = () => <div />;
	// const Stack = () => <div />;
	// const Center = () => <div />;
	const [toggle,setToggle] = useState(true);
	const handleButton=()=>{
		setToggle(!toggle);
	}

	return (
		<Stack spacing={5} p={5} className="App">
			<Center>
				<Button colorScheme={"messenger"} width="150px" className="toggleForm" onClick={handleButton}>
					{/* Toggle button between form and dashboard */
					toggle?"View Form":"View Dashboard"
					}
				</Button>
			</Center>
			{/* on toggle conditions show component here */
			toggle?
			<Dashboard/>:
			<Form/>
			}
		</Stack>
	);
}

export default App;
