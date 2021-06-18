export default function Study(props) {
  return (
    <div className="flex flex-row items-center gap-x-4 bg-indigo-100 rounded-md p-2">
      <div className="font-semibold flex-shrink-0">
        {props.dateFrom} - {props.dateTo}
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
