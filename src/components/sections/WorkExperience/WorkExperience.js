import React from 'react'
import TitleAndDate from '../../TitleAndDate/TitleAndDate'
import List from '../../List/List'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function workExperience() {
    return (
        <ShowcaseSection id="work-experience" title="Work Experience">
                <TitleAndDate institution="The Radcliffe School" roleTitle="IT Support Assistant" date="March 2016" />
                <List list={[
                    "Fixed and built computers from their component parts and installed new operating systems", 
                    "Observed the operation of the CCTV"]} />
                <TitleAndDate institution="FIMBA European MaxiBasketball Championship" roleTitle="Volunteer" date="July 2012" />
                <List list={[
                    "Interpreted from English to Lithuanian as and when required", 
                    "Assisted participants with the registration process"]} />
                <TitleAndDate institution="David Coles Architects" roleTitle="Architect's Assistant" date="May 2012" />
            <List list={[
                "Created designs for the use of the company’s presentations using different software such as CAD and SketchUp"]} />
        </ShowcaseSection>
    )
}
