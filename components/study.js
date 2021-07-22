export default function Study(props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-x-4 bg-indigo-100 dark:bg-indigo-800 rounded-md p-2">
      <div className="flex flex-row gap-x-2 md:gap-x-1 font-semibold flex-shrink-0">
        <div>{props.dateFrom}</div>
        <div>—</div>
        <div>{props.dateTo}</div>
      </div>
      <div>
        <div>
          <span className="font-semibold">{props.collegeName}</span><span>, </span>
          <span>{props.title}</span>
        </div>
        <div>
          <span className="italic">{props.universityName}</span>
          <span> ({props.universityLocation})</span>
        </div>
      </div>
    </div>
  );
}
