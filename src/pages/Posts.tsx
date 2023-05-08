import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-white text-center text-2xl my-10">Posts Page</h1>
      <Link className="flex py-2 px-4 bg-slate-700" key={'idx'} to={'/'}>
        post.title
      </Link>
    </div>
  );
};

export default Posts;
