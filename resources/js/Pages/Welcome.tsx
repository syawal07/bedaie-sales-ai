import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }: any) {
    return (
        <>
            <Head title="BeDaie Sales AI - Generator Halaman Penjualan" />
            <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
                
                <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
                    <div className="text-2xl font-extrabold text-purple-800 tracking-tight">
                        BeDaie<span className="text-purple-500">.AI</span>
                    </div>
                    <div>
                        {auth.user ? (
                            <Link href={route('dashboard')} className="text-purple-700 font-semibold hover:text-purple-900">
                                Masuk ke Dashboard &rarr;
                            </Link>
                        ) : (
                            <div className="space-x-4">
                                <Link href={route('login')} className="text-gray-600 hover:text-purple-700 font-medium transition">
                                    Log in
                                </Link>
                                <Link href={route('register')} className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-medium transition shadow-md">
                                    Daftar Gratis
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>

                <main className="flex-grow flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute top-48 -left-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="max-w-4xl mx-auto z-10 py-16">
                        <div className="inline-block bg-purple-100 text-purple-800 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-purple-200">
                            ✨ Ditenagai oleh LLaMA 3.3 AI Model
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
                            Buat Sales Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Hitungan Detik</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Tinggalkan cara lama menulis copywriting berjam-jam. Masukkan detail produk Anda, dan biarkan AI kami meracik halaman penawaran yang terstruktur, persuasif, dan siap konversi.
                        </p>
                        
                        <div className="flex justify-center gap-4">
                            {auth.user ? (
                                <Link href={route('dashboard')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-lg">
                                    Mulai Buat Halaman
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('register')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-lg">
                                        Coba Sekarang
                                    </Link>
                                    <Link href={route('login')} className="bg-white hover:bg-gray-50 text-purple-700 font-bold py-4 px-8 rounded-full shadow-md border border-gray-200 transition text-lg">
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </main>

                <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2026 BeDaie Sales AI Task. Dibuat oleh Syawal Saputra.</p>
                </footer>
            </div>
        </>
    );
}