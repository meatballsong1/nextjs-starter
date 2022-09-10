import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Counter from "@/counter";
import ColormodeToggle from "@/colormodeToggle";

const Home: NextPage = () => {
	return (
		<Container maxW="4xl" p={4}>
			<Flex alignItems="center" justifyContent="space-between" mt={6}>
				<Heading>Next.js + Chakra UI Starter</Heading>
				<ColormodeToggle />
			</Flex>

			<Text my={6}>Next.js starter for NextJS apps.</Text>

			<Counter />
		</Container>
	);
};

export default Home;
