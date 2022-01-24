import styled from "styled-components";
import ContactComponent from "../../components/ContactComponent";
import CustomCursor from "../../components/CustomCursor";

const Container = styled.div`

`

function Contact() {
    return(
        <Container id="top">
            <CustomCursor />
            <ContactComponent />
        </Container>
    )
}

export default Contact;