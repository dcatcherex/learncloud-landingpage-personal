import comments from "@/offline-data/comments.json";
import Comment from "@/components/home/comment";
import { Button } from "../ui/button";

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
  return (
    <section className="bg-white px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 py-6 lg:py-12 overflow-hidden">
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
        <div>
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
