<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SalesPageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/sales-pages', [SalesPageController::class, 'index'])->name('sales.index');
    Route::get('/sales-pages/create', [SalesPageController::class, 'create'])->name('sales.create');
    Route::post('/sales-pages', [SalesPageController::class, 'store'])->name('sales.store');
    Route::get('/sales-pages/{salesPage}', [SalesPageController::class, 'show'])->name('sales.show');
    Route::get('/sales-pages/{salesPage}/edit', [SalesPageController::class, 'edit'])->name('sales.edit');
    Route::put('/sales-pages/{salesPage}', [SalesPageController::class, 'update'])->name('sales.update');
    Route::delete('/sales-pages/{salesPage}', [SalesPageController::class, 'destroy'])->name('sales.destroy');
});

require __DIR__.'/auth.php';