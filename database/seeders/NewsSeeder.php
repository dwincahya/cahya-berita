<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i <20; $i++){
        DB::table('news')->insert([
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(2, true),
            'category' => fake()->word(),
            'author' => fake()->email(),
        ]);
    }
    }
}
