<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function exportWord() {
        $phpWord = new \PhpOffice\PhpWord\PhpWord();

        /* Note: any element you append to a document must reside inside of a Section. */

        // Adding an empty Section to the document...
        $section = $phpWord->addSection();

        $header = array('size' => 16, 'bold' => true);

        // 1. Basic table
        
        $rows = 10;
        $cols = 5;
        $section->addText('Basic table', $header);
        
        $table = $section->addTable();
        for ($r = 1; $r <= $rows; $r++) {
            $table->addRow();
            for ($c = 1; $c <= $cols; $c++) {
                $table->addCell(1750)->addText("Row {$r}, Cell {$c}");
            }
        }

        // Saving the document as OOXML file...
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save('storage/app/helloWorld.docx');
    }
}
