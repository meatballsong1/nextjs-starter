import {
    Avatar,
    AvatarBadge,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";

import ColormodeToggle from "@/colormodeToggle";

const Home: NextPage = () => {
    return (
        <Container maxW="4xl" p={4}>
            <Flex alignItems="center" justifyContent="space-between" my={6}>
                <Heading></Heading>
                <ColormodeToggle />
            </Flex>

            <Grid templateColumns="repeat(10, 1fr)" gap={6}>
                <GridItem>
                    <Avatar src="https://discord.c99.nl/widget/theme-1/1234567890.png">
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                </GridItem>
                <GridItem>
                    <Text fontSize="2xl">
                        Username
                        <Text as="span" color="gray.400">
                            #6942
                        </Text>
                    </Text>

                    <Text color="gray.400">Playing Minecraft</Text>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Home;
