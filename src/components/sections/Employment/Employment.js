import React from 'react'
import TitleAndDate from '../../TitleAndDate/TitleAndDate'
import List from '../../List/List'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function Employment() {
    return (
        <ShowcaseSection id="employment" title="Employment">
            <TitleAndDate institution="Nando’s" roleTitle="Grill Cook & Buddy Trainer" date="November 2020  - December 2021" />
            <List list={[
                "Trained new staff for their new positions according to high standards",
                "Grilled food according to the customers’ requests",
                "Proved myself to be adaptive by learning multiple positions such as Front Grill, Back Grill, Kitchen, Running Food and Running Drinks"]} />
            <TitleAndDate institution="Aldi" roleTitle="Store Assistant" date="September 2020 – October 2020" />
            <List list={[
                "Provided excellent customer service to aid the customers", 
                "Stocked the products quickly and accurately"]} />
            <TitleAndDate institution="The Radcliffe School" roleTitle="Painter and Decorator" date="July 2016 – August 2016" />
            <List list={["Worked as part of the team to paint and decorate the school premises"]} />
            <TitleAndDate institution="The Radcliffe School" roleTitle="Cleaner" date="June 2014 – May 2015" />
            <List list={["Ensured that the work was completed at a high standard within the specified time frame"]} />
            <TitleAndDate institution="The Spirit Pub Company" roleTitle="Waiter" date="December 2013 - May 2014" />
            <List list={[
                "Served customers and developed customer service skills", 
                "Worked as part of the team to ensure effective running of the shift"]} />
            <TitleAndDate institution="The ‘Loveliness’ Festival" roleTitle="Designer’s Assistant" date="June 2013 – July 2013" />
            <List list={[
                "Contributed to team discussions and suggested ideas for the decoration of the festival proving myself to be creative and unique", 
                "Provided excellent customer service by communicating to customers and identifying their needs"]} />
        </ShowcaseSection>
    )
}
