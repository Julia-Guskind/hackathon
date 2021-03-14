// google api
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import './foo.css';
import './FAQ.css';

// import './FAQ.css';
import AccItem from './accordian.js';




class FAQ extends Component {

  render () {
        return (

  <div class="accordion" id="accordionExample">
  <div id="faqs" className="title">FAQs</div>


  <AccItem id="one" target="#one" title="Who can use Husky Zoom bikes?" body="
  Anyone! UConn students with a Husky One card can directly link their card funds (points or huskybucks) to Husky Zoom. Any resident can also put money on a Husky Zoom card to use to lock and unlock the bike. This card works similar to a credit card. No cash accepted, since there is no way to track how long the bike was taken out for. "> </AccItem>

  <AccItem id="two" target="#two" title="How much are Husky Zoom bikes to use?" body="
  Your charge to use Husky Zoom bikes are based on the total accumulated time you have had the biked checked out for each semester. Checked out time is from when you tap your card to unlock the bike to when you tap the card top lock it to a dock. Residents who use a husky onecard pay monthly or can pay a yearly fee for unlimited 2-hour rides. Charge is $1 an hour- so if you ride an hour a day (actual riding time), 5 times a week, you pay $5 a week."> </AccItem>

  <AccItem id="three" target="#three" title="Why would I rent one?" body="Husky Zoom is designed to help you get from place to place quickly without having to wait for the bus or walk. You can also use these bikes to access Storrs center, other stores around, off campus housing, and surrounding towns. Explore the gorgeous area of Eastern CT and get some exercise while doing it!"> </AccItem>

  <AccItem id="four" target="#four" title="Do I have to return the bike to the same dock I got it from?" body="No! Any dock around the UConn campus or Storrs area can be used. If all bike spots are full, then there will be another within a half mile to use. Docks, especially those in the center of campus, will have an expanded number of racks to minimize the chance of this occurring."> </AccItem>

  
  <AccItem id="five" target="#five" title="What about winter?" body="You can still use these bikes! They are designed to repel salt and sand from the chain, and the docks have bus stop-like “roofs” over them, so rain or snow has minimal impact on the bikes. Wear a coat!"> </AccItem>

  <AccItem id="six" target="#six" title="How do I know where to find a bike?" 
  body="There is a Husky Zoom app and website that shows where each dock is and how many bikes are currently available on each dock. If your nearest dock is empty, you can find another one close by. Email huskyzoom@gmail.com with any concerns."> </AccItem>

  <AccItem id="seven" target="#seven" title="What if I break down?" 
  body="If you’re on campus, bring your bike to UConn Rec. You will not be charged for regular wear and tear. You may be charged for serious damage. If you are way off campus, you may request a pickup from a UConn vehicle or can call a service like AAA. You may be charged."> </AccItem>

  <AccItem id="eight" target="#eight" title="What if my bike is lost or stolen?" 
  body="You are not responsible for a stolen bike if it was stolen after you tapped your card to lock the bike to the rack. If your bike is stolen from a non Husky Zoom bike rack or is lost, you are responsible for the full cost of the bike."> </AccItem>

  <AccItem id="nine" target="#nine" title="Any accessories available?" 
  body="UConn rec will rent out helmets, head and tail lights, and bike locks (in case you bike somewhere far where there’s no dock) for the whole semester. "> </AccItem>

  <AccItem id="ten" target="#ten" title="Is maintenance available?" 
  body="Yes. General tuneups and minor fixes are included with the bike rental fee. If you notice anything off about your bike, park it at UConn Rec’s dock and let the adventure center know. All bikes parked at this dock are assumed to be in need of maintenance. Your card will be tagged when you park it here and if any serious damage occurred, you may be charged."> </AccItem>

  <AccItem id="eleven" target="#eleven" title="Can I go far off campus?" 
  body="Of course! If you are able, you can go as far as you want, but these bikes are designed for more city-like, commuter travel. The hills of CT might be challenging but are rewarding to go down!"> </AccItem>

</div>
        )
    }
}

export default FAQ;
