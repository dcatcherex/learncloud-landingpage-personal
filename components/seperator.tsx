type SeperatorProps = {
    details?: string
}

const Seperator = ({ details = "or continue with" }: SeperatorProps) => {
 
    return (
    <div className="flex items-center my-4">
      <div className="flex-grow h-px bg-gray-400"></div>
      <p className="mx-2 text-gray-400 text-sm">or continue with</p>
      <div className="flex-grow h-px bg-gray-400"></div>
    </div>
  );
};
export default Seperator;
