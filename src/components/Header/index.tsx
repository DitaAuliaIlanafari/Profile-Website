import { Link, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      paddingX={{ base: "", md: "" }}
      paddingY={{ base: "10px", md: "0px" }}
      alignItems={{ base: "center" }}
      justifyContent={{ base: "center" }}
      bgColor={"black"}
    >
      <Link
        href="#home"
        color={"white"}
        px={3}
        margin={{ base: "6px", md: "16px" }}
        fontSize={{ base: "12px", md: "16px" }}
      >
        Home
      </Link>
      <Link
        href="#about"
        color={"white"}
        px={3}
        margin={{ base: "6px", md: "16px" }}
        fontSize={{ base: "12px", md: "16px" }}
      >
        About
      </Link>
      <Link
        href="#portofolio"
        color={"white"}
        px={3}
        margin={{ base: "6px", md: "16px" }}
        fontSize={{ base: "12px", md: "16px" }}
      >
        Portofolio
      </Link>
      <Link
        href="#contact"
        color={"white"}
        px={3}
        margin={{ base: "6px", md: "16px" }}
        fontSize={{ base: "12px", md: "16px" }}
      >
        Contact
      </Link>
    </Flex>
  );
}
