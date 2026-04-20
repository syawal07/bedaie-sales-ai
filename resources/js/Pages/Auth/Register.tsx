import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <Head title="Register" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link href="/" className="text-4xl font-extrabold text-purple-800 tracking-tight">
                    BeDaie<span className="text-purple-500">.AI</span>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Mulai Perjalanan Anda
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Sudah memiliki akun?{' '}
                    <Link href={route('login')} className="font-medium text-purple-600 hover:text-purple-500 transition">
                        Masuk di sini
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-purple-100">
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                            <div className="mt-1">
                                <input id="name" type="text" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                            </div>
                            <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Alamat Email</label>
                            <div className="mt-1">
                                <input id="email" type="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                            </div>
                            <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input id="password" type="password" name="password" value={data.password} onChange={(e) => setData('password', e.target.value)} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                            </div>
                            <span className="text-red-500 text-xs mt-1 block">{errors.password}</span>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
                            <div className="mt-1">
                                <input id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                            </div>
                            <span className="text-red-500 text-xs mt-1 block">{errors.password_confirmation}</span>
                        </div>

                        <div className="pt-2">
                            <button type="submit" disabled={processing} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition disabled:opacity-50">
                                Daftar Sekarang
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}