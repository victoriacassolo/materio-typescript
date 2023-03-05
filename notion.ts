import { Client } from '@notionhq/client';

const client = new Client({
    auth: process.env.NOTION_KEY,
});

async function posts() {
    const myPosts = await client.users
    return myPosts;
}

export {
    posts
}