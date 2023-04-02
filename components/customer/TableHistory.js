import React from 'react';

const TableHistory = ({ history }) => {
    console.log(history.map(item => item.history.map(items => items.nama_stock)))
    // console.log(history.map(item => item.customers.map(items => items.histories.map(itemss => itemss.nama_cust))))
    // const Poin = history.reduce((sum,item) => sum + parseInt(item.productDetail.poin), 0);
    // console.log(Poin)
    function toCurrency(numberString) {
        let number = parseFloat(numberString);
        return number.toLocaleString('IDR');
    }
    return (
        <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-2/3">
            <div className="container mx-auto">
                <div className="flex justify-between w-full px-4 py-2">
                    <div className="text-lg font-bold">
                        Purchase History
                    </div>

                </div>
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full border border-collapse table-auto">
                        <thead className="">
                            <tr className="text-base font-bold text-left bg-gray-50">
                                <th className="px-4 py-3 border-b-2 border-blue-500">Product</th>
                                <th className="px-4 py-3 border-b-2 border-green-500">Quantity</th>
                                <th className="px-4 py-3 border-b-2 border-red-500">Date</th>
                                <th className="px-4 py-3 border-b-2 border-red-500">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                            {history.map(item => item.history.map(items => ( 
                                <tr className="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td className="flex flex-row items-center px-4 py-4">
                                        <div className="flex-1 pl-1">
                                            <div className="font-medium dark:text-white">{items.nama_stock}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        {items.qty}
                                    </td>
                                    <td className="px-4 py-4">
                                        {items.tgl}
                                    </td>
                                    <td className="px-4 py-4">
                                        {toCurrency(items.jumlah)}
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableHistory;
