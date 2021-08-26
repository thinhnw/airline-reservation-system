composer install 

php artisan key:gen

php artisan jwt:secret

php artisan db:seed --class=Airports
php artisan migrate --seed

npm install

php artisan serve