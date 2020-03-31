import React from 'react'

import About from './components/About'
import CareersArchive from './components/CareersArchive'
import Columns from './components/Columns'
import Contact from './components/Contact'
import CtaText from './components/CtaText'
import GamesArchive from './components/GamesArchive'
import JobDescription from './components/JobDescription'
import Locations from './components/Locations'
import OurOfferings from './components/OurOfferings'
import Partners from './components/Partners'
import PostArchive from './components/PostArchive'
import Team from './components/Team'
import Testimonials from './components/Testimonials'

const FlexibleFields = ({
    content,
    ...props,
}) => content && content.length > 0 ? content.map((c, i) => {
    switch (c.__typename.split('Flexiblecontent_Content_')[1]) {
        case 'About': return <About {...{ key: i, content: c, ...props }} />
        case 'CareersArchive': return <CareersArchive {...{ key: i, content: c, ...props }} />
        case 'Columns': return <Columns {...{ key: i, content: c, ...props }} />
        case 'Contact': return <Contact {...{ key: i, content: c, ...props }} />
        case 'CtaText': return <CtaText {...{ key: i, content: c, ...props }} />
        case 'GamesArchive': return <GamesArchive {...{ key: i, content: c, ...props }} />
        case 'JobDescription': return <JobDescription {...{ key: i, content: c, ...props }} />
        case 'Locations': return <Locations {...{ key: i, content: c, ...props }} />
        case 'OurOfferings': return <OurOfferings {...{ key: i, content: c, ...props }} />
        case 'Partners': return <Partners {...{ key: i, content: c, ...props }} />
        case 'PostArchive': return <PostArchive {...{ key: i, content: c, ...props }} />
        case 'Team': return <Team {...{ key: i, content: c, ...props }} />
        case 'Testimonials': return <Testimonials {...{ key: i, content: c, ...props }} />
        default: return <div key={i}><pre>{  JSON.stringify(c, false, 4) }</pre></div>
    }
}) : null

export default FlexibleFields