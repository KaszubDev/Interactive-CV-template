import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url('${props => props.src}');
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

const Main = () => (
    <>
    <StaticQuery query={graphql`
        query {
            MyData {
                main(where: { id:"ckjlegvjk1h0k0909udejbz6u" }) {
                    bg {
                        url
                    }
                }
            }
        }
        `}
        render={data => (
            <>
            <Container src={data.MyData.main.bg.url}>
                <Inner>
                    <H1>Test</H1>
                </Inner>
            </Container>
            </>
        )}
    />
    </>
)

export default Main;