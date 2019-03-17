import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <h1>Week 1 of Lambda Labs in the books -Week 01</h1>
    <p>The first of week of Lambda Labs just came to an end! The week began with an introduction of our 5 member team and a group effort and hash out a TDD (Technical Design Document) for our capstone project (Pay Me). The TDD purpose is to determine the requirements of what problem our application will solve (Allow administrators to upload new invoicestot he server, view open invoices and request payment from customers), who our target user would be (Business owners and users with clients) and how our design and feature will separate our application from the competition (Simple design, easy to use and navigate allow customer to pay invoice online).
    <br></br>
<br></br>
We also decided on our tech stack which was one of the requirements of the TDD. We wanted to focus on an easy user experience and decided to choose a stack we were all comfortable with using. We decided to go with ReactJS on the front end, PostgreSQL on the backend and Materialize CSS  for styling which is a responsive front-end framework based on Material Design. To enable user authentication and roles, the team would implement Passport with the PostgreSQL database. Lastly, the Pay Me application will use the Stripe API for securing user payment to our monthly subscription plan.
The Lambda School’s Labs capstone project is the first time the group and I work together developing as part of a team. 
<br></br>
<br></br>
My first contribution to the team was to create a mockup of the landing page and building it out in ReactJS. My final contribution of the week was to build out the invoice list component of the front end to display the list of invoices this was also built in React.
</p>

    <Link to="/page-2/">Week 02</Link>
  </Layout>
)

export default IndexPage
