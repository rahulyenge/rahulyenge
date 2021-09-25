import React from 'react'
import { Segment } from 'semantic-ui-react'
import classes from './footer.module.css'

const Footer = () => (
    <>
        <div className={classes.footer}>
            <Segment inverted color='black'> &copy; Copyright Assignment by Rahul Yenge</Segment>
        </div>
    </>

)

export default Footer
