import Link from 'next/link';

export default function BreadCrumb({ data }) {
  return (
    <section className="breadcrumb bg-[#F8F9FE] ">
      <div className="wrapper max-w-full px-20 py-[22px]">
        <ul className="mb-[10px] flex items-center">
          {data?.length > 0 &&
            data.map((item, id) => (
              <li key={id} className="px-2 border-r-2 ">
                <Link className="text-[#14133B] opacity-50" href={item.url}>
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
        <h3>Ceikinių padalinys</h3>
      </div>
    </section>
  );
}
