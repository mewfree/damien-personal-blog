export default function Job(props) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-x-4 bg-indigo-100 rounded-md p-2">
      <div className="flex flex-row md:flex-col gap-x-2 font-semibold flex-shrink-0">
        <div>{props.dateFrom}</div>
        <div>—</div>
        <div>{props.dateTo}</div>
      </div>
      <div>
        <div>
          <span className="font-semibold">{props.title}</span><span>, </span>
          <span>{props.companyName}</span><span> - </span><span className="italic">{props.companyDescription}</span><span> </span>
          <span className="italic">
            <span>(</span><span>{props.companyLocation}</span><span>)</span>
          </span>
        </div>
        <div>
          <ul className="list-disc list-inside">
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
