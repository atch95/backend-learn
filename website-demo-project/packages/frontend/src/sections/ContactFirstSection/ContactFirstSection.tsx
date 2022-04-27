import React from "react";
import { Global, css, useTheme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import ContactSvg from "./sv2.svg";

const ContactTitleBox = styled.div((props:any) => ({
    color: props.theme?.colors.portfolioTitle,
    fontSize: 70,
    textAlign: 'center',
    fontFamily: "Lato, sans-serif",
  }));

  const ContactContainer = styled.div((props:any) => ({
    width: '80%',
    margin: '56px auto',
    color:props.theme?.colors.cardBackground,
  }));
  const ContactInnerContainer = styled.div((props) => ({
    boxShadow: '-2px 0px 10px   grey',
  borderRadius: 5,
  display: 'flex',
  fontFamily: 'Lato", sans-serif',
  }));

  const ContactLeftInnerContainer = styled.div((props) => ({
    flexBasis: '60%',
  padding: '40px 60px',
  }));

  const InputRow = styled.div((props) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  }));

  interface InputGroupProps{
    alignment:"left"|"right",
  }


  const InputGroup = styled.div<InputGroupProps>((props) => ({
    
   
    display:"flex",
    alignContent:"right",
    alignItems:"right",
    width: "50%",
    flexFlow: "row",
    justifyContent: props.alignment === "right"? "end":"start",


  }));
  const ContactRightInnerContainer = styled.div((props) => ({
    flexBasis: '40%',
  padding: 40,
  backgroundColor: '#04aa6d',
  color: '#fff',
  borderRadius: 5,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  fontFamily: 'Lato", sans-serif',

  }));

  const ContactRightInnerContainerh1 = styled.h1((props) => ({
    color: '#3f3d56',
  fontWeight: 600,
  marginBottom: 30,
  fontFamily: "Lato, sans-serif",

  }));

  const ContactImg = styled.div(
    (props) => ({
        backgroundImage: `url(${ContactSvg})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 250,
        width: '100%',
    })
  );
  const ContactInput = styled.input(
    (props) => ({
        borderRadius: "5px",
        outline: "none",
        fontSize: "14px",
        "&:focus":{
          outlineWidth: 0,
        },
       width: "250px",
       height: "40px",
        paddingLeft: "10px",
        border: "1px solid rgba(32,32,32,0.2)",
        textAlign: "left",
        display:"flex",
        
    })
  );

  const ContactTextArea = styled.textarea(
    (props) => ({
        width:"100%",
        minHeight:"300px",
        border: "1px solid rgba(32,32,32,0.2)",
        outline: "none",
        fontSize: "14px",
        "&:focus":{
          outlineWidth: 0,
          
        },
        paddingLeft:"10px",
        textAlign: "left",
        resize: "vertical",

    })
  );

  const ContactLabel = styled.label(
    (props) => ({
      fontFamily: "Lato, sans-serif",
      color:"#3f3d56",
      marginRight: "10px",
      height: "40px",
      lineHeight: "40px",

    })
  );

  const ContactButton = styled.button(
    (props) => ({
      background: '#04aa6d',
      width: 100,
      border: 'none',
      outline: 'none',
      color: '#fff',
      height: 35,
      borderRadius: 5,
      marginTop: 10,
      boxShadow: '0px 0px 7px rgba(32, 32, 32, 0.2)',

    })
  );

export const ContactFirstSection = (props: any) => {
    return (
      <div>
<ContactTitleBox>Contact</ContactTitleBox>
<ContactContainer>
    <ContactInnerContainer>
        <ContactLeftInnerContainer>
<form>
<InputRow>
<InputGroup alignment= "left">
<ContactLabel>Name</ContactLabel>
<ContactInput type= "text"placeholder="Johnny Perez  " />
</InputGroup>
<InputGroup alignment= "right">
<ContactLabel>Phone</ContactLabel>
<ContactInput type="text" placeholder="+52 123456789 " />
</InputGroup>
</InputRow>
<ContactTextArea  placeholder="Your Message"></ContactTextArea>
<ContactButton>SEND</ContactButton>

</form>
</ContactLeftInnerContainer>
<ContactRightInnerContainer>
    <ContactRightInnerContainerh1>
        <h1>Reach us</h1>
        <ContactImg></ContactImg>
    </ContactRightInnerContainerh1>
</ContactRightInnerContainer>
    </ContactInnerContainer>
</ContactContainer>
      </div>
        
    );
  };