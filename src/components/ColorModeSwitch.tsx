import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode(); //calling the hook useColorMode
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} /> //
      initializing switch mode
      <Text whiteSpace="nowrap"> Change Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
