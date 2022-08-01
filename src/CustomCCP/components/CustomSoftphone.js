/* eslint-disable no-undef */
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'amazon-connect-streams';
import { SimpleInput } from './core/index'
import { SoftphoneButton } from './SoftphoneButtons';
import styled from 'styled-components';
import { SOFTPHONE_ACTIONS, LABEL } from './constants/global';
import { default as StreamsService } from './services/StreamsService';

const InfoBanner = styled.div`
  height: 50px;
  background-color: ${props => props.theme.palette.mercury}
  width: 100%;
`;

const CustomFrameWrapper = styled.div`
  display: flex;
  order: 3;
  background: ${props => props.theme.palette.lightGray};
  border: 0.5px solid ${props => props.theme.palette.gray};
  border-left: 0;
  border-right: 0;
  width: 400px;
  height: 600px;
  flex-direction: column;
`;

function CustomSoftphone() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agent, setAgent] = useState(null);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [contact, setContact] = useState(null);
  // console.log("\n\n\n AGENT ", connect.agent);
  // setTimeout(() => {

  //     connect.agent(function(agent) {
  //       var config = agent.getConfiguration();
  //       console.log("here is your configuration: " + JSON.stringify(config));
  //       setAgent(agent);
  //     });
  //     let contacts = agent.getContacts();
  //     console.log("====\n\n Contacts? \n-------", contacts);
  //   }, 5000)
  // connect.agent(function(agent) { 
  //   console.log("my agent", agent); 
  //   setAgent(agent) 
  //   connect.contact(function(contact) {
  //     console.log("Got contact? ", contact)
  //     setShowContactDetails(true);
  //     setContact(contact);
  //   })

  // });
  // connect.agent(function(agent) { 
  //   console.log("my agent", agent); 
  //   setAgent(agent) 
  //   //all the logic
  // });
  useEffect(() => {
    setTimeout(() => {
      console.log("Waited here");
      connect.agent(function(agent) { 
        console.log("my agent", agent); 
        setAgent(agent) 
      });
      connect.core.onInitialized(function() { console.log("Initialized") });
      // connect.core.getEventBus().subscribe(connect.ContactEvents.REFRESH, (params) => {
      //   // handleTransferToStore(params);
      //   setShowContactDetails(true);
      //   console.log("====\n\n Got here!\n-------");
        
      // });
      
      connect.contact(function(contact) {
        console.log("Got contact? ", contact)
        setShowContactDetails(true);
        setContact(contact);
      })
      connect.core.getEventBus().subscribe(connect.ContactEvents.INCOMING, () => {
        console.log("INCOMING! ")
       });
     
       connect.core.getEventBus().subscribe(connect.ContactEvents.INIT, () => {
         console.log("INIT CONTACT! ")
        });

        connect.core.getEventBus().subscribe(connect.ContactEvents.CONNECTING, () => {
          console.log("CONNECTING CONTACT! ")
         });
      }, 10000)
      
      
  }, [])

  // setTimeout(() => {

  //   let contacts = agent.getContacts();
  //   console.log("====\n\n Contacts? \n-------", contacts);
  // }, 15000)
  
  // let agent = StreamsService.getAgent();
  // connect.core.onInitialized(function() { console.log("Initialized") })
  // connect.agent((agent) => {
  //     console.log("Found an agent!", agent)
  //   });
  // connect.contact(function(contact) { console.log("Here goes contact! ", contact) });
  // useEffect(() => {
  //   // connect.core.getEventBus().subscribe(connect.ContactEvents.REFRESH, (params) => {
  //   //   // handleTransferToStore(params);
  //   //   setShowContactDetails(true);
  //   //   console.log(showContactDetails);
  //   // });

  //   // connect.agent((agent) => {
  //   //   setAgent(agent);
  //   // });

  //   // connect.core.getEventBus().subscribe(connect.AgentEvents.INIT, (params) => {
  //   //   window.customik = [params];
  //   // });
  //   // connect.contact((c) => {
  //   //   window.ccpContact = c;
  //   //   setContact(c);
  //   //   c.onConnecting(() => {
  //   //     setShowContactDetails(true);
  //   //   });
  //   // });
  //   console.log("HERE ", connect.core.getEventBus());
  //   // connect.core.getEventBus().subscribe(connect.ContactEvents.REFRESH, (params) => {
  //   //   // handleTransferToStore(params);
  //   //   setShowContactDetails(true);
  //   // });
  //   // connect.core.getEventBus().subscribe(connect.ContactEvents.ENDED, () => {
  //   //   setTimeout(() => {
  //   //     setShowNoSalesPopup(true);
  //   //   }, 1000);
  //   // });
  //   // connect.core.getEventBus().subscribe(connect.ContactEvents.DESTROYED, () => {
  //   //   const body = {
  //   //     agentLog: connect.rootLogger._rolledLogs.concat(connect.rootLogger._logs),
  //   //     contactId: ccpContact.contactId,
  //   //   };
  //   //   axios.post(
  //   //     `${url}/collectAgentLogs`,
  //   //     body,
  //   //     {
  //   //       headers: {
  //   //         token,
  //   //       },
  //   //     },
  //   //   ).then((response) => response)
  //   //     .catch((error) => error);
  //   //   connect.rootLogger._logs = [];
  //   //   setShowContactDetails(false);
  //   //   setContact();
  //   // });
  // }, [showContactDetails]);

  // ACCEPTED: "contact::accepted"
  // ACW: "contact::acw"
  // CONNECTED: "contact::connected"
  // CONNECTING: "contact::connecting"
  // DESTROYED: "contact::destroyed"
  // ENDED: "contact::ended"
  // ERROR: "contact::error"
  // INCOMING: "contact::incoming"
  // INIT: "contact::init"
  // MISSED: "contact::missed"
  // PENDING: "contact::pending"
  // REFRESH: "contact::refresh"
  // VIEW: "contact::view"


  // setTimeout(() => {
  //   connect.core.getEventBus().subscribe(connect.ContactEvents.INCOMING, () => {
  //    console.log("INCOMING! ")
  //   });
  
  //   connect.core.getEventBus().subscribe(connect.ContactEvents.INIT, () => {
  //     console.log("INIT CONTACT! ")
  //    });
  // }, 10000)

  const handleInputChange = (e) => {
    console.log(e.currentTarget.value);
    setPhoneNumber(e.currentTarget.value)
    console.log("Action taken");
  }

  const getDetails = () => {
    let c = agent.getContacts()[0].getInitialConnection().getEndpoint();
    console.log(c)
    return c.phoneNumber;
  }

  const handleOutboundCall = () => {
    const validNumber = isValidPhoneNumber(phoneNumber)
    if (validNumber) {
      StreamsService.dial(phoneNumber);
    } else {
      StreamsService.getAgent();
      console.log(connect.ContactEvents)
      console.log("It is not a valid number: ", phoneNumber);
    }
  }

  const isValidPhoneNumber = (number) => {
    return number.match(/^\+?\d{10}$/);
  }

  return (
    <CustomFrameWrapper className="container">
      {showContactDetails && <InfoBanner>{getDetails()}</InfoBanner>}
      <SimpleInput
        label={LABEL.PHONE_NUMBER}
        id="phone-input"
        value={phoneNumber}
        name="name"
        onChange={handleInputChange}
        required={true}
        aria-required
        placeholder={'Enter phone number'}
      />

      <SoftphoneButton onClick={handleOutboundCall} >Call</SoftphoneButton>
    </CustomFrameWrapper>
  );

}

export default withRouter(CustomSoftphone);