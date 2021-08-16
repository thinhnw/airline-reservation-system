<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirportsPg extends Seeder
{
		/**
		 * Run the database seeds.
		 *
		 * @return void
		 */
		public function run()
		{
				//
				$path = 'app/sql_Data/airports_pg.sql';
				DB::unprepared(file_get_contents($path));
		}
}

