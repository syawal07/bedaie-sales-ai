import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function Show({ salesPage }: any) {
    const content = salesPage.ai_generated_content || {};
    const previewRef = useRef<HTMLDivElement>(null);
    const [activeTheme, setActiveTheme] = useState('purple');

    const themes: any = {
        purple: {
            hero: 'from-purple-800 to-purple-600',
            title: 'text-purple-800',
            cardBg: 'bg-purple-50',
            cardBorder: 'border-purple-100',
            icon: 'text-purple-600',
            button: 'bg-purple-500 hover:bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]',
            accentText: 'text-purple-300'
        },
        blue: {
            hero: 'from-blue-900 to-blue-700',
            title: 'text-blue-900',
            cardBg: 'bg-blue-50',
            cardBorder: 'border-blue-100',
            icon: 'text-blue-600',
            button: 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]',
            accentText: 'text-blue-300'
        },
        emerald: {
            hero: 'from-emerald-800 to-emerald-600',
            title: 'text-emerald-800',
            cardBg: 'bg-emerald-50',
            cardBorder: 'border-emerald-100',
            icon: 'text-emerald-600',
            button: 'bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]',
            accentText: 'text-emerald-300'
        }
    };

    const currentTheme = themes[activeTheme];

    const exportToHTML = () => {
        if (!previewRef.current) return;

        const rawHTML = previewRef.current.innerHTML;
        const pageTitle = salesPage.product_name;
        
        const fullHTML = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle} - Sales Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>body { font-family: ui-sans-serif, system-ui, sans-serif; }</style>
</head>
<body class="bg-gray-100 antialiased">
    <div class="py-8">
        ${rawHTML}
    </div>
</body>
</html>`;

        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = `sales-page-${pageTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <AuthenticatedLayout 
            header={
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="font-semibold text-xl text-gray-800">Live Preview: {salesPage.product_name}</h2>
                    
                    <div className="flex items-center space-x-4">
                        <div className="flex bg-white rounded-md shadow-sm border p-1">
                            <button onClick={() => setActiveTheme('purple')} className={`px-3 py-1 text-sm font-semibold rounded ${activeTheme === 'purple' ? 'bg-purple-100 text-purple-800' : 'text-gray-500 hover:bg-gray-50'}`}>Ungu</button>
                            <button onClick={() => setActiveTheme('blue')} className={`px-3 py-1 text-sm font-semibold rounded ${activeTheme === 'blue' ? 'bg-blue-100 text-blue-800' : 'text-gray-500 hover:bg-gray-50'}`}>Biru</button>
                            <button onClick={() => setActiveTheme('emerald')} className={`px-3 py-1 text-sm font-semibold rounded ${activeTheme === 'emerald' ? 'bg-emerald-100 text-emerald-800' : 'text-gray-500 hover:bg-gray-50'}`}>Hijau</button>
                        </div>

                        <button 
                            onClick={exportToHTML}
                            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md shadow-sm transition flex items-center text-sm"
                        >
                            <span className="mr-2">⬇️</span> Export HTML
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Live Preview Sales Page" />
            
            <div className="py-8 bg-gray-100">
                <div ref={previewRef} className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden" style={{ minHeight: '800px' }}>
                    
                    <div className={`bg-gradient-to-r ${currentTheme.hero} text-white text-center py-20 px-6 rounded-b-[3rem] shadow-md transition-all duration-500`}>
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
                            {content.headline || 'Menganalisis Headline...'}
                        </h1>
                        <p className="text-2xl font-light opacity-90 max-w-3xl mx-auto">
                            {content.sub_headline || 'Menyiapkan Sub Headline...'}
                        </p>
                    </div>

                    <div className="p-10 max-w-4xl mx-auto">
                        <p className="text-gray-700 text-xl leading-relaxed text-center mb-12 italic">
                            "{content.product_description || 'Sedang memuat deskripsi produk...'}"
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            <div className={`${currentTheme.cardBg} p-6 rounded-2xl border ${currentTheme.cardBorder} transition-colors duration-500`}>
                                <h3 className={`text-2xl font-bold ${currentTheme.title} mb-4 flex items-center`}>
                                    <span className="text-3xl mr-2">✨</span> Kenapa Harus Memilih Ini?
                                </h3>
                                <ul className="space-y-3">
                                    {content.benefits?.map((benefit: string, index: number) => (
                                        <li key={index} className="flex items-start text-gray-700">
                                            <span className={`${currentTheme.icon} mr-2 font-bold`}>✓</span> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                                    Yang Akan Anda Dapatkan:
                                </h3>
                                <ul className="space-y-3">
                                    {content.features_breakdown?.map((feature: string, index: number) => (
                                        <li key={index} className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg shadow-sm">
                                            <span className="text-green-500 mr-3 text-xl">✅</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Apa Kata Mereka?</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-xl text-gray-600 relative">
                                    <span className={`text-4xl ${currentTheme.accentText} absolute top-2 left-4`}>"</span>
                                    <p className="italic relative z-10 pt-2">Materi yang disampaikan sangat jelas dan terstruktur. Sangat membantu saya memahami konsep dari dasar hingga mahir.</p>
                                    <div className={`mt-4 font-bold ${currentTheme.title}`}>- Pelanggan Terverifikasi</div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl text-gray-600 relative">
                                    <span className={`text-4xl ${currentTheme.accentText} absolute top-2 left-4`}>"</span>
                                    <p className="italic relative z-10 pt-2">Pelayanan sangat profesional dan hasilnya melampaui ekspektasi. Sangat direkomendasikan untuk siapa saja.</p>
                                    <div className={`mt-4 font-bold ${currentTheme.title}`}>- Klien Setia</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 text-white p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden mt-16">
                            <h4 className={`text-xl font-medium ${currentTheme.accentText} mb-3`}>Penawaran Spesial</h4>
                            <p className="text-5xl font-black mb-8 tracking-tight">
                                {content.pricing_display || 'Lihat Harga Spesial'}
                            </p>
                            
                            <button className={`${currentTheme.button} transition-all duration-300 text-white font-bold py-4 px-10 rounded-full text-xl animate-pulse`}>
                                {content.call_to_action || 'Daftar Sekarang'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}