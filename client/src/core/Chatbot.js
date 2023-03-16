import React from 'react';
import ***REMOVED*** ConversationalForm ***REMOVED***from 'conversational-form';
import "./Chatbot.css"

export default class Chatbot extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props);
    this.formFields = [
      ***REMOVED***
        tag: 'input',
        type: 'text',
        name: 'firstname',
        'cf-questions': 'What is your First Name?',
      },
      ***REMOVED***
        tag: 'input',
        type: 'text',
        name: 'lastname',
        'cf-questions': 'What is your Last Name?',
      },
      ***REMOVED***
        tag: 'radio',
        name: 'mode_of_travel',
        'cf-questions': 'Do you have any of the following questions ',
        children: [
          ***REMOVED***
            tag: 'input',
            type: 'radio',
            value: 'flight',
            name: 'mode_of_travel',
            text: 'By flight',
            'cf-label': 'What do you sell ?',
          },
          ***REMOVED***
            tag: 'input',
            type: 'radio',
            value: 'train',
            name: 'mode_of_travel',
            text: 'By train',
            'cf-label':
              'How can I contact customer support if I have a problem with my booking?',
          },
          ***REMOVED***
            tag: 'input',
            type: 'radio',
            value: 'bus',
            name: 'mode_of_travel',
            text: 'By bus',
            'cf-label': 'What is cost of services that you offer?',
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
    let response = `Thank you, $***REMOVED***firstname***REMOVED***$***REMOVED***lastname}.`;

    if (mode_of_travel == 'flight') ***REMOVED***
      response += `As an ecommerce website, we sell a variety of products to our customers. Our product catalog includes everything from clothing and accessories to electronics and household appliances. We strive to provide a diverse selection of high-quality products at competitive prices to meet the needs and preferences of our customers.

      In addition to our products, we also offer a range of services to enhance our customers' shopping experience, including fast and reliable shipping, easy returns and exchanges, and attentive customer support. We value our customers and aim to provide the best possible experience for them throughout the entire shopping process.
      
      If you have any specific product or service inquiries, please feel free to ask and we'll be happy to help you in any way we can.`;
    }
    if (mode_of_travel == 'train') ***REMOVED***
      response += 'you can send us email at example.example.com';
    }
    if (mode_of_travel == 'bus') ***REMOVED***
      response += 'we provide our services absolutly free of cost .';
    }

    this.cf.addRobotChatResponse(response);
  }

  render() ***REMOVED***
    return (
      <div>
        <div ref=***REMOVED***(ref) => (this.elem = ref)***REMOVED***/>
      </div>
    );
  }
}