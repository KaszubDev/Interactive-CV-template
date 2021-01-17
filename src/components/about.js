import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #ccc;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 6rem;
    font-family: 'Playfair Display', serif;
    color: #fff;
`;

const Inner = styled.div`
    vertical-align: middle;
    padding: 5rem;
`;

const About = () => (
    <>
    <Container>
        <Inner>
            <H1>About</H1>
        </Inner>
    </Container>
    </>
)

export default About;