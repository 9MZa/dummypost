import React, { useState } from "react";
import posts from '../postdata.json'
import { Heading, Button, Hero, Container, Form } from "react-bulma-components";
import PostDisplay from "../components/PostDisplay";
import Image from "next/image";
export default function Home() {


  const [search, setNewSearch] = useState("");

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };


  const filtered = !search
    ? posts
    : posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );



  return (
    <div>

      {/* <Heading>Post</Heading>
      Search Post:
      <input type="text" value={search} onChange={handleSearchChange} />
      {search == "" ? 'enter some keyword' : ''} */}
      {/* {search !== "" ?
        <div>
          <h2>Result of: {`"${search}"`}</h2>
          {filtered.map((post, index) => {
            return (
              <p key={post.index}>
                {post.title}
              </p>
            );
          })}
        </div>
        : ''} */}
      {/* {search !== "" & filtered == 0 ? 'cant find post' : ''} */}

      <Hero color="white">
        <Hero.Body>
          <Container>
            <Heading 	>
              🔎 Magic Search
            </Heading>
            <Form.Field>
              <Form.Control>
                <Form.Input value={search} onChange={handleSearchChange} />
              </Form.Control>
            </Form.Field>
          </Container>
        </Hero.Body>
      </Hero>
      <Container>
        {search !== '' ?
          <div>
            <Heading renderAs="p" size={4} subtitle>  Result of:<b>{`"${search}"`}</b></Heading>
            <PostDisplay Item={filtered} />
          </div> : ''}

        {search == "" ?
          <div>
            <Heading subtitle renderAs="p" size='4'>enter some keyword</Heading>
            <Image src={'/search.svg'} height={300} width={300} alt="search image" />
          </div> : ''}


        <div>
          {search !== "" & filtered == 0 ?
            <div>
              <Heading renderAs="p" size={4} subtitle>Nothing...</Heading>
              <Image src={'/lost.svg'} height={300} width={300} alt="lost image" />
            </div> : ''}



        </div>
      </Container>


    </div>
  )
}
