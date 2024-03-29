import React from 'react'
import TitleAndDate from '../../TitleAndDate/TitleAndDate'
import List from '../../List/List'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function Employment() {
    return (
        <ShowcaseSection id="employment" title="Employment">
            <TitleAndDate institution="LiveLogic" roleTitle="Front End Developer" date="December 2022 - Present" />
            <List list={[
                "Working as part of a team to develop Vue.js and Laravel web applications", "Developing eLearning courses according to customer requirements"]} />

            <TitleAndDate institution="Freelance" roleTitle="Web Developer" date="June 2022 - Present" />
                <List list={[[
                "Designed, developed and currently maintaining an online store (", <a href='https://kristinamayasewing.co.uk/'>https://kristinamayasewing.co.uk</a>, ") developed using WordPress with WooCommerce."]]} />

            <TitleAndDate institution="Nando’s" roleTitle="Buddy Trainer & Waiter & Grill Cook" date="November 2020  - December 2021" />
            <List list={[
                "Trained new staff for their new positions according to high standards",
                "Proved myself to be adaptive by learning multiple positions such as Front Grill, Back Grill, Running Food, Running Drinks and Kitchen,",
                "Grilled food according to the customers’ requests"
                ]} />
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
