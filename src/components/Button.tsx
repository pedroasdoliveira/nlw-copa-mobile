import { Button, Text, IButtonProps } from "native-base";

interface ButtonProp extends IButtonProps {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
}

const ButtonComponent = ({ title, type = "PRIMARY", ...rest }: ButtonProp) => {
  return (
    <Button
      w="full"
      h={14}
      rounded="sm"
      fontSize="sm"
      textTransform="uppercase"
      bg={type === "SECONDARY" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "SECONDARY" ? "red.600" : "yellow.600",
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === "SECONDARY" ? "white" : "black"}
      >
        {title}
      </Text>
    </Button>
  );
};

export default ButtonComponent;
