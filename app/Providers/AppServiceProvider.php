<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\StripeCustomer;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Cashier::useCustomerModel(StripeCustomer::class);
    }
}
