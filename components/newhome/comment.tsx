import Image from "next/image";

const avatarSize = 96;

type CommentProps = {
  name: string;
  score: string;
  comment: string;
  avatar: string;
};

const Comment = ({ name, score, comment, avatar }: CommentProps) => {
  return (
    <section>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex flex-row-reverse lg:flex-col justify-between w-full lg:w-[588px] lg:h-[220px] lg:p-4 bg-blue-50 lg:rounded-3xl">
          <div className="text-gray-500 text-base lg:text-xl font-normal line-clamp-3">
            {comment}
          </div>
          <div>
            <div className="flex  items-center space-x-3">
              <div className="size-[96px] relative">
                <Image
                  className="lg:rounded-[20px] "
                  src={avatar}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="avatar"
                />
              </div>
              <div>
                <h3 className="text-gray-500 text-lg lg:text-2xl font-semibold">
                  {name}
                </h3>
                <p>Score {score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="flex  gap-4 p-2 border rounded-3xl">
          <div className="size-[80px] relative ">
            <Image
              className="rounded-2xl "
              src={avatar}
              fill
              style={{ objectFit: "cover" }}
              alt="avatar"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-500 text-lg lg:text-2xl font-semibold">
                {name}
              </h3>
              <p>Score {score}</p>
            </div>
            <div className="text-gray-500 text-base font-normal line-clamp-2 max-w-[300px] ">
              {comment}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Comment;
