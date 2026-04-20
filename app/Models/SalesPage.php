<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property string $product_name
 * @property string $product_description
 * @property string|null $key_features
 * @property string|null $target_audience
 * @property string|null $price
 * @property string|null $unique_selling_points
 * @property array|null $ai_generated_content
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 */
class SalesPage extends Model
{
    protected $fillable = [
        'user_id',
        'product_name',
        'product_description',
        'key_features',
        'target_audience',
        'price',
        'unique_selling_points',
        'ai_generated_content',
    ];

    protected $casts = [
        'ai_generated_content' => 'array',
    ];
}