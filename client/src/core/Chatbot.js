import React from 'react';
import { ConversationalForm } from 'conversational-form';
import MaterialAppBar from "./Menu"
import "./Chatbot.css"

export default class Chatbot extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [

      {
        tag: 'radio',
        name: 'mode_of_language',
        'cf-questions': 'Select Language' ,
        children: [
          {
            tag: 'input',
            type: 'radio',
            value: 'English',
            name: 'mode_of_language',
            text: 'English',
            'cf-label':
              'English',
          },
          {
            tag: 'input',
            type: 'radio',
            value: 'Hindi',
            name: 'mode_of_language',
            text: 'Hindi',
            'cf-label': 'hindi',
          },
        ],
      },
      {
        tag: 'input',
        type: 'text',
        name: 'firstname',
        'cf-questions': 'Hello,Welcome to Shoppy,Lets start with your name first',
      },
      {
        tag: 'radio',
        name: 'mode_of_travel',
        'cf-questions': 'What type of products do you wish to see on Shoppy' ,
        children: [
          {
            tag: 'input',
            type: 'radio',
            value: 'Electronics',
            name: 'mode_of_travel',
            text: 'By train',
            'cf-label':
              'Electronics',
          },
          {
            tag: 'input',
            type: 'radio',
            value: 'Apparel',
            name: 'mode_of_travel',
            text: 'By bus',
            'cf-label': 'Apparel',
          },
          {
            tag: 'input',
            type: 'radio',
            value: 'New businesses',
            name: 'mode_of_travel',
            text: 'By train',
            'cf-label':
              'New businesses',
          },
        ],
      },
    ];

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
      },
      tags: this.formFields,
      context: [
        {
          text: 'Welcome to our travel booking service! Please answer a few questions to help us plan your trip.',
        },
      ],
    });
    this.elem.appendChild(this.cf.el);
    this.cf.addRobotChatResponse(
      'Hello! Welcome to our Shopping website. Please answer a few questions to help us provide best solutions.'
    );
  }

  submitCallback() {
    const formDataSerialized = this.cf.getFormData(true);
    console.log('Form data:', formDataSerialized);

    const { firstname, lastname, mode_of_travel } = formDataSerialized;
    let response = `Thank you, ${firstname}.`;

    if (mode_of_travel == 'Electronics') {
      response += `As an ecommerce website, we sell a variety of products to our customers. Our product catalog includes everything from clothing and accessories to electronics and household appliances. We strive to provide a diverse selection of high-quality products at competitive prices to meet the needs and preferences of our customers.

      In addition to our products, we also offer a range of services to enhance our customers' shopping experience, including fast and reliable shipping, easy returns and exchanges, and attentive customer support. We value our customers and aim to provide the best possible experience for them throughout the entire shopping process.
      
      If you have any specific product or service inquiries, please feel free to ask and we'll be happy to help you in any way we can.`;
    }
    if (mode_of_travel == 'Apparel') {
      response += 'We have some cool cloths coming up soon';
    }
    if (mode_of_travel == 'New businesses') {
      response += 'We are working on a new platform for new businesses to give them the limelight they deserve';
    }
    // <cf-robot-message cf-questions="Contact us on shoppy@gmail.com"></cf-robot-message>
    this.cf.addRobotChatResponse(response);
  }

  render() {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <div style={{}}>
        <MaterialAppBar/>
      </div>
      <div style={{marginTop: "auto", height: "20%"}}>
        <div style={{}} ref={(ref) => (this.elem = ref)} />
      </div>
      </div>
    );
  }
}