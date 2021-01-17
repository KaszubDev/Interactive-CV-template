import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Base from '../components/base'
import Main from '../components/main'
import About from '../components/about'
import {Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';

import '../css/app.css'


const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Strona główna" />
      <Router>
      <Base/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/about' component={About}/>
      </Switch>

    </Router>
    </Layout>
  )

}

export default IndexPage
