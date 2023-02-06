import React from 'react';

const TableHistory = ({ history }) => {
    // console.log(history)
    const Poin = history.reduce((sum,item) => sum + parseInt(item.productDetail.poin), 0);
    // console.log(Poin)
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
                                <th className="px-4 py-3 border-b-2 border-green-500">Store</th>
                                <th className="px-4 py-3 border-b-2 border-red-500">Poin</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                            {history.map(item => (
                                <tr className="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td className="flex flex-row items-center px-4 py-4">
                                        <div className="flex w-10 h-10 mr-4">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src={item.productDetail.product.image} className="object-cover w-10 h-10 mx-auto rounded-md" />
                                            </a>
                                        </div>
                                        <div className="flex-1 pl-1">
                                            <div className="font-medium dark:text-white">{item.productDetail.product.title}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        {item.productDetail.stores.name}
                                    </td>
                                    <td className="px-4 py-4">
                                        {item.productDetail.poin}
                                    </td>
                                </tr>
                            ))}
                            <tr className='py-10 border-b border-gray-200 hover:bg-gray-100'>
                                <td colSpan={2} className='px-4 py-4'>Total Poin</td>
                                <td className='px-4 py-4'>{Poin}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableHistory;
