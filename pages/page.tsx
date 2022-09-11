import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import ColormodeToggle from "@/colormodeToggle";
import Link from "next/link";
import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";
import { Input } from "@chakra-ui/react";

const Home: NextPage = () => {
	const [value, setValue] = useState("");
	const [debouncedValue] = useDebouncedValue(value, 500);

	return (
		<Container maxW="4xl" p={4}>
			<Flex alignItems="center" justifyContent="space-between" mt={6}>
				<Heading>Page</Heading>
				<ColormodeToggle />
			</Flex>

			<Input value={value} onChange={(event) => setValue(event.target.value)} />
			<Text>Debounced Value: {debouncedValue}</Text>

			<Link href="/">
				<a>Home</a>
			</Link>
		</Container>
	);
};

export default Home;
