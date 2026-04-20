<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('sales_pages', function (Blueprint $table) {
        $table->id();
        // Relasi ke user (siapa yang membuat halaman ini)
        $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
        
        // Input mentah dari form user sesuai instruksi Opsi B
        $table->string('product_name');
        $table->text('product_description');
        $table->text('key_features')->nullable(); 
        $table->string('target_audience')->nullable();
        $table->string('price')->nullable();
        $table->string('unique_selling_points')->nullable();
        
        // Hasil generate AI (disimpan dalam format JSON agar mudah dirender React)
        $table->json('ai_generated_content')->nullable(); 
        
        $table->timestamps();
    });
}
};
