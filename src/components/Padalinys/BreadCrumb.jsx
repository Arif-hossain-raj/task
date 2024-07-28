import Link from "next/link";

export default function BreadCrumb(){
    return(
        <section className="breadcrumb bg-[#F8F9FE] ">
            <div className="wrapper max-w-full px-20 py-[22px]">
                <ul className="mb-[10px] flex items-center">
                    <li className="px-2 border-r-1 ">
                        <Link className="text-[#14133B80] opacity-50" href={''}> Titulinis </Link>
                    </li>
                    <li className="px-2 border-r-1 ">
                        <Link className="text-[#14133B80] opacity-50" href={''}>  Padaliniai</Link>
                    </li>
                    <li className="px-2 border-r-1 ">
                        <Link className="text-[#14133B80] opacity-50" href={''}>Ceikinių padalinys  </Link>
                    </li>
                </ul>
                <h3>Ceikinių padalinys</h3>
            </div>

        </section>
    )
}

