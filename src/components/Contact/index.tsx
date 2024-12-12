import { Button, Flex, Fieldset, Input, Stack, Link } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";

import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <div id="contact">
      <Flex justify="center" padding={5}>
        <Fieldset.Root
          fontFamily="Sora"
          size="lg"
          maxW="lg"
          bgColor="white"
          padding={10}
          border={"1px solid black"}
          borderRadius={25}
        >
          <Stack>
            <Fieldset.Legend
              fontSize={{ base: "20px", md: "24px" }}
              color="indigo"
            >
              Let's Work Together
            </Fieldset.Legend>
            <Fieldset.HelperText>
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </Fieldset.HelperText>
          </Stack>
          <br />
          <Fieldset.Content>
            <Field label="Name">
              <Input name="name" />
            </Field>

            <Field label="Email address">
              <Input name="email" type="email" />
            </Field>

            <Field label="--Please select an option--">
              <NativeSelectRoot>
                <NativeSelectField
                  name="--Please select an option--"
                  items={["Web Development", "Front-End", "Back-end"]}
                />
              </NativeSelectRoot>
            </Field>
          </Fieldset.Content>

          <Button marginTop={10} type="button" alignSelf="flex-start">
            Contact me
          </Button>
        </Fieldset.Root>
      </Flex>
      <Flex justify="center">
        <Link
          marginLeft={5}
          href="https://www.linkedin.com"
          _hover={{ borderColor: "white" }}
        >
          <SlSocialLinkedin size={20} color="black" />
        </Link>{" "}
        <Link
          marginLeft={5}
          href="https://chakra-ui.com"
          _hover={{ borderColor: "white" }}
        >
          <SlSocialTwitter size={20} color="black" />
        </Link>{" "}
        <Link
          marginLeft={5}
          href="https://github.com"
          _hover={{ borderColor: "white" }}
        >
          <SiGithub size={20} color="black" />
        </Link>{" "}
      </Flex>
    </div>
  );
}
