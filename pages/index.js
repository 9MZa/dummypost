import React, { useState } from 'react'
import posts from '../postdata.json'
import { Container } from 'react-bulma-components'
import PostDisplay from '../components/PostDisplay'
import ButtonSwitch from '../components/ButtonSwitch'

const allCategories = ['All', ...new Set(posts.map(item => item.category))];


function Index() {

    const [postItem, setPostItem] = useState(posts);
    const [buttons, setButtons] = useState(allCategories);

    //Filter Function
    const filter = (button) => {
        if (button === 'All') {
            setPostItem(posts);
            return;
        }
        const filteredPosts = posts.filter(item => item.category === button);
        setPostItem(filteredPosts)
    }

    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'end', margin: '2em' }}>
                <ButtonSwitch btnName={buttons} filter={filter} />
            </div>
            <PostDisplay Item={postItem} />
        </Container>
    )
}

export default Index