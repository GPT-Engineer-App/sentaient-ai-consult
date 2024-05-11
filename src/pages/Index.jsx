import { Box, Container, Flex, Heading, Image, Stack, Text, VStack, Button, Link } from "@chakra-ui/react";
import { FaRocket, FaBrain, FaSchool, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="full" p={0} m={0}>
      <Flex direction="column" align="center" justify="center">
        {/* Hero Section */}
        <Box bg="black" color="white" w="full" h="100vh" textAlign="center" position="relative">
          <Image src="https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGZ1dHVyaXN0aWN8ZW58MHx8fHwxNzE1NDY0Mjg0fDA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" w="full" h="full" position="absolute" zIndex={-1} opacity={0.5} />
          <VStack spacing={4} position="relative" top="50%" transform="translateY(-50%)">
            <Heading as="h1" size="2xl" fontWeight="bold">
              sentAIent
            </Heading>
            <Text fontSize="xl" px={2}>
              Pioneering AI for Education, Consulting, Integration, and Data Analytics
            </Text>
            <Button colorScheme="blue" mt={4}>
              Discover More
            </Button>
          </VStack>
        </Box>

        {/* Services Section */}
        <Box w="full" py={10}>
          <VStack spacing={8}>
            <Heading as="h2" size="lg">
              Our Services
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="center">
              <ServiceCard icon={FaSchool} title="Education" description="Empowering through knowledge with AI-driven educational tools." />
              <ServiceCard icon={FaBrain} title="Consulting" description="Expert AI consulting to transform your business operations." />
              <ServiceCard icon={FaRocket} title="Integration" description="Seamless AI integration for efficient business processes." />
              <ServiceCard icon={FaChartLine} title="Data Analytics" description="Advanced analytics to drive your decision-making process." />
            </Stack>
          </VStack>
        </Box>

        {/* About Us Section */}
        <Box w="full" py={10} bg="gray.100">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              About Us
            </Heading>
            <Text px={8} textAlign="center">
              At sentAIent, we believe in leveraging the power of artificial intelligence to enhance every aspect of business and education. Our team of experts is dedicated to providing solutions that are not only innovative but also accessible to everyone.
            </Text>
            <Button colorScheme="blue">Learn More</Button>
          </VStack>
        </Box>

        {/* Footer */}
        <Box w="full" py={4} bg="black" color="white" textAlign="center">
          <Text>© 2023 sentAIent. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <VStack bg="white" p={4} borderRadius="md" boxShadow="md" minW="sm" spacing={4}>
      <IconComponent size="3em" />
      <Text fontWeight="bold">{title}</Text>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
