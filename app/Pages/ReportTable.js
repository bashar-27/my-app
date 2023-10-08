// ReportTable Component

import React from 'react';
import { hoursOfOperation } from './hoursOfOperation';

const ReportTable = ({ reports }) => {
  const columnTotals = hoursOfOperation.map((hour, index) => {
    return reports.reduce((sum, report) => sum + report.hourly_sales[index], 0);
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-black">
        <thead className="bg-green-300">
          <tr>
            <th className="border">Location</th>
            {hoursOfOperation.map((hour, index) => (
              <th key={index} className="border">{hour}</th>
            ))}
            <th className="border">Totals</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-300'}>
              <td className="border">{report.location}</td>
              {report.hourly_sales.map((sales, index) => (
                <td key={index} className="border">{sales}</td>
              ))}
              <td className="border">{report.hourly_sales.reduce((sum, sales) => sum + sales, 0)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-green-100">
            <td className="border">Totals</td>
            {columnTotals.map((total, index) => (
              <td key={index} className="border">{total}</td>
            ))}
            <td className="border">{columnTotals.reduce((sum, total) => sum + total, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ReportTable;
