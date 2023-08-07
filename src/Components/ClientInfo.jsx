import React from 'react';
import { Accordion, AccordionHeader, AccordionBody, AccordionList } from "@tremor/react";

function ClientInfo() {
  return (
    <div className="flex justify-center my-10 ">
      {/* Center the accordion horizontally */}
      <div className="w-3/4 md:2/3 "> {/* Set the accordion to 50% width */}
        <AccordionList className="">
          <Accordion>
            <AccordionHeader>What is Smilebooth360 ?</AccordionHeader>
            <AccordionBody>
            The Smile bit is ours 😉 but the 360 booth records high-quality video of your guests for several seconds while the camera revolves around them at a high framerate. The captured footage is then processed into a video that allows you to control the speed, selectively speeding up and slowing down certain parts. Additionally, the app offers the option to superimpose a static overlay of your choice, such as a logo, monogram, or any desired image.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>How can I pay ?</AccordionHeader>
            <AccordionBody>
            Through the payment link that will be sent to you after booking.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Where do you travel ?</AccordionHeader>
            <AccordionBody>
            We service across the UK.<br/>*Please Note* Additional charges may apply if you are over a 50 mile radius from our base location in Cambridgeshire.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Can the Booth go upstairs ?</AccordionHeader>
            <AccordionBody>
              Yes
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Can I hire the booth for less than four hours ?</AccordionHeader>
            <AccordionBody>
            Unfortunately not. We do require a minimum hire of two hours to host your event. 
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>What if I need the booth for more than two hours?</AccordionHeader>
            <AccordionBody>
            Not a problem, we charge an hourly rate of £50 for any additional hours. 
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Can I have the Smilebooth360 outdoors ?</AccordionHeader>
            <AccordionBody>
            Yes. But you will need to provide full cover for the photobooth and ensure protection from any weather interference. We would also need a flat surface for the booth to stand on.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Do you have public liability insurance ?</AccordionHeader>
            <AccordionBody>
            Yes. We have cover for £5M. A copy of the policy is available on request.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Do you require a deposit to confirm the booking ?</AccordionHeader>
            <AccordionBody>
            Yes. We require a 50% deposit to confirm the booking.
            </AccordionBody>
          </Accordion>
        </AccordionList>
      </div>
    </div>
  );
}

export default ClientInfo;