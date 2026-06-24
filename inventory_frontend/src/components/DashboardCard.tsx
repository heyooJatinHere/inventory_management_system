interface Props {

    title: string;

    value: number;

}

export default function DashboardCard({
    title,
    value
}: Props) {

    return (

        <div className="border rounded shadow p-5">

            <h2 className="text-gray-500">
                {title}
            </h2>

            <h1 className="text-4xl font-bold mt-2">
                {value}
            </h1>

        </div>

    );

}