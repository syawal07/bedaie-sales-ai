<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use App\Models\SalesPage;
use Inertia\Inertia;

class SalesPageController extends Controller
{
    public function index()
    {
        $pages = SalesPage::where('user_id', Auth::id())->latest()->get();
        
        return Inertia::render('SalesPages/Index', [
            'pages' => $pages
        ]);
    }

    public function create()
    {
        return Inertia::render('SalesPages/Create');
    }

public function store(Request $request)
    {
        $validated = $request->validate([
            'product_name' => 'required|string|max:255',
            'product_description' => 'required|string',
            'key_features' => 'nullable|string',
            'target_audience' => 'nullable|string',
            'price' => 'nullable|string',
            'unique_selling_points' => 'nullable|string',
        ]);

        $prompt = "You are an expert copywriter. Generate a high-converting sales page based on this data.\n" .
                  "Product: " . $validated['product_name'] . "\n" .
                  "Description: " . $validated['product_description'] . "\n" .
                  "Features: " . ($validated['key_features'] ?? '-') . "\n" .
                  "Target Audience: " . ($validated['target_audience'] ?? '-') . "\n" .
                  "Price: " . ($validated['price'] ?? '-') . "\n" .
                  "USP: " . ($validated['unique_selling_points'] ?? '-') . "\n\n" .
                  "Return strictly a JSON object with these exact keys: " .
                  "headline, sub_headline, product_description, benefits, features_breakdown, pricing_display, call_to_action. " .
                  "The keys 'benefits' and 'features_breakdown' MUST be arrays of strings.";

        $apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

        $response = Http::withToken(env('GROQ_API_KEY'))
            ->post($apiUrl, [
                'model' => 'llama-3.3-70b-versatile',
                'messages' => [
                    ['role' => 'user', 'content' => $prompt]
                ],
                'temperature' => 0.7,
                'response_format' => ['type' => 'json_object']
            ]);

        $aiContent = json_decode($response->json('choices.0.message.content'), true);

        if (!$aiContent || !isset($aiContent['headline'])) {
            $aiContent = [
                'headline' => 'Gagal Memproses AI',
                'sub_headline' => 'Mohon generate ulang.',
                'product_description' => 'Terjadi kesalahan format dari server.',
            ];
        }

        $salesPage = SalesPage::create([
            'user_id' => Auth::id(),
            'product_name' => $validated['product_name'],
            'product_description' => $validated['product_description'],
            'key_features' => $validated['key_features'],
            'target_audience' => $validated['target_audience'],
            'price' => $validated['price'],
            'unique_selling_points' => $validated['unique_selling_points'],
            'ai_generated_content' => $aiContent,
        ]);

        return redirect()->route('sales.show', $salesPage->getKey());
    }

    public function show(SalesPage $salesPage)
    {
        if ($salesPage->getAttribute('user_id') !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('SalesPages/Show', [
            'salesPage' => $salesPage
        ]);
    }

    public function edit(SalesPage $salesPage)
    {
        if ($salesPage->getAttribute('user_id') !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('SalesPages/Edit', [
            'salesPage' => $salesPage
        ]);
    }

    public function update(Request $request, SalesPage $salesPage)
    {
        if ($salesPage->getAttribute('user_id') !== Auth::id()) {
            abort(403);
        }

        $validated = $request->validate([
            'product_name' => 'required|string|max:255',
            'product_description' => 'required|string',
            'key_features' => 'nullable|string',
            'target_audience' => 'nullable|string',
            'price' => 'nullable|string',
            'unique_selling_points' => 'nullable|string',
        ]);

        $prompt = "You are an expert copywriter. Generate a high-converting sales page based on this data.\n" .
                  "Product: " . $validated['product_name'] . "\n" .
                  "Description: " . $validated['product_description'] . "\n" .
                  "Features: " . ($validated['key_features'] ?? '-') . "\n" .
                  "Target Audience: " . ($validated['target_audience'] ?? '-') . "\n" .
                  "Price: " . ($validated['price'] ?? '-') . "\n" .
                  "USP: " . ($validated['unique_selling_points'] ?? '-') . "\n\n" .
                  "Return strictly a JSON object with these exact keys: " .
                  "headline, sub_headline, product_description, benefits, features_breakdown, pricing_display, call_to_action. " .
                  "The keys 'benefits' and 'features_breakdown' MUST be arrays of strings.";

        $apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

        $response = Http::withToken(env('GROQ_API_KEY'))
            ->post($apiUrl, [
                'model' => 'llama-3.3-70b-versatile',
                'messages' => [
                    ['role' => 'user', 'content' => $prompt]
                ],
                'temperature' => 0.7,
                'response_format' => ['type' => 'json_object']
            ]);

        $aiContent = json_decode($response->json('choices.0.message.content'), true);

        if (!$aiContent || !isset($aiContent['headline'])) {
            $aiContent = [
                'headline' => 'Gagal Memproses AI',
                'sub_headline' => 'Mohon generate ulang.',
                'product_description' => 'Terjadi kesalahan format dari server.',
            ];
        }

        $salesPage->update([
            'product_name' => $validated['product_name'],
            'product_description' => $validated['product_description'],
            'key_features' => $validated['key_features'],
            'target_audience' => $validated['target_audience'],
            'price' => $validated['price'],
            'unique_selling_points' => $validated['unique_selling_points'],
            'ai_generated_content' => $aiContent,
        ]);

        return redirect()->route('sales.show', $salesPage->getKey());
    }

    public function destroy(SalesPage $salesPage)
    {
        if ($salesPage->getAttribute('user_id') !== Auth::id()) {
            abort(403);
        }

        $salesPage->delete();

        return redirect()->route('sales.index');
    }
}