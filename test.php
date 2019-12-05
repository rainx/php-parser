<?php
$variable = 1;
$barv = <<<EOT
    foo
    ${variable}    wawa
    bar
    EOT;

echo $barv;
