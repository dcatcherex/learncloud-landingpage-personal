import comments from "@/offline-data/comments.json";
import Comment from "@/components/newhome/comment";

type TestimonialProps = {
  comments: {
    id: number;
    name: string;
    score: string;
    comment: string;
    avatar: string;
  }[];
};

const Testimonial = () => {
  return( 
  <section className="flex gap-12 p-12 bg-white overflow-scroll">
    {comments.map((comment) => (
      <Comment key={comment.id} {...comment} />
    ))}
  </section>
  )
};
export default Testimonial;
