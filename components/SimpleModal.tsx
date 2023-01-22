import {
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export const SimpleModal = (props: {
  isOpen: boolean;
  onClose: any;
  headerText: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={"md"} isCentered>
      <ModalOverlay />
      <ModalContent
        style={{
          padding: "24px",
          borderRadius: "6px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ModalBody>
          <Center>
            <Text className="logo mb-8"> {props.headerText} </Text>
          </Center>
          <Text
            className="copy"
            style={{
              textAlign: "center",
            }}
          >
            {props.description}
          </Text>
          {props.children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
