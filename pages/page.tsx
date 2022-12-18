import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import ColormodeToggle from "@/colormodeToggle";

const Home: NextPage = () => {
	const [value, setValue] = useState("");

	return (
		<Container maxW="4xl" p={4}>
			<Flex alignItems="center" justifyContent="space-between" mt={6}>
				<Heading>Page</Heading>
				<ColormodeToggle />
			</Flex>

			<Input
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>

			<Text my={6}>This is a page. {value}</Text>

			<Link href="/">
				<a>Home</a>
			</Link>
		</Container>
	);
};

export default Home;
