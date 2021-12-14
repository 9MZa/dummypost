import { Heading, Box, Button, ButtonGroup, Card, Tag, Columns, Container } from 'react-bulma-components'
import Image from 'next/image'
import dayjs from 'dayjs'
function PostDisplay({ Item }) {
    return (
        <Columns>
            {Item.map((post, index) => {
                return (
                    <Columns.Column key={index} size={4}>
                        <Card>
                            <Card.Image src={post.coverImage} size="4by3" />
                            <Card.Content>
                                <Heading size={3} renderAs='h3'>{post.title}</Heading>
                                <p>Create on:  {dayjs(post.createAt).format('MMMM DD, YYYY h:mm A')}</p>
                                <Card.Content> {post.body} </Card.Content>
                                <p> Category: {post.category} </p>
                                <p>By: {post.author} </p>

                                {/* Tag */}
                                {post.tags.map((tag, index) => {
                                    return (
                                        <Tag key={index}>{tag}</Tag>
                                    )
                                })
                                }
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                )
            })}
        </Columns>
    )
}

export default PostDisplay
