import React from 'react';
import ***REMOVED*** ConversationalForm ***REMOVED***from 'conversational-form';
import MaterialAppBar from "./Menu"
import "./Chatbot.css"

export default class Chatbot extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props);
    this.formFields = [

      ***REMOVED***
        tag: 'radio',
        name: 'mode_of_language',
        'cf-questions': 'Select Language' ,
        children: [
          ***REMOVED***
            tag: 'input',
            type: 'radio',
            value: 'English',
            name: 'mode_of_language',
            text: 'English',
            'cf-label':
              'English',
          },
          ***REMOVED***
            tag: 'input',
            type: 'radio',
            value: 'Hindi',
            name: 'mode_of_language',
            text: 'Hindi',
            'cf-label': 'hindi',
          },
        ],
      },
      ***REMOVED***
        tag: 'input',
        type: 'text',
        name: 'firstname',
        'cf-questions': 'Hello,Welcome to Shoppy,Lets start with your name first',
      },
      ***REMOVED***
        tag: 'radio',
        name: 'mode_of_travel',
        'cf-questions': 'What type of products do you wish to see on Shoppy' ,
        children: [
          ***REMOVED***
            tag: 'input',
            type: 'radio',
            value: 'Electronics',
            name: 'mode_of_travel',
            text: 'By train',
            'cf-label':
              'Electronics',
          },
          ***REMOVED***
            tag: 'input',
            type: 'radio',
            value: 'Apparel',
            name: 'mode_of_travel',
            text: 'By bus',
            'cf-label': 'Apparel',
          },
          ***REMOVED***
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

  componentDidMount() ***REMOVED***
    this.cf = ConversationalForm.startTheConversation(***REMOVED***
      options: ***REMOVED***
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
      },
      tags: this.formFields,
      context: [
        ***REMOVED***
          text: 'Welcome to our travel booking service! Please answer a few questions to help us plan your trip.',
        },
      ],
    });
    this.elem.appendChild(this.cf.el);
    this.cf.addRobotChatResponse(
      'Hello! Welcome to our Shopping website. Please answer a few questions to help us provide best solutions.'
    );
  }

  submitCallback() ***REMOVED***
    const formDataSerialized = this.cf.getFormData(true);
    console.log('Form data:', formDataSerialized);

    const ***REMOVED*** firstname, lastname, mode_of_travel ***REMOVED***= formDataSerialized;
    let response = `Thank you, $***REMOVED***firstname}.`;

    if (mode_of_travel == 'Electronics') ***REMOVED***
      response += `As an ecommerce website, we sell a variety of products to our customers. Our product catalog includes everything from clothing and accessories to electronics and household appliances. We strive to provide a diverse selection of high-quality products at competitive prices to meet the needs and preferences of our customers.

      In addition to our products, we also offer a range of services to enhance our customers' shopping experience, including fast and reliable shipping, easy returns and exchanges, and attentive customer support. We value our customers and aim to provide the best possible experience for them throughout the entire shopping process.
      
      If you have any specific product or service inquiries, please feel free to ask and we'll be happy to help you in any way we can.`;
    }
    if (mode_of_travel == 'Apparel') ***REMOVED***
      response += 'We have some cool cloths coming up soon';
    }
    if (mode_of_travel == 'New businesses') ***REMOVED***
      response += 'We are working on a new platform for new businesses to give them the limelight they deserve';
    }
    // <cf-robot-message cf-questions="Contact us on shoppy@gmail.com"></cf-robot-message>
    this.cf.addRobotChatResponse(response);
  }

  render() ***REMOVED***
    return (
      <div style=***REMOVED******REMOVED***
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <div style=***REMOVED******REMOVED***}}>
        <MaterialAppBar/>
      </div>
      <div style=***REMOVED******REMOVED***marginTop: "auto", height: "20%"}}>
        <div style=***REMOVED******REMOVED***}***REMOVED***ref=***REMOVED***(ref) => (this.elem = ref)***REMOVED***/>
      </div>
      </div>
    );
  }
}