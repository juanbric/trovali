import Spacer from "./Spacer";

const BlogCard = ({
  img,
  title,
  description,
}: {
  img: any;
  title: any;
  description: any;
}) => {
  return (
    <div className="flex flex-col md:max-w-[250px]">
      <img
        src={img}
        className=" rounded-[6px] object-cover h-[200px] w-full mb-4"
        width={800}
        height={300}
      />
      <h2 className="mb-3 mt-4 header text-start">{title}</h2>
      <h3 className="copy shorten-p text-start">{description}</h3>
      <Spacer size={8} />
    </div>
  );
};

export default BlogCard;
