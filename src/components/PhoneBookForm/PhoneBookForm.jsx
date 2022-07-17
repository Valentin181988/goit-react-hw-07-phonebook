import { useCreateContactMutation } from "../../redux/contactSlice";
import { Spinner } from "../spinner";
import { Form, Label, Input, SubmitButton } from "./PhoneBookForm.styled";

export const PhoneBookForm = () => {
    const [createContact, {isLoading}] = useCreateContactMutation();

    

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.currentTarget.elements.name.value;
        const number = e.currentTarget.elements.number.value;

        const contact = {
          name,
          number,
        };
        
        createContact(contact);
        e.currentTarget.reset();
    };

    return(
        <>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Label>Name</Label>
               <Input type="text" name="name"/>
            <Label>Number</Label>
               <Input type="text" name="number"/>
            <SubmitButton type="submit" disabled={isLoading}>
                {isLoading && <Spinner size={10} />}
                Create contact
            </SubmitButton>
          </Form> 
        </>
    );
};