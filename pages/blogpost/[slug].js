import React, { useState, useEffect } from 'react';
import styles from '../../styles/BlogPost.module.css'
import { useRouter } from 'next/router'
import * as fs from 'fs';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myBlog);


  return <div className='grid place-items-center'>
    <main className='w-3/4 shadow-2xl overflow-x-hidden pt-[120px] my-20 bg-[#d0d4d6] rounded-xl'>
      <h1 className='text-center'>{blog && blog.title}</h1>
      <hr />
      {blog && <div className='m-10' dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </main>
  </div>;
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogdata`)
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })
  return {
    paths: allb,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;


  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}
export default Slug;
