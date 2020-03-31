import React, { useState, Component, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import Page from '../../pages/Page'

const PageContainer = ({
    data,
    ...props,
}) => {
    switch (data.template.templateName) {
        default: return <Page {...{ ...data, ...props }} />
    }
}

export default PageContainer