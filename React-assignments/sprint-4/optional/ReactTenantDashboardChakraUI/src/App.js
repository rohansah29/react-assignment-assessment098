import { useState } from "react";
import "./App.css";
import { Button, Center, Stack } from "@chakra-ui/react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";

function App() {
	// TODO: Remove below const and instead import them from chakra
	// const Button = () => <div />;
	// const Stack = () => <div />;
	// const Center = () => <div />;
	const [btn,setBtn]=useState(false);

	return (
		<Stack spacing={5} p={5} className="App">
			<Center>
				<Button colorScheme={"messenger"} width="150px" className="toggleForm" onClick={()=>setBtn(!btn)}>
					{/* Toggle button between form and dashboard */ btn?"View Dashboard":"View Form"}
				</Button>
			</Center>
			{/* on toggle conditions show component here */ btn?<Form btn={btn} setBtn={setBtn} />:<Dashboard/>}
		</Stack>
	);
}

export default App;
