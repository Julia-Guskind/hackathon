import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';

class FAQ extends Component {
    render () {
        return (
            <div classname="FAQs">
                <section class="FAQ_content">
                    <h2> FAQ <a id="FAQ"></a> </h2>
                    <p>
                    <h4 class="paragraphs"> Who can use Husky Zoom bikes?</h4>
                    Anyone! UConn students with a Husky One card can directly link 
                    their card funds (points or huskybucks) to Husky Zoom. 
                    Any resident can also put money on a Husky Zoom card to use to 
                    lock and unlock the bike. This card works similar to a credit card. 
                    No cash accepted, since there is no way to track how long the 
                    bike was taken out for.
                    <br /> 
                    <br /> 
                    <h4 class="paragraphs"> How much are Husky Zoom bikes to use? </h4>
                    Your charge to use Husky Zoom bikes are based on the total accumulated 
                    time you have had the biked checked out for each semester. 
                    Checked out time is from when you tap your card to unlock 
                    the bike to when you tap the card top lock it to a dock. Residents who 
                    use a husky onecard pay monthly or can pay a yearly fee for unlimited 2-hour 
                    rides. Charge is $1 an hour- so if you ride an hour a day (actual riding time),
                     5 times a week, you pay $5 a week.
                    <br />
                    <br />
                    <h4 class="paragraphs"> Why would I rent one?</h4>
                    Husky Zoom is designed to help you get from place to place quickly without having 
                    to wait for the bus or walk. You can also use these bikes to access Storrs center, 
                    other stores around, off campus housing, and surrounding towns. Explore the 
                    gorgeous area of Eastern CT and get some exercise while doing it!
                    <br /> 
                    <br />
                    <h4 class="paragraphs"> Do I have to return the bike to the same dock I got it from? </h4>
                    No! Any dock around the UConn campus or Storrs area can be used. If all bike spots
                     are full, then there will be another within a half mile to use. Docks, 
                     especially those in the center of campus, will have an expanded number of racks 
                     to minimize the chance of this occurring.
                    <br /> 
                    <br /> 
                    <h4 class="paragraphs"> What about winter?</h4>
                    You can still use these bikes! They are designed to repel salt and sand from the 
                    chain, and the docks have bus stop-like “roofs” over them, so rain or snow has 
                    minimal impact on the bikes. Wear a coat!
                    <br /> 
                    <br /> 
                    <h4 class="paragraphs"> How do I know where to find a bike?</h4>
                    There is a Husky Zoom app and website that shows where each dock is and how many 
                    bikes are currently available on each dock. If your nearest dock is empty, you can 
                    find another one close by. Email huskyzoom@gmail.com with any concerns.
                    <br /> 
                    <br /> 
                    <h4 class="paragraphs"> What if I break down?</h4>
                    If you’re on campus, bring your bike to UConn Rec. You will not be charged for regular 
                    wear and tear. You may be charged for serious damage. If you are way off campus, 
                    you may request a pickup from a UConn vehicle or can call a service like AAA. 
                    You may be charged.
                    <br /> 
                    <br /> 
                    <h4 class="paragraphs"> What if my bike is lost or stolen?</h4>
                    You are not responsible for a stolen bike if it was stolen after you tapped your card to lock the bike to the rack. If your bike is stolen from a non Husky Zoom bike rack or is lost, you are responsible for the full cost of the bike.
                    <br /> 
                    <br /> 
                    </p>
                </section>
            </div>
        )
    }
}

export default FAQ;