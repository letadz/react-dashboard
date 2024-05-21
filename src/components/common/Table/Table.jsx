import React from "react";
import EmptyState from "../EmptyState/EmptyState";
import { LiaSpinnerSolid } from "react-icons/lia";

const Table = ({ data, fetching, emptyStateTitle, emptyStateDescription }) => {
  return (
    <div>
      <div className="relative overflow-x-auto table-wrapper bg-white rounded-md p-6">
        <h1 className="text-lg font-medium mb-3 ml-5">Recent Tickets</h1>
        <table className="min-w-full divide-y divide-gray-200 table-auto dark:divide-gray-700">
          <thead>
            <tr>
              {data.columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 py-3 px-6 text-xs font-bold tracking-wider text-start uppercase"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {data.rows.length ? (
              data.rows.map(({ rowValues }, index) => (
                <tr key={index}>
                  {rowValues.map((values, i) => (
                    <td
                      key={i}
                      className="py-4 px-6 text-sm text-gray-900 dark:text-white"
                    >
                      {values}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={data.columns.length + 1}>
                  {fetching ? (
                    <div className="text-center py-4">
                      <LiaSpinnerSolid className="h-12 w-12 text-gray-400 mx-auto animate-spin" />
                    </div>
                  ) : (
                    <EmptyState
                      title={emptyStateTitle}
                      description={emptyStateDescription}
                    />
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
