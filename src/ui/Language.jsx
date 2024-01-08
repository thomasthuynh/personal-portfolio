const Language = ({ icon, name }) => {
  return (
    <div className="group relative mb-6 flex w-full max-w-[90px] flex-col items-center p-2 sm:max-w-[100px]">
      <img
        src={icon}
        alt={name}
        className="duration-300 group-hover:scale-95 group-hover:brightness-75"
      />
      <span className="absolute -bottom-4 scale-0 font-semibold opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-100">
        {name}
      </span>
    </div>
  );
};

export default Language;
