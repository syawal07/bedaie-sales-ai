import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }: any) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard Utama
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-50 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-2xl border border-gray-100">
                        <div className="p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-50 to-white">
                            <div>
                                <h3 className="text-3xl font-extrabold text-purple-900 mb-2">
                                    Selamat Datang, {auth.user.name}! 👋
                                </h3>
                                <p className="text-gray-600 text-lg max-w-2xl">
                                    Anda siap membuat halaman penjualan yang mengkonversi tinggi hari ini? Sistem AI kami sudah bersiap untuk membantu Anda.
                                </p>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <Link
                                    href={route('sales.create')}
                                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition transform hover:-translate-y-1"
                                >
                                    + Generate Sales Page Baru
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600 text-2xl">
                                📄
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800">Manajemen Halaman</h4>
                                <p className="text-gray-500 mt-1 mb-4">Lihat, edit, atau hapus halaman penjualan yang sudah Anda buat sebelumnya di menu khusus.</p>
                                <Link href={route('sales.index')} className="text-purple-600 font-semibold hover:text-purple-800">
                                    Buka Daftar Halaman AI &rarr;
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600 text-2xl">
                                ⚡
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800">Performa Laju</h4>
                                <p className="text-gray-500 mt-1">Ditenagai oleh LLaMA 3.3 dan infrastruktur LPU untuk hasil *copywriting* yang nyaris instan dan akurat.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}