const LinkItems = ({ link }) => {
  const { id, title, icon, subLink, sub } = link;

  return (
    <div tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box p-5 w-96 mt-2">
      <div className="flex items-center gap-2 font-bold text-lg">{icon} {title}</div>
      <div>
        {subLink.map((item, index) => {
          return (
            <div key={index} className="flex flex-col py-3">
              <span className="font-bold text-lg">{item}</span>
              <div className="text-sm">{sub[index]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LinkItems