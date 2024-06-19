import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px solid #e2e8f0">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">World</Link>
          <Link href="#">Business</Link>
          <Link href="#">Tech</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Opinion</Link>
          <Link href="#">Life & Arts</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Top Stories */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="sm">Top Story 1</Heading>
                <Text>Summary of the top story 1...</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="sm">Top Story 2</Heading>
                <Text>Summary of the top story 2...</Text>
              </Box>
            </VStack>
          </Box>

          <Divider />

          {/* Latest News */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Latest News</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="sm">Latest News 1</Heading>
                <Text>Summary of the latest news 1...</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="sm">Latest News 2</Heading>
                <Text>Summary of the latest news 2...</Text>
              </Box>
            </VStack>
          </Box>

          <Divider />

          {/* Featured Articles */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Featured Articles</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="sm">Featured Article 1</Heading>
                <Text>Summary of the featured article 1...</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="sm">Featured Article 2</Heading>
                <Text>Summary of the featured article 2...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} borderTop="1px solid #e2e8f0">
        <HStack spacing={4} justifyContent="center">
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;