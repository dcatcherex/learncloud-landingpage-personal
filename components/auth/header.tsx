
type HeaderProps = {
    title: string;
    description: string;
};

const Header = (
    {
        title = "title",
        description = "description",
    }: HeaderProps
) => {
  return (
    <section>
      <h2 className="text-gray-800 text-2xl font-medium mb-2">
        {title}
      </h2>
      <p className="text-gray-500 text-sm font-normal mb-4">
        {description}
      </p>
    </section>
  );
};
export default Header;
