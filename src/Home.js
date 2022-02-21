import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');
  
  
  /*  const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); // returns a new filtered data
        setBlogs(newBlogs);
    } */

    

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> } {/*show while loading data from json server */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
          {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'milrose')} title="Milrose' blogs!" />  */}
        </div>
     );
}
 
export default Home;