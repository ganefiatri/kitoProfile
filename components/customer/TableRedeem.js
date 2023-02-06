import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const TableRedeem = ({ redeem }) => {
    const clickRedeem = async (e) => {
        e.preventDefault();
        const id = String(redeem.map(item => item.id));
        const poin = String(redeem.map(item => item.total_poin));
        const res = await fetch("/api/expiredpoin/editdata", {
            method: "PUT",
            body: JSON.stringify({
                poin: poin,
                id: id
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await res.json();
        if (result) {
            toast('Succesfully Insert Data, fill again!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
        } else {
            toast('Failed Inserting Data! Try Again', { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
        }
        router.push(`customer/redeem?q=${id}`)
    }

    return (
        <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-2/3">
            <div className="container mx-auto">
                <div className="flex justify-between w-full px-4 py-2">
                    <div className="text-lg font-bold">
                        Redeem Your poin
                    </div>

                </div>
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full border border-collapse table-auto">
                        <thead className="">
                            <tr className="text-base font-bold text-left bg-gray-50">
                                <th className="px-4 py-3 border-b-2 border-blue-500">Phone Number</th>
                                <th className="px-4 py-3 border-b-2 border-green-500">Poin</th>
                                <th className="px-4 py-3 border-b-2 border-green-500">Redeem</th>
                                <th className="px-4 py-3 border-b-2 border-green-500">Expired</th>
                                <th className="px-4 py-3 border-b-2 border-red-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                            {/* {history.map(item => ( */}
                            {redeem.map(item => (
                                <tr className="py-10 border-b border-gray-200 hover:bg-gray-100">
                                    <td className="flex flex-row items-center px-4 py-4">
                                        <div className="flex-1 pl-1">
                                            <div className="font-medium dark:text-white">{item.userPhone.number}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        {item.total_poin}
                                    </td>
                                    {item.redeem_poin && (
                                        <td className="px-4 py-4">{item.redeem_poin}</td>
                                    )}
                                    <td className="px-4 py-4">
                                        {item.expiredAt}
                                    </td>
                                    <td className="px-4 py-4">
                                        <button onClick={clickRedeem} className="bg-blue-500 rounded-md p-1 text-white font-normal">redeem</button>
                                    </td>
                                </tr>
                            ))}
                            {/* ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableRedeem;
