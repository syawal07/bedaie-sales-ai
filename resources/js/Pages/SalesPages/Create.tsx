import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Create({ auth }: any) {
    const { data, setData, post, processing } = useForm({
        product_name: '',
        product_description: '',
        key_features: '',
        target_audience: '',
        price: '',
        unique_selling_points: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('sales.store'));
    };

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800">Generate Sales Page</h2>}>
            <Head title="Generate Sales Page" />
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-8 border-t-4 border-purple-600">
                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Nama Produk/Layanan *</label>
                                <input type="text" value={data.product_name} onChange={e => setData('product_name', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500" required placeholder="Contoh: Kelas Al-Quran Online BeDaie" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Deskripsi Singkat *</label>
                                <textarea value={data.product_description} onChange={e => setData('product_description', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500" required rows={3} placeholder="Ceritakan sedikit tentang produk ini..." />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Fitur & Keunggulan</label>
                                <input type="text" value={data.key_features} onChange={e => setData('key_features', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500" placeholder="Pisahkan dengan koma (Contoh: Live Zoom, Modul PDF, Sertifikat)" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700">Target Audiens</label>
                                    <input type="text" value={data.target_audience} onChange={e => setData('target_audience', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Contoh: Pemula, Anak-anak" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700">Harga</label>
                                    <input type="text" value={data.price} onChange={e => setData('price', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Contoh: Rp 150.000 / Bulan" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Unique Selling Point (Nilai Jual Unik)</label>
                                <input type="text" value={data.unique_selling_points} onChange={e => setData('unique_selling_points', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500" placeholder="Apa yang bikin produk ini beda dari yang lain?" />
                            </div>
                            
                            <button type="submit" disabled={processing} className={`w-full text-white font-bold py-3 px-4 rounded-md transition ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 shadow-lg'}`}>
                                {processing ? 'AI Sedang Bekerja Memikirkan Copywriting...' : 'Mulai Generate Halaman!'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}