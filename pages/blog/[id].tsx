import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '../../model/Blog';
import { useRouter } from 'next/router';
import AuthorInfo from '../../components/AuthorInfo';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Fragment } from 'react';
import Tag from '../../components/Tag';
import BadgeBlock from '../../components/BadgeBlock';

function BlogDetails({ blog }: { blog: Blog }) {
  const router = useRouter();

  const {
    title,
    subtitle,
    author,
    published,
    tags,
    profilePic,
    userName,
    readTime,
    badges
  } = blog;

  return (
    <div className='flex flex-col gap-2'>
      <button
        className='btn-small-outline w-fit ml-4 mt-2'
        onClick={() => router.back()}
      >
        back
      </button>

      <div className='flex justify-between items-center p-4 bg-slate-50'>
        <h1 className='text-2xl font-bold font-mono'>
          {author}
          {"'s"} Blog
        </h1>
        <button className='btn-primary'>Follow</button>
      </div>
      <Image
        src='/blog.jpg'
        width={750}
        height={480}
        className='h-56 bg-cover'
        alt={title}
      />
      <div className='blog-body flex flex-col gap-4 justify-center items-center p-4'>
        <h1 className='text-4xl font-bold text-center'>{title}</h1>
        <h3 className='text-2xl font-semibold text-center'>{subtitle}</h3>

        {/* author info */}
        <div className='bg-slate-50 p-2 rounded-lg'>
          <div className='bg-white py-4 px-8 rounded-md shadow-md shadow-slate-200'>
            <AuthorInfo
              profileUrl={profilePic}
              name={author}
              username={userName}
            />
          </div>
        </div>

        <div className='flex gap-4 text-sm text-slate-600 ml-4 '>
          <p>{published}</p>
          <div className='icon-text-inline'>
            <HiOutlineBookOpen className='text-lg font-light' />
            <span>{readTime} mins read</span>
          </div>
        </div>

        <BadgeBlock badges={badges}/>

        {/* main article */}
        <div className='leading-loose my-2 text-lg font-normal font-sans'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            ducimus, dolorum minima recusandae ipsam ea omnis eligendi esse
            dolorem, qui dicta! Quis voluptatem a molestias tempore maxime qui
            totam. Labore!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            laboriosam, vero provident recusandae officiis dolor aut quam ad
            itaque, facilis asperiores, quos necessitatibus est suscipit maiores
            aperiam libero culpa ab. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. A dolorum quisquam quibusdam nam eos veniam labore
            odit! A expedita ipsa deserunt dolorem amet, ex reiciendis inventore
            porro aut ducimus harum!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quia
            voluptates laudantium quidem, tempore exercitationem veritatis qui
            nisi voluptate corrupti nostrum debitis numquam minima reprehenderit
            incidunt eos perspiciatis natus eligendi.
          </p>
        </div>

        <div className='flex gap-2 flex-wrap self-start'>
        {tags?.length && (
          <>
            {tags.slice(0, 3).map((tag: string, index: number) => (
              <Fragment key={index}>
                <Tag url={`/tags/${tag}`} tagName={tag} />
              </Fragment>
            ))}

          </>
        )}
        </div>

        {/* review section */}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), '/data/blog.json'), 'utf8')
  );
  const filteredBlog = data.filter(
    (blog: { id: ParsedUrlQuery | undefined }) => blog.id === context.params?.id
  )[0];

  return {
    props: {
      blog: filteredBlog,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), '/data/blog.json'), 'utf8')
  );

  const paramIdList = data.map((blog: { id: string }) => {
    return { params: { id: blog.id } };
  });

  return {
    paths: paramIdList,
    fallback: 'blocking',
  };
};

export default BlogDetails;
