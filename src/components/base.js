import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import { Link, NavLink } from "react-router-dom"

const Container = styled.div`
    background-color: #F2F3F7;
    height: 100vh;
    width: 500px;
`;

const CircleImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 30px;
`;

const Inner = styled.div`
    text-align: center;
    height: 100%;
    width: 100%;
`;

const Name = styled.span`
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 24px;
    display: block;
    margin-top: 20px;
`;

const Position = styled.span`
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    margin: 10px 0;
`;

const Copyrights = styled.p`
    font-size: 14px;
    margin: 0;
    margin-top: 4rem;
`;

const Ul = styled.ul`
    font-size: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    a {
        text-decoration: none;
        color: #000;
        transition: all 0.25s ease-in;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            width: 0;
            bottom: 0;
            height: 1px;
            display: block;
            background-color: #2c98f0;
        }
        &.active {
            &::after {
                width: 100%;
            }
        }
    }
    li {
        padding: 0.5rem 0;
    }
`;


const Base = () => {

    return (
        <>
        <Container>
        <Inner>
            <StaticQuery query={graphql`
                query {
                    MyData {
                        myData(where: { id:"ckjhkmsig692u0a44j9diphaf" }) {
                            name
                            position
                            avatar {
                                url (transformation : {
                                    image: { resize: { width: 150, height: 150, fit: clip } }
                                })
                            }
                        }
                    }
                }
            `}
            render={data => (
                <>
                <CircleImg src={data.MyData.myData.avatar.url} alt="portrait image"/>
                <Name>{data.MyData.myData.name}</Name>
                <Position>{data.MyData.myData.position}</Position>
                </>
            )}
            />

            <div>
                <Ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                    </li>
                </Ul>
            </div>


            <Copyrights>© Copyright {new Date().getFullYear()} All rights reserved <br/>
            This template is made by <a href="https://github.com/KaszubDev" target="_blank">KaszubDev</a></Copyrights>
        </Inner>
        </Container>
        </>
    );
}

export default Base;