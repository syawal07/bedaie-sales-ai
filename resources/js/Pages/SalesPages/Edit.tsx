import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Edit({ salesPage }: any) {
    const { data, setData, put, processing } = useForm({
        product_name: salesPage.product_name || '',
        product_description: salesPage.product_description || '',
        key_features: salesPage.key_features || '',
        target_audience: salesPage.target_audience || '',
        price: salesPage.price || '',
        unique_selling_points: salesPage.unique_selling_points || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('sales.update', salesPage.id));
    };

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800">Edit & Re-generate AI</h2>}>
            <Head title="Edit Sales Page" />
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-8 border-t-4 border-yellow-500">
                        <div className="mb-6 bg-yellow-50 p-4 rounded-md text-yellow-800 text-sm">
                            <strong>Perhatian:</strong> Menyimpan perubahan ini akan memerintahkan AI untuk menulis ulang seluruh isi Sales Page berdasarkan data terbaru di bawah ini.
                        </div>
                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Nama Produk/Layanan *</label>
                                <input type="text" value={data.product_name} onChange={e => setData('product_name', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Deskripsi Singkat *</label>
                                <textarea value={data.product_description} onChange={e => setData('product_description', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500" required rows={3} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Fitur & Keunggulan</label>
                                <input type="text" value={data.key_features} onChange={e => setData('key_features', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700">Target Audiens</label>
                                    <input type="text" value={data.target_audience} onChange={e => setData('target_audience', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700">Harga</label>
                                    <input type="text" value={data.price} onChange={e => setData('price', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Unique Selling Point</label>
                                <input type="text" value={data.unique_selling_points} onChange={e => setData('unique_selling_points', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500" />
                            </div>
                            
                            <button type="submit" disabled={processing} className={`w-full text-white font-bold py-3 px-4 rounded-md transition ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700 shadow-lg'}`}>
                                {processing ? 'AI Sedang Menulis Ulang...' : 'Simpan & Re-generate AI!'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}