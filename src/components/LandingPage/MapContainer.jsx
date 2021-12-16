import React, { Component } from "react";
import { Embed } from 'semantic-ui-react'

//To make this re-usable take in a prop for the url

const MapEmbedContainer = () => (
    <Embed
    active={true}
    url='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13419.914572103351!2d32.60218866846019!3d0.29767600295599794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadb6277c96791e9d!2sTools%20and%20Machinery!5e0!3m2!1sen!2sug!4v1635764860880!5m2!1sen!2sug'
    />
)

export default MapEmbedContainer

