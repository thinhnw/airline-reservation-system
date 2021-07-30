<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'first_name' => 'My',
            'last_name' => 'Admin',
            'gender' => 'male',
            'email' => 'admin@ars.com',
            'password' => Hash::make('123456'),
            'user_type' => 'admin'
        ]);
    }
}
