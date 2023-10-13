import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder="email@email.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="********" variant="filled" mb={3} type="password" />
        <Button colorScheme="teal">Login</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
