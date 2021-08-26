<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterSeatCountColumnInFlightsTable extends Migration
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
            $table->dropColumn('economy_seat_count');
            $table->dropColumn('business_seat_count');
        });
        Schema::table('flights', function (Blueprint $table) {
            //
            $table->unsignedInteger('economy_seat_count')->default(300);
            $table->unsignedInteger('business_seat_count')->default(40);
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
        });
    }
}
