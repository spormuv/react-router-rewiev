const AddPost = () => {
  return (
    <form className="p-10 bg-slate-800 flex flex-col gap-2">
      <label className="flex flex-col gap-2">
        Post title:
        <input type="text" className="text-black p-2" />
      </label>
      <label className="flex flex-col gap-2">
        Post body:
        <input type="text" className="text-black p-2" />
      </label>

      <button className="bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600">
        Submit
      </button>
    </form>
  );
};

export default AddPost;
