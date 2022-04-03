import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import Link from 'next/link';

function BlogDetails(props: any) {
  const { title, subtitle, author, published, tag } = props.blog;

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center p-4'>
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
        <div className='flex gap-4'>
          <h4>{author}</h4>
          <h4>{published}</h4>
          <h4>5 mins read</h4>
        </div>

        {/* badges */}
        <h5>Badges</h5>
        <div className='flex gap-2 bg-emerald-100/80 p-2 rounded-lg'>
          <span className='bg-white p-2 rounded-md shadow-md shadow-emerald-200 hover:bg-emerald-300 hover:text-white'>
            badge1
          </span>
          <span className='bg-white p-2 rounded-md shadow-md shadow-emerald-200 hover:bg-emerald-300 hover:text-white'>
            badge2
          </span>
          <span className='bg-white p-2 rounded-md shadow-md shadow-emerald-200 hover:bg-emerald-300 hover:text-white'>
            badgee
          </span>
        </div>

        {/* main article */}
        <div className='leading-relaxed my-4 text-lg font-normal font-sans'>
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
          {tag &&
            tag.map((t: string, index: number) => (
              <Link href={`/tag/${t}`} key={index}>
                <a>
                  <span className='ring-1 ring-slate-400 p-1 rounded-md'>
                    #{t}
                  </span>
                </a>
              </Link>
            ))}
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
