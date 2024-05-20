import Image from "next/image";

const avatarSize = 96;

type CommentProps = {
  name: string;
  score: string;
  comment: string;
  avatar: string;
};

const Comment = ({ name, score, comment, avatar }: CommentProps ) => {
  return (
    <section >
      <article className="flex flex-col justify-between w-[588px] h-[220px] p-4 bg-blue-50 rounded-3xl">
        <div className="text-gray-500 text-xl font-normal">
          {comment}
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
            className="rounded-[20px] "
            src={avatar}
            width={avatarSize}
            height={avatarSize}
            
            
            
            alt="avatar"
            />
            <div>
              <h3 className="text-gray-500 text-2xl font-semibold">{name}</h3>
              <p>Score {score}</p>
            </div>
          </div>
        </div>
      </article>
      {/* <article className="flex flex-col justify-between w-[588px] h-[220px] p-4 bg-blue-50 rounded-3xl">
        <div className="text-gray-500 text-xl font-normal">
          The TOEIC app is really helpful. My listening and reading skills have
          improved significantly. The practice tests are very similar to the
          actual TOEIC test. Highly recommended!
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <Image
            className="rounded-[20px]"
            src="/avatar/avatar1.jpg"
            width={avatarSize}
            height={avatarSize}
            alt="avatar"
            />
            <div>
              <h3 className="text-gray-500 text-2xl font-semibold">John Doe</h3>
              <p>Score 400 > 750</p>
            </div>
          </div>
        </div>
      </article> */}
    </section>
  );
};
export default Comment;
