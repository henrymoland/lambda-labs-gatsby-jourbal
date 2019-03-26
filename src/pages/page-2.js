import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
<h1>Week 3-4</h1>

<h4>Intergration</h4>
<p>
Week two has been  a great experience. The capstone project is coming along pretty nicely  and is beginning to look like  a useful, user friendly application but we still have alot more work to accomplish to get the application where we want it.  During the week I spent time researching on a way to upload PDFs into the  app and allowing users to be able to view and  down the PDF. During my research I came across a library called filepond that allow you to upload anything you throw at it including PDF, images, .DOC etc. I love to the look of UI and the preloader element it has built in.  I also came across another library called React-PDF that allow users to view the PDF document online as well download it. I'm leaning toward
I also worked on connecting  the front end of the dashboard to the backend of the database to display the list of invoices coming from database. Some of the challenges I faced during this week  are that when testing the endpoints in Postman I got a SQLite error. After going through the code and looking at the migrations I found that the migrations where out of order. The users table was being called before the memberships table and  the users table has a foreign key from the memberships table. This thrown an error in Postman. I reordered the migrations and created seeds for membership, users, clients, invoices, reminders and payments to have data for the backend. After creating seeds for the migrations; I had created endpoints for the "GET" and "DELETE" request and tested the AJAX calls  in Postman.  After making sure I was getting the data back from AJAX calls I made the HTTP request in the actions creators in Redux for the frontend.

<h4>Weekly Reflection:</h4>
I have prior experience working on team but not forming a team on my own.  Working on a development is an new and exciting experience and for me.  One of the things I  have done to solidfy the past team I have been part of as group is to try to get each member to work on something they enjoy working on. This will allow the them to contribute and put in maximum effort into something they have an interest in and will less likely get bored with their task. What I'm doing to make sure the group has a voice in decicion making is to ask them what they think about an idea and if they have anything to add it rather than just implementing the idea. What i'm doing personally to have a voice in decision making is to voice my opinion when I have ideas and to reach out to team members when I feel like I don't understand what is going on with a certain aspect of the project. </p>
    <Link to="/">Go back to Week 1-2</Link>
  </Layout>
)

export default SecondPage
