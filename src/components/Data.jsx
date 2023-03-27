"use client";

export default function Page({ copyData }) {
  return (
    <main>
      <div className="table w-full mt-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  Deaths Per One Million
                </th>

                <th scope="col" className="px-6 py-3">
                  Number of Today Death
                </th>
                <th scope="col" className="px-6 py-3">
                  Continent
                </th>
                <th scope="col" className="px-6 py-3">
                  Number of Death
                </th>
              </tr>
            </thead>
            <tbody>
              {copyData.map((d) => (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {d.country}
                  </th>
                  <td className="px-6 py-4">{d.deaths}</td>
                  <td className="px-6 py-4">{d.deathsPerOneMillion}</td>
                  <td className="px-6 py-4">{d.continent}</td>
                  <td className="px-6 py-4">{d.todayDeaths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
