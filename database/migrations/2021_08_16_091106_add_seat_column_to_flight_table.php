<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSeatColumnToFlightTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('flights', function (Blueprint $table) {
            //
            $businessSeats = [];
            $economySeats = [];
            for ($i = 0; $i < 11; $i++) {
                $businessSeats[] = [ false, false, false, false ];
            }
            for ($i = 0; $i < 30; $i++) {
                $economySeats[] = [];
                for ($j = 0; $j < 10; $j++) 
                    $economySeats[$i][] = false;
            }
            $table->json('business_seats')->default(json_encode($businessSeats));
            $table->json('economy_seats')->default(json_encode($economySeats));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('flights', function (Blueprint $table) {
            //
            $table->dropColumn('business_seats');
            $table->dropColumn('economy_seats');
        });
    }
}
