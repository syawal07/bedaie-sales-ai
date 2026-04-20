import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ pages }: any) {
    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus Sales Page ini? Data tidak dapat dikembalikan.')) {
            router.delete(route('sales.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800">Dashboard Sales Page</h2>}
        >
            <Head title="Sales Pages" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="mb-6 flex space-x-4">
                            <Link href={route('sales.create')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                + Buat Sales Page Baru
                            </Link>
                        </div>
                        
                        {pages.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">Belum ada Sales Page yang dibuat.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pages.map((page: any) => (
                                    <div key={page.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                        <h3 className="font-bold text-lg text-purple-800 truncate">{page.product_name}</h3>
                                        <p className="text-sm text-gray-600 mt-1 mb-4 truncate">{page.product_description}</p>
                                       <div className="flex justify-between items-center border-t pt-3">
    <div className="flex space-x-4">
        <Link href={route('sales.show', page.id)} className="text-blue-600 hover:text-blue-800 text-sm font-bold">
            Preview
        </Link>
        <Link href={route('sales.edit', page.id)} className="text-yellow-600 hover:text-yellow-800 text-sm font-bold">
            Edit & Re-generate
        </Link>
    </div>
    <button onClick={() => handleDelete(page.id)} className="text-red-600 hover:text-red-800 text-sm font-bold">
        Hapus
    </button>
</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}